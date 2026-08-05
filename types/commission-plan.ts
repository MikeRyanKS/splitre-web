// Copy of src/types/commission-plan.ts — the marketing site (web/) is a
// separate Next.js package and can't import across into src/, so the demo
// calculator keeps its own copy. Kept in sync manually; see
// src/lib/calculator.parity.test.ts, which runs all calculator copies
// (client, edge function, and this one) against identical scenarios.
export type FlatDeductionRule = {
  type: "flat_deduction";
  id: string;
  label: string;
  amount: number;
  stage: 1 | 3;
  is_percentage?: boolean;
};

export type PercentageDeductionRule = {
  type: "percentage_deduction";
  id: string;
  label: string;
  pct: number;
  stage: 1;
  base?: "gross" | "cascade";
};

export type SplitRule = {
  type: "split";
  id: string;
  agent_pct: number;
  broker_pct: number;
};

export type CapRule = {
  type: "cap";
  id: string;
  limit: number;
  post_cap_flat?: number;
};

export type CounterGateRule = {
  type: "counter_gate";
  id: string;
  label: string;
  pct: number;
  first_n_deals: number;
};

export type TeamSplitRule = {
  type: "team_split";
  id: string;
  lead_pct: number;
  lead_agent_id: string;
};

export type RuleNode =
  | FlatDeductionRule
  | PercentageDeductionRule
  | SplitRule
  | CapRule
  | CounterGateRule
  | TeamSplitRule;
