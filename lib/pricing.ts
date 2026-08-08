export interface PricingPlan {
  name: string;
  monthly: number;
  annual: number;
  annualPerMonth: number;
  annualSavings: number;
  agentLimit: string;
  desc: string;
  popular: boolean;
}

// Shared by PricingClient.tsx (rendering) and app/pricing/page.tsx (Product/Offer
// JSON-LD) so the two can never drift out of sync with each other.
export const plans: PricingPlan[] = [
  {
    name: "Boutique",
    monthly: 35,
    annual: 348,
    annualPerMonth: 29,
    annualSavings: 72,
    agentLimit: "Up to 10 agents",
    desc: "For small owner-operated brokerages replacing their first spreadsheet.",
    popular: false,
  },
  {
    name: "Independent",
    monthly: 75,
    annual: 780,
    annualPerMonth: 65,
    annualSavings: 120,
    agentLimit: "Up to 30 agents",
    desc: "For growing independents who need clean books and a reliable cap ledger.",
    popular: true,
  },
  {
    name: "Brokerage",
    monthly: 199,
    annual: 2028,
    annualPerMonth: 169,
    annualSavings: 360,
    agentLimit: "Unlimited agents",
    desc: "For established brokerages with multiple plan structures and a bookkeeper.",
    popular: false,
  },
];
