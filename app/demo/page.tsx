import type { Metadata } from "next";
import DemoClient from "./DemoClient";

export const metadata: Metadata = {
  title: "Free Real Estate Commission Split Calculator — Try SplitRE",
  description:
    "Calculate a real estate commission split free, right now — no signup, no credit card. Enter a sale price and split to see the exact agent payout, broker cut, and cap tracking, then download or email yourself the PDF.",
  alternates: { canonical: "https://splitre.app/demo" },
  openGraph: {
    title: "Free Real Estate Commission Split Calculator — Try SplitRE",
    description:
      "See the exact agent split, cap tracking, and fees for a real deal — no signup required. Download or email yourself the PDF.",
    url: "https://splitre.app/demo",
  },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SplitRE Commission Split Calculator (Free Demo)",
  applicationCategory: "BusinessApplication",
  description:
    "A free, no-signup real estate commission split calculator. Enter a sale price, commission rate, and agent split to see the exact broker/agent payout, annual cap tracking, and standard fees.",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  operatingSystem: "Web",
  url: "https://splitre.app/demo",
};

export default function DemoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <DemoClient />
    </>
  );
}
