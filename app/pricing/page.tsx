import type { Metadata } from "next";
import PricingClient from "./PricingClient";
import { plans, paygPacks } from "@/lib/pricing";

export const metadata: Metadata = {
  title: "Pricing: Real Estate Commission Management Software",
  description:
    "Real estate commission software pricing, plainly stated: SplitRE plans start at $29/mo (Boutique annual, up to 10 agents) through $169/mo (Brokerage, unlimited agents), or pay as you go from $95 for 5 deal credits, no monthly fee. Every option includes every feature: cap tracking, shared team caps, co-agent deal splits, QuickBooks-ready CSV export, one-click PDF downloads.",
  alternates: { canonical: "https://splitre.app/pricing" },
  openGraph: {
    title: "SplitRE Pricing: Commission Management for Every Brokerage Size",
    description:
      "Boutique from $29/mo, Independent from $65/mo, Brokerage from $169/mo, or pay as you go from $95 for 5 deal credits with no monthly fee. Flat tier or per-deal, no feature paywalls. 14-day free trial either way.",
    url: "https://splitre.app/pricing",
  },
};

// Per-tier Offer schema. The homepage's SoftwareApplication already carries a
// summary AggregateOffer, but this page is where Google's own guidance says
// prices get surfaced in snippets, and that needs each plan named individually.
// Pay-as-you-go packs are a one-time purchase, not a subscription, so they're
// listed as separate Offers rather than folded into the same recurring shape
// as the flat-tier plans above.
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
  offers: [
    ...plans.map((plan) => ({
      "@type": "Offer",
      name: `${plan.name} plan`,
      description: `${plan.desc} ${plan.agentLimit}, billed annually.`,
      price: plan.annualPerMonth,
      priceCurrency: "USD",
      url: "https://splitre.app/pricing",
      availability: "https://schema.org/InStock",
    })),
    ...paygPacks.map((pack) => ({
      "@type": "Offer",
      name: `Pay as you go: ${pack.credits} deal credits`,
      description: `One-time purchase of ${pack.credits} non-expiring deal credits, no monthly fee, for brokerages that don't close enough deals for a flat plan to make sense.`,
      price: pack.price,
      priceCurrency: "USD",
      url: "https://splitre.app/pricing",
      availability: "https://schema.org/InStock",
    })),
  ],
};

export default function PricingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PricingClient />
    </>
  );
}
