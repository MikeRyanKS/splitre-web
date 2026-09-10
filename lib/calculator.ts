// Copy of src/lib/calculator.ts (which is itself manually kept in sync with
// supabase/functions/_shared/calculator.ts, since Deno can't import from
// src/). The marketing site is a separate Next.js package and can't import
// across into src/ either, so this is a third copy for the public demo
// calculator. All three are asserted equal for identical inputs by
// src/lib/calculator.parity.test.ts — a fix or new rule type applied to only
// one copy fails that test instead of silently diverging the demo's numbers
// from the real app's.
import type { RuleNode } from "@/types/commission-plan";

export type LineItem = {
  label: string;
  amount: number; // negative = deduction, positive = addition
  party: "broker" | "agent" | "third_party";
};

export type CapLedger = {
  cumulative_broker_cut: number; // YTD broker cut before this deal (includes opening balance)
  cap_limit: number;             // from the plan's cap rule
};

export type OtherDeduction = {
  label: string;
  amount: number;
};

export type DealOverrides = {
  referral_pct?: number;         // outside referral % off the top
  relocation_pct?: number;       // relocation company % off the top
  bonus_amount?: number;         // bonus commission added to GCI
  other_deductions?: OtherDeduction[]; // arbitrary fixed-dollar deductions
  deal_count?: number;           // confirmed deals this year — used by counter_gate rules
};

export type BreakdownResult = {
  line_items: LineItem[];
  agent_net: number;
  broker_cut: number;             // broker's take from this deal
  new_cumulative_broker_cut: number; // updated YTD after this deal
  cap_remaining: number | null;    // how much broker can still collect this year after this deal; null = no cap on this plan
  cap_hit: boolean;               // did the agent hit their cap this deal or already capped?
  gci_after_top: number;          // GCI after off-the-top deductions (splittable amount)
};

export function calculateDeal(
  gci: number,
  rules: RuleNode[],
  capLedger: CapLedger,
  overrides: DealOverrides = {}
): BreakdownResult {
  const items: LineItem[] = [];
  let balance = gci;

  // Apply bonus commission first
  if (overrides.bonus_amount && overrides.bonus_amount > 0) {
    balance += overrides.bonus_amount;
    items.push({ label: "Bonus commission", amount: overrides.bonus_amount, party: "agent" });
  }

  // "Gross" for off-the-top percentages = the commission after any bonus, before any
  // deductions. Percentage fees default to a slice of this gross (independent of one
  // another), matching standard franchise-royalty math; a percentage rule can opt into
  // base:"cascade" to be charged on the running balance after prior off-the-top
  // deductions instead. This only matters when a deal stacks multiple off-the-top %s.
  const grossBase = balance;

  // Stage 1 — off-the-top deductions (apply before split)
  // Deal-level overrides first. Referral and relocation are always a slice of the gross.
  if (overrides.referral_pct && overrides.referral_pct > 0) {
    const fee = round(grossBase * overrides.referral_pct / 100);
    balance -= fee;
    items.push({ label: `Outside referral fee (${overrides.referral_pct}%)`, amount: -fee, party: "third_party" });
  }

  if (overrides.relocation_pct && overrides.relocation_pct > 0) {
    const fee = round(grossBase * overrides.relocation_pct / 100);
    balance -= fee;
    items.push({ label: `Relocation company fee (${overrides.relocation_pct}%)`, amount: -fee, party: "third_party" });
  }

  // Plan-level stage 1 percentage deductions (franchise fee etc.)
  for (const rule of rules) {
    if (rule.type === "percentage_deduction" && rule.stage === 1) {
      const feeBase = rule.base === "cascade" ? balance : grossBase;
      const fee = round(feeBase * rule.pct / 100);
      balance -= fee;
      items.push({ label: `${rule.label} (${rule.pct}%)`, amount: -fee, party: "third_party" });
    }
    // Plan-level stage 1 flat deductions (rare but supported)
    if (rule.type === "flat_deduction" && rule.stage === 1) {
      balance -= rule.amount;
      items.push({ label: rule.label, amount: -rule.amount, party: "third_party" });
    }
  }

  const gciAfterTop = balance;

  // Stage 2 — split & cap
  const splitRule = rules.find((r) => r.type === "split");
  const capRule = rules.find((r) => r.type === "cap");

  let brokerCut = 0;
  let agentGross = balance;

  if (splitRule && splitRule.type === "split") {
    const brokerShare = round(balance * splitRule.broker_pct / 100);
    const agentShare = balance - brokerShare;

    if (capRule && capRule.type === "cap") {
      const capHeadroom = Math.max(0, capRule.limit - capLedger.cumulative_broker_cut);
      brokerCut = Math.min(brokerShare, capHeadroom);
      agentGross = balance - brokerCut;

      if (brokerShare > 0) {
        items.push({
          label: `Broker cut (${splitRule.broker_pct}%)`,
          amount: -brokerCut,
          party: "broker",
        });
      }

      if (brokerShare > capHeadroom && capHeadroom > 0) {
        // Partial deal — cap hit mid-deal
        items.push({
          label: `Cap hit: broker share reduced to cap headroom ($${capHeadroom.toLocaleString()})`,
          amount: 0,
          party: "broker",
        });
      }

      const newCumulative = capLedger.cumulative_broker_cut + brokerCut;
      const capNowHit = newCumulative >= capRule.limit;

      // Post-cap flat fee applies if capped
      if (capNowHit && capRule.post_cap_flat && capRule.post_cap_flat > 0) {
        agentGross -= capRule.post_cap_flat;
        brokerCut += capRule.post_cap_flat;
        items.push({
          label: `Post-cap transaction fee`,
          amount: -capRule.post_cap_flat,
          party: "broker",
        });
      }

      // Agent gross label
      items.push({ label: "Agent gross", amount: agentGross, party: "agent" });

      // Stage 3 deductions
      agentGross = applyStage3(rules, agentGross, items, capLedger, capRule.limit, overrides.other_deductions, overrides.deal_count);

      const newCumulativeAfterPostCap = capLedger.cumulative_broker_cut + brokerCut;

      return {
        line_items: items,
        agent_net: agentGross,
        broker_cut: brokerCut,
        new_cumulative_broker_cut: newCumulativeAfterPostCap,
        cap_remaining: Math.max(0, capRule.limit - newCumulativeAfterPostCap),
        cap_hit: newCumulativeAfterPostCap >= capRule.limit,
        gci_after_top: gciAfterTop,
      };
    } else {
      // No cap rule — straight split
      brokerCut = brokerShare;
      agentGross = agentShare;
      items.push({ label: `Broker cut (${splitRule.broker_pct}%)`, amount: -brokerCut, party: "broker" });
      items.push({ label: "Agent gross", amount: agentGross, party: "agent" });
    }
  } else {
    // No split rule — 100% plan, agent keeps everything
    items.push({ label: "Agent gross (100%)", amount: agentGross, party: "agent" });
  }

  // Stage 3 (no cap path)
  agentGross = applyStage3(rules, agentGross, items, capLedger, Infinity, overrides.other_deductions, overrides.deal_count);

  return {
    line_items: items,
    agent_net: agentGross,
    broker_cut: brokerCut,
    new_cumulative_broker_cut: capLedger.cumulative_broker_cut + brokerCut,
    // null (not Infinity) — this plan has no cap rule, and Infinity does not survive
    // JSON.stringify (it silently becomes null anyway when breakdown_snapshot is
    // persisted as jsonb), so returning null here makes that explicit and correct
    // rather than relying on JSON serialization to coincidentally do the right thing.
    cap_remaining: capRule && capRule.type === "cap"
      ? Math.max(0, capRule.limit - (capLedger.cumulative_broker_cut + brokerCut))
      : null,
    cap_hit: false,
    gci_after_top: gciAfterTop,
  };
}

function applyStage3(
  rules: RuleNode[],
  agentGross: number,
  items: LineItem[],
  capLedger: CapLedger,
  capLimit: number,
  otherDeductions: OtherDeduction[] | undefined,
  dealCount?: number,
): number {
  const alreadyCapped = capLedger.cumulative_broker_cut >= capLimit;
  // Stage 3 is agent-only — every fee here comes out of the agent's own share,
  // never the broker's, unlike Stage 1's shared/off-the-top fees (which
  // correctly use GCI). So a percentage in this stage is a percentage of what
  // the agent has to begin with, snapshotted once here before any other
  // Stage-3 deduction reduces it — not GCI, and not the running total (which
  // would make the fee's cost depend on unrelated rule ordering).
  const agentGrossAtStart = agentGross;

  for (const rule of rules) {
    if (rule.type === "flat_deduction" && rule.stage === 3) {
      const deduction = rule.is_percentage ? round(agentGrossAtStart * rule.amount / 100) : rule.amount;
      agentGross -= deduction;
      items.push({
        label: rule.is_percentage ? `${rule.label} (${rule.amount}%)` : rule.label,
        amount: -deduction,
        party: "broker",
      });
    }

    if (rule.type === "counter_gate") {
      const withinWindow = dealCount !== undefined
        ? dealCount < rule.first_n_deals
        : false;
      if (!alreadyCapped && withinWindow) {
        const fee = round(agentGrossAtStart * rule.pct / 100);
        agentGross -= fee;
        items.push({ label: `${rule.label} (${rule.pct}%)`, amount: -fee, party: "broker" });
      }
    }
  }

  // Ad-hoc one-off deductions added on this specific deal (e.g. a repair
  // credit passed to the agent). These come out of the agent's own remaining
  // share like every other stage-3 fee — previously they were subtracted
  // off the top before the broker split, so the broker was unintentionally
  // absorbing a share of a cost that was meant to be the agent's alone.
  if (otherDeductions) {
    for (const d of otherDeductions) {
      if (d.label && d.amount > 0) {
        agentGross -= d.amount;
        items.push({ label: d.label, amount: -d.amount, party: "third_party" });
      }
    }
  }

  return agentGross;
}

function round(n: number): number {
  return Math.round(n * 100) / 100;
}

// ─── Co-agent deals ─────────────────────────────────────────────────────────
// One transaction credited to several agents, each with a GCI share %. Whole-deal
// off-the-top (bonus, referral %, relocation %) is taken ONCE; then each agent's
// share of what remains runs through calculateDeal against their own rules + cap
// context. Simplified from the app's calculateMultiAgentDeal for the public demo
// (no teams / shared pools here — each participant is independent).

export type MultiAgentParticipant = {
  name: string;
  gci_share_pct: number;
  rules: RuleNode[];
  cap_limit: number;
  cumulative_broker_cut: number;
};

export type MultiAgentParticipantResult = {
  name: string;
  gci_share_pct: number;
  personal_gci: number;
  breakdown: BreakdownResult;
};

export type MultiAgentBreakdownResult = {
  deal_line_items: LineItem[]; // bonus / referral / relocation — taken once for the whole deal
  line_items: LineItem[];      // deal lines, then each agent's lines with the agent name prefixed
  gci_after_top: number;       // the pool that gets split
  participants: MultiAgentParticipantResult[];
  broker_cut: number;          // sum across participants
  agent_net: number;           // sum across participants
  cap_hit: boolean;            // did any participant hit their cap on this deal
};

export function calculateMultiAgentDeal(
  gci: number,
  dealOverrides: DealOverrides,
  participants: MultiAgentParticipant[],
): MultiAgentBreakdownResult {
  const dealLineItems: LineItem[] = [];
  let balance = gci;

  const bonus = dealOverrides.bonus_amount ?? 0;
  if (bonus > 0) {
    balance += bonus;
    dealLineItems.push({ label: "Bonus commission", amount: bonus, party: "agent" });
  }
  const grossBase = balance;

  const referralPct = dealOverrides.referral_pct ?? 0;
  if (referralPct > 0) {
    const fee = round(grossBase * referralPct / 100);
    balance -= fee;
    dealLineItems.push({ label: `Outside referral fee (${referralPct}%)`, amount: -fee, party: "third_party" });
  }
  const relocationPct = dealOverrides.relocation_pct ?? 0;
  if (relocationPct > 0) {
    const fee = round(grossBase * relocationPct / 100);
    balance -= fee;
    dealLineItems.push({ label: `Relocation company fee (${relocationPct}%)`, amount: -fee, party: "third_party" });
  }

  const gciAfterTop = balance;

  // Each participant's slice of the pool. The last position absorbs the rounding
  // remainder so the slices sum EXACTLY to gciAfterTop.
  const personalGcis: number[] = [];
  let allocated = 0;
  participants.forEach((p, i) => {
    const slice = i < participants.length - 1
      ? round(gciAfterTop * p.gci_share_pct / 100)
      : round(gciAfterTop - allocated);
    personalGcis.push(slice);
    allocated += slice;
  });

  const results: MultiAgentParticipantResult[] = participants.map((p, i) => ({
    name: p.name,
    gci_share_pct: p.gci_share_pct,
    personal_gci: personalGcis[i],
    breakdown: calculateDeal(
      personalGcis[i],
      p.rules,
      { cumulative_broker_cut: p.cumulative_broker_cut, cap_limit: p.cap_limit },
      // bonus / referral / relocation were already taken above; only the primary
      // (position 0) carries any ad-hoc other_deductions.
      { other_deductions: i === 0 ? dealOverrides.other_deductions : undefined },
    ),
  }));

  const lineItems: LineItem[] = [
    ...dealLineItems,
    ...results.flatMap((r) =>
      r.breakdown.line_items.map((li) => ({ ...li, label: `${r.name}: ${li.label}` })),
    ),
  ];

  return {
    deal_line_items: dealLineItems,
    line_items: lineItems,
    gci_after_top: gciAfterTop,
    participants: results,
    broker_cut: round(results.reduce((s, r) => s + r.breakdown.broker_cut, 0)),
    agent_net: round(results.reduce((s, r) => s + r.breakdown.agent_net, 0)),
    cap_hit: results.some((r) => r.breakdown.cap_hit),
  };
}
