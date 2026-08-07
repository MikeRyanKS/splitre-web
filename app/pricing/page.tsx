import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing — Real Estate Commission Management Software",
  description:
    "SplitRE plans start at $29/mo (Boutique annual, up to 10 agents) through $169/mo (Brokerage, 31+ agents). All plans include every feature — cap tracking, QuickBooks-ready CSV export, one-click PDF downloads. Save up to 17% annually.",
  alternates: { canonical: "https://splitre.app/pricing" },
  openGraph: {
    title: "SplitRE Pricing — Commission Management for Every Brokerage Size",
    description:
      "Boutique from $29/mo · Independent from $65/mo · Brokerage from $169/mo. No per-agent fees, no feature paywalls. 14-day free trial.",
    url: "https://splitre.app/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
