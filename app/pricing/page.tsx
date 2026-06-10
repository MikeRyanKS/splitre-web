import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "SplitRE pricing: Starter at $49/mo, Growth at $99/mo, Pro at $179/mo. All plans include a 14-day free trial and QuickBooks Online sync.",
};

const plans = [
  {
    name: "Starter",
    price: 49,
    desc: "Perfect for small brokerages getting off spreadsheets.",
    agents: "Up to 10 agents",
    features: [
      "Unlimited deals",
      "Commission calculation engine",
      "Cap tracking",
      "QuickBooks Online sync",
      "Deal history & CSV export",
      "Email support",
    ],
    popular: false,
    cta: "Start free trial",
  },
  {
    name: "Growth",
    price: 99,
    desc: "Most popular for growing brokerages with bookkeeper needs.",
    agents: "Up to 30 agents",
    features: [
      "Everything in Starter",
      "Bookkeeper CSV export",
      "PDF agent summaries",
      "Priority support",
      "Advanced sync log",
    ],
    popular: true,
    cta: "Start free trial",
  },
  {
    name: "Pro",
    price: 179,
    desc: "For established brokerages that need hands-on onboarding.",
    agents: "Up to 75 agents",
    features: [
      "Everything in Growth",
      "Agent portal (coming soon)",
      "Dedicated onboarding call",
      "Phone support",
      "Custom commission plan setup",
    ],
    popular: false,
    cta: "Start free trial",
  },
];

const faqs = [
  {
    q: "Can I cancel at any time?",
    a: "Yes. Cancel from your account settings any time — no penalties, no questions asked. You'll retain access until the end of your billing period.",
  },
  {
    q: "Is pricing per agent or flat?",
    a: "Flat monthly pricing based on your agent count tier. You don't pay more as individual agents close more deals.",
  },
  {
    q: "Which version of QuickBooks does SplitRE support?",
    a: "SplitRE supports QuickBooks Online (QBO) — Simple Start, Essentials, Plus, and Advanced. It does not support QuickBooks Desktop.",
  },
  {
    q: "How is my data protected?",
    a: "All data is encrypted in transit and at rest. We never share your brokerage data with third parties. You own your data and can export it any time.",
  },
  {
    q: "What happens at the end of the free trial?",
    a: "If you don't add a payment method before the trial ends, your account is paused and your data is preserved for 30 days. Nothing is deleted automatically.",
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="bg-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-600 mb-2">No per-agent fees. No surprise charges. Cancel any time.</p>
          <p className="text-indigo-600 font-semibold">14-day free trial on all plans — no credit card required.</p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border-2 relative ${plan.popular ? "border-indigo-600 shadow-xl shadow-indigo-100" : "border-gray-200"}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">Most Popular</span>
                </div>
              )}
              <h2 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h2>
              <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
              <div className="mb-2">
                <span className="text-4xl font-extrabold text-gray-900">${plan.price}</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <p className="text-sm font-medium text-indigo-600 mb-6">{plan.agents}</p>
              <Link
                href="https://app.splitre.com/signup"
                className={`block w-full text-center font-semibold py-3 rounded-xl mb-8 transition-colors ${plan.popular ? "bg-indigo-600 text-white hover:bg-indigo-700" : "border-2 border-gray-300 text-gray-700 hover:border-indigo-400 hover:text-indigo-600"}`}
              >
                {plan.cta}
              </Link>
              <ul className="space-y-2.5">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
