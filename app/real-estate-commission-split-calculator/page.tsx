import type { Metadata } from "next";
import DemoClient from "./DemoClient";

const CANONICAL_URL = "https://splitre.app/real-estate-commission-split-calculator";

export const metadata: Metadata = {
  title: "Free Real Estate Commission Split Calculator — Try SplitRE",
  description:
    "Calculate a real estate commission split free, right now — no signup, no credit card. Enter a sale price and split to see the exact agent payout, broker cut, and cap tracking, then download or email yourself the PDF.",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: "Free Real Estate Commission Split Calculator — Try SplitRE",
    description:
      "See the exact agent split, cap tracking, and fees for a real deal — no signup required. Download or email yourself the PDF.",
    url: CANONICAL_URL,
  },
};

const webAppSchema = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "SplitRE Commission Split Calculator",
  url: CANONICAL_URL,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Any (runs in browser)",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Free real estate commission split calculator with agent cap tracking. Calculate agent payouts, broker cuts, franchise fees, and E&O/transaction fee deductions instantly — no signup required.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a typical real estate commission split?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most independent brokerages use a percentage split like 70/30 or 80/20, where the agent keeps the larger share and the brokerage keeps the rest, up to any annual cap the agent has negotiated. Some brokerages use tiered splits that increase as an agent's production grows, or flat per-transaction fees instead of a percentage.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when an agent hits their cap mid-deal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When a deal would push the brokerage's cut past an agent's remaining cap room for the year, only the amount up to the cap goes to the brokerage — the rest of that deal goes to the agent at 100%. Getting this crossing calculation right is one of the most common places manual spreadsheets get commission math wrong.",
      },
    },
    {
      "@type": "Question",
      name: "Do referral fees come off before or after the commission split?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Referral fees are typically calculated on the gross commission and subtracted before the agent/broker split is applied, not deducted from the agent's share afterward. Getting this order wrong is a common source of underpayment disputes.",
      },
    },
    {
      "@type": "Question",
      name: "Is this the same calculation the real SplitRE app uses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. This calculator runs the same three-stage commission engine — deductions off the top, the agent/broker split with cap tracking, then agent-side fees like E&O — that SplitRE runs automatically on every confirmed deal.",
      },
    },
    {
      "@type": "Question",
      name: "Does this calculator save my data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Everything runs in your browser and nothing is stored unless you choose to email yourself a copy or download the PDF, which asks for your name and email only to deliver that file.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between a franchise royalty fee and a broker cut?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A franchise royalty fee (common at brands like Keller Williams or RE/MAX) is a percentage that goes to the parent franchisor, off the top, before the local brokerage and agent split what's left. A broker cut is the local brokerage's own share of that remaining amount, per its commission plan with the agent. Independent brokerages typically only have the broker cut, with no franchise fee layer.",
      },
    },
  ],
};

const faqs = faqSchema.mainEntity.map((q) => ({ q: q.name, a: q.acceptedAnswer.text }));

export default function CalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DemoClient />

      {/* B3 — How this is calculated */}
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How this is calculated</h2>
        <p className="text-gray-600 leading-relaxed">
          Every commission runs through three stages. First, any off-the-top deductions
          come out of the gross commission — franchise royalty fees, referral fees, or
          flat fees — leaving what we call the splittable amount. Second, the
          agent/broker split is applied to that splittable amount, based on the agreed
          percentage, unless the agent has hit their annual cap, in which case the
          split changes automatically (see below). Third, agent-side deductions come
          out of the agent&apos;s remaining share — E&amp;O insurance, transaction or
          compliance fees, desk fees, or other one-off adjustments — to arrive at the
          agent&apos;s final net payout.
        </p>
      </section>

      {/* B4 — Cap-crossing explainer */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What happens when an agent hits their cap</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Most brokerages cap how much of their cut they collect from any one agent in
          a calendar year. Once an agent crosses that cap, the brokerage&apos;s share on
          every future deal that year usually drops to $0 (or a small flat post-cap
          fee), and the agent keeps the rest.
        </p>
        <p className="text-gray-600 leading-relaxed">
          The hard part is the deal that crosses the cap mid-transaction. Say an agent
          is on a 70/30 split with an $18,000 annual cap, and has already generated
          $17,000 of that cap so far this year. A new deal would normally send $2,000
          to the brokerage — but only $1,000 of cap room is left. The correct
          calculation splits that one deal: the brokerage collects the remaining
          $1,000, and the agent gets the rest of their share at 100%, not 70%. Miss
          this, and either the brokerage overcollects past the agent&apos;s contractual
          cap, or the agent gets shorted — both are the kind of error that erodes
          trust between a broker and their top producers. This calculator (and the
          full SplitRE app) handles that crossing calculation automatically, every
          time.
        </p>
      </section>

      {/* B5 — FAQ (text matches the FAQPage schema above exactly) */}
      <section className="max-w-3xl mx-auto px-4 pb-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
        <div className="space-y-6">
          {faqs.map(({ q, a }) => (
            <div key={q}>
              <h3 className="font-semibold text-gray-900 mb-1.5">{q}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{a}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
