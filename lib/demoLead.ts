// localStorage-only "who is this" cache for the public demo. This is a
// convenience so a returning visitor isn't asked for their name/email again
// in the same browser — it is NOT the enforcement mechanism for the free-deal
// limit (that's server-side, keyed by email, in the demo-lead edge function).
// Clearing localStorage or using a different browser just means re-entering
// an email the server already has a count for.
const STORAGE_KEY = "splitre_demo_lead";

export type StoredLead = {
  email: string;
  firstName: string;
  remaining: number | null;
};

export function getStoredLead(): StoredLead | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredLead;
    if (!parsed.email || !parsed.firstName) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function storeLead(lead: StoredLead): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lead));
  } catch {
    // Storage unavailable (private browsing, quota) — the modal will simply
    // reappear next time, which is a harmless degradation.
  }
}

const DEMO_LEAD_URL = "https://pvxduycjxnvccputddbq.supabase.co/functions/v1/demo-lead";

export type DemoDealPayload = {
  brokerage_name: string;
  address: string;
  agent_name: string;
  closing_date: string;
  line_items: { label: string; amount: number }[];
  agent_net: number;
  broker_cut: number;
};

export type DemoLeadResult =
  | { ok: true; limited: false; remaining: number }
  | { ok: true; limited: true }
  | { ok: false; error: string };

// Every free-deal check goes through the server (email-keyed, 3 per 6
// months) — the localStorage cache above only remembers who the visitor
// said they were, it never decides whether they're still allowed a deal.
export async function requestDemoDeal(
  action: "download" | "email",
  email: string,
  firstName: string,
  deal: DemoDealPayload
): Promise<DemoLeadResult> {
  try {
    const res = await fetch(DEMO_LEAD_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, first_name: firstName, action, deal }),
    });
    const data = await res.json();
    if (!res.ok) return { ok: false, error: data.error ?? "Something went wrong — please try again." };
    if (data.limited) return { ok: true, limited: true };
    return { ok: true, limited: false, remaining: data.remaining };
  } catch {
    return { ok: false, error: "Couldn't reach SplitRE — check your connection and try again." };
  }
}
