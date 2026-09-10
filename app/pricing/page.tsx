import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import { plans } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing: Real Estate Commission Management Software",
  description:
    "Real estate commission software pricing, plainly stated: SplitRE plans start at $29/mo (Boutique annual, up to 10 agents) through $169/mo (Brokerage, unlimited agents). Every plan includes every feature: cap tracking, shared team caps, co-agent deal splits, QuickBooks-ready CSV export, one-click PDF downloads. Save up to 17% annually.",
  alternates: { canonical: "https://splitre.app/pricing" },
  openGraph: {
    title: "SplitRE Pricing: Commission Management for Every Brokerage Size",
    description:
      "Boutique from $29/mo, Independent from $65/mo, Brokerage from $169/mo. Flat tier pricing, no feature paywalls. 14-day free trial.",
    url: "https://splitre.app/pricing",
  },
};

// Per-tier Offer schema. The homepage's SoftwareApplication already carries a
// summary AggregateOffer, but this page is where Google's own guidance says
// prices get surfaced in snippets, and that needs each plan named individually.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "SplitRE",
  description:
    "Commission management software for independent real estate brokerages: cap tracking, tiered splits, shared team caps, co-agent deal splits, and QuickBooks-ready CSV export.",
  brand: {
    "@type": "Brand",
    name: "SplitRE",
  },
  offers: plans.map((plan) => ({
    "@type": "Offer",
    name: `${plan.name} plan`,
    description: `${plan.desc} ${plan.agentLimit}, billed annually.`,
    price: plan.annualPerMonth,
    priceCurrency: "USD",
    url: "https://splitre.app/pricing",
    availability: "https://schema.org/InStock",
  })),
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PricingClient />
    </>
  );
}
