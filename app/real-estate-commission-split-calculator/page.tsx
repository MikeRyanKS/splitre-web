import type { Metadata } from "next";
import DemoClient from "./DemoClient";

const CANONICAL_URL = "https://splitre.app/real-estate-commission-split-calculator";

export const metadata: Metadata = {
  title: "Real Estate Commission Split Calculator (Free) — SplitRE",
  description:
    "Free real estate commission split calculator — instantly calculate agent and broker commission splits, annual cap tracking, franchise royalty fees, and referral deductions. See exact payouts for 70/30, 80/20, and capped commission plans. No signup, no credit card.",
  alternates: { canonical: CANONICAL_URL },
  openGraph: {
    title: "Real Estate Commission Split Calculator (Free) — SplitRE",
    description:
      "Calculate agent/broker commission splits, annual cap tracking, franchise and referral fees — instantly, for free. No signup required. Download or email yourself the PDF.",
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
    "Free real estate commission split calculator with annual agent cap tracking. Calculate agent and broker commission splits (70/30, 80/20, and more), franchise royalty fees, referral fees, and E&O/transaction fee deductions instantly — no signup required.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a real estate commission split?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A commission split is how a real estate brokerage divides the commission from a sale between itself and the agent who closed it. The brokerage collects the full commission from the transaction, then pays the agent their agreed share — commonly expressed as a ratio like 70/30 or 80/20, with the agent's number listed first.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate a real estate agent's commission?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Multiply the sale price by the commission percentage to get the gross commission (GCI). Subtract any off-the-top fees — franchise royalty, referral, or relocation fees — to get the splittable amount. Apply the agent/broker split percentage to that amount, then subtract the agent's own fees (E&O, transaction fee) to arrive at their net payout. This calculator does all four steps automatically and shows each line item.",
      },
    },
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
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How real estate commission splits are calculated</h2>
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

      {/* Worked examples — concrete numbers for the split ratios people actually search for */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Common commission split examples</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-3">70/30 split, no franchise</p>
            <dl className="space-y-1.5 text-sm">
              <div className="flex justify-between"><dt className="text-gray-500">Sale price</dt><dd className="text-gray-900 font-medium">$400,000</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500">Commission (3%)</dt><dd className="text-gray-900 font-medium">$12,000</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500">Broker cut (30%)</dt><dd className="text-gray-900 font-medium">$3,600</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500">Agent gross (70%)</dt><dd className="text-gray-900 font-medium">$8,400</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500">E&amp;O + transaction fee</dt><dd className="text-red-600 font-medium">−$545</dd></div>
              <div className="flex justify-between pt-1.5 mt-1.5 border-t border-gray-100"><dt className="font-semibold text-gray-900">Agent net payout</dt><dd className="font-bold text-indigo-600">$7,855</dd></div>
            </dl>
          </div>
          <div className="border border-gray-200 rounded-xl p-5">
            <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-3">80/20 split, 6% franchise fee</p>
            <dl className="space-y-1.5 text-sm">
              <div className="flex justify-between"><dt className="text-gray-500">Sale price</dt><dd className="text-gray-900 font-medium">$500,000</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500">Commission (3%)</dt><dd className="text-gray-900 font-medium">$15,000</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500">Franchise royalty (6%)</dt><dd className="text-red-600 font-medium">−$900</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500">Broker cut (20%)</dt><dd className="text-gray-900 font-medium">$2,820</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500">Agent gross (80%)</dt><dd className="text-gray-900 font-medium">$11,280</dd></div>
              <div className="flex justify-between"><dt className="text-gray-500">E&amp;O + transaction fee</dt><dd className="text-red-600 font-medium">−$545</dd></div>
              <div className="flex justify-between pt-1.5 mt-1.5 border-t border-gray-100"><dt className="font-semibold text-gray-900">Agent net payout</dt><dd className="font-bold text-indigo-600">$10,735</dd></div>
            </dl>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-4">
          Both examples assume a $150 E&amp;O fee and a $395 transaction fee, and neither agent has hit their annual cap yet — plug your own numbers into the calculator above to see how a cap changes the math.
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
