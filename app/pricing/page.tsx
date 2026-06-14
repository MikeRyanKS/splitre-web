import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing — Real Estate Commission Management Software",
  description:
    "SplitRE plans start at $89/mo (Boutique, up to 5 agents) through $329/mo (Brokerage, unlimited agents). All plans include every feature — cap tracking, QuickBooks sync, PDF statements. Save ~30% annually.",
  alternates: { canonical: "https://splitre.app/pricing" },
  openGraph: {
    title: "SplitRE Pricing — Commission Management for Every Brokerage Size",
    description:
      "Boutique $89/mo · Independent $189/mo · Brokerage $329/mo. No per-agent fees, no feature paywalls. 14-day free trial.",
    url: "https://splitre.app/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
