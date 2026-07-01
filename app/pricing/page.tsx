import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing — Real Estate Commission Management Software",
  description:
    "SplitRE plans start at $62/mo (Boutique annual, up to 5 agents) through $233/mo (Brokerage, unlimited agents). All plans include every feature — cap tracking, QuickBooks-ready CSV export, PDF statements. Save ~30% annually.",
  alternates: { canonical: "https://splitre.app/pricing" },
  openGraph: {
    title: "SplitRE Pricing — Commission Management for Every Brokerage Size",
    description:
      "Boutique from $62/mo · Independent from $133/mo · Brokerage from $233/mo. No per-agent fees, no feature paywalls. 14-day free trial.",
    url: "https://splitre.app/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
