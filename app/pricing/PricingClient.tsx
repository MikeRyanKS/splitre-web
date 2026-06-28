"use client";

import Link from "next/link";
import { useState } from "react";

const CHECKOUT_URL = "https://pvxduycjxnvccputddbq.supabase.co/functions/v1/stripe-checkout-public";

async function startDirectCheckout(plan: string, interval: string) {
  const res = await fetch(CHECKOUT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ plan, interval }),
  });
  const data = await res.json() as { url?: string; error?: string };
  if (data.url) window.location.href = data.url;
  else throw new Error(data.error ?? "Checkout unavailable");
}

const plans = [
  {
    name: "Boutique",
    monthly: 89,
    annual: 749,
    annualPerMonth: 62,
    annualSavings: 319,
    agentLimit: "Up to 5 agents",
    desc: "For small owner-operated brokerages replacing their first spreadsheet.",
    popular: false,
  },
  {
    name: "Independent",
    monthly: 189,
    annual: 1599,
    annualPerMonth: 133,
    annualSavings: 669,
    agentLimit: "Up to 25 agents",
    desc: "For growing independents who need clean books and a reliable cap ledger.",
    popular: true,
  },
  {
    name: "Brokerage",
    monthly: 329,
    annual: 2799,
    annualPerMonth: 233,
    annualSavings: 1149,
    agentLimit: "Unlimited agents",
    desc: "For established brokerages with multiple plan structures and a bookkeeper.",
    popular: false,
  },
];

const allFeatures = [
  "Unlimited deals and transactions",
  "Commission calculation engine",
  "Tiered splits, flat fees, referral deductions",
  "Annual cap tracking and automatic cap flip",
  "Mid-year cap migration for new hires",
  "Per-agent plan overrides",
  "QuickBooks Online sync (Invoice and Bill)",
  "Sync preview before committing",
  "Sync log and undo capability",
  "PDF agent earnings statements",
  "CSV data export",
  "Shareable deal breakdown links",
  "Email alerts (cap reached, QBO failure)",
  "14-day free trial",
];

const faqs = [
  {
    q: "Do all plans include the same features?",
    a: "Yes. Every SplitRE plan includes every feature: QuickBooks sync, cap tracking, PDF statements, deal share links, and everything else. The only difference between plans is the number of active agents your brokerage can have. No features are locked behind higher tiers.",
  },
  {
    q: "What counts toward my agent limit?",
    a: "Only active agents count. If an agent leaves and you mark them inactive, they no longer count toward your limit. You can reactivate them at any time without losing their cap history.",
  },
  {
    q: "Can I change plans later?",
    a: "Yes. Upgrade or downgrade from your billing settings at any time. If you upgrade mid-billing cycle, you'll only pay the prorated difference. Downgrading takes effect at the next renewal.",
  },
  {
    q: "How does the annual plan work?",
    a: "Annual plans are billed once per year at the discounted rate, saving you roughly 30% compared to monthly. You can cancel before your renewal date and you won't be charged again.",
  },
  {
    q: "Which QuickBooks plan does SplitRE support?",
    a: "SplitRE works with QuickBooks Online (Simple Start, Essentials, Plus, and Advanced). It does not support QuickBooks Desktop. If you're not on QBO yet, you can still use SplitRE and export a CSV for your bookkeeper instead.",
  },
  {
    q: "What happens at the end of my free trial?",
    a: "If you don't add a payment method before your trial ends, your account is paused and your data is preserved for 30 days. Nothing gets deleted automatically. You can reactivate any time.",
  },
  {
    q: "Is my brokerage data secure?",
    a: "Yes. All data is encrypted in transit and at rest. Row-level security in our database ensures your brokerage data is completely isolated from other accounts. You can export all your data at any time.",
  },
];

export default function PricingClient() {
  const [interval, setInterval] = useState<"monthly" | "annual">("annual");
  const [buyLoading, setBuyLoading] = useState<string | null>(null);
  const [buyError, setBuyError] = useState<string | null>(null);

  async function handleBuyNow(planName: string) {
    setBuyLoading(planName);
    setBuyError(null);
    try {
      await startDirectCheckout(planName.toLowerCase(), interval);
    } catch {
      setBuyError("Something went wrong. Please try again.");
      setBuyLoading(null);
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-600 mb-2">No per-agent fees. No feature paywalls. No surprise charges.</p>
          <p className="text-indigo-600 font-semibold">14-day free trial on all plans, no credit card required.</p>
        </div>
      </section>

      {/* Billing toggle */}
      <section className="pb-6 px-4 text-center">
        <div className="inline-flex items-center bg-gray-100 rounded-lg p-1 gap-1">
          <button
            onClick={() => setInterval("monthly")}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors ${
              interval === "monthly" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setInterval("annual")}
            className={`px-5 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
              interval === "annual" ? "bg-white text-gray-900 shadow-sm" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Annual
            <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
              Save ~30%
            </span>
          </button>
        </div>
      </section>

      {/* Plan cards */}
      <section className="pb-20 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const price = interval === "monthly" ? plan.monthly : plan.annualPerMonth;
            return (
              <div
                key={plan.name}
                className={`rounded-2xl p-5 md:p-8 border-2 relative flex flex-col ${
                  plan.popular ? "border-indigo-600 shadow-xl shadow-indigo-100" : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}

                <h2 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h2>
                <p className="text-sm text-gray-500 mb-5">{plan.desc}</p>

                <div className="mb-1">
                  <span className="text-4xl font-extrabold text-gray-900">${price}</span>
                  <span className="text-gray-500 text-sm ml-1">/mo</span>
                </div>

                {interval === "annual" ? (
                  <p className="text-sm text-gray-400 mb-2">
                    ${plan.annual}/yr — save ${plan.annualSavings}/yr
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 mb-2">billed monthly</p>
                )}

                <p className="text-sm font-semibold text-indigo-600 mb-6">{plan.agentLimit}</p>

                <Link
                  href="https://app.splitre.app/signup"
                  className={`block w-full text-center font-semibold py-3 rounded-xl transition-colors ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "border-2 border-gray-300 text-gray-700 hover:border-indigo-400 hover:text-indigo-600"
                  }`}
                >
                  Start free trial
                </Link>

                <button
                  onClick={() => handleBuyNow(plan.name)}
                  disabled={buyLoading === plan.name}
                  className="block w-full text-center font-semibold py-3 rounded-xl mt-2 mb-3 transition-colors bg-gray-900 text-white hover:bg-gray-700 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {buyLoading === plan.name ? "Redirecting…" : "Subscribe now"}
                </button>

                {buyError && buyLoading === null && (
                  <p className="text-xs text-red-500 text-center -mt-2 mb-2">{buyError}</p>
                )}

                <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-5">
                  <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  7-day money-back guarantee — no questions asked
                </p>

                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  All features included
                </p>
                <ul className="space-y-2 flex-1">
                  {allFeatures.slice(0, 8).map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto mt-6">
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl px-6 py-4 text-sm text-indigo-700 text-center">
            <strong>Every plan includes every feature.</strong> The tier only controls your active agent limit.
          </div>
        </div>
      </section>

      {/* All features list */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Everything included in every plan</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {allFeatures.map((f) => (
              <div key={f} className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-gray-100">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-700">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI callout */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Does SplitRE pay for itself?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Every deal that goes through SplitRE saves your brokerage roughly 30 minutes of manual admin — commission calculation, cap tracking, QuickBooks entry, and agent emails all handled automatically.
            </p>
          </div>

          {/* Tiered savings table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-10">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Plan</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Team size</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Hours saved / month</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Value saved / year</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Plan cost / year</th>
                  <th className="text-left px-6 py-4 font-semibold text-indigo-600">ROI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { plan: "Boutique", size: "1–5 agents", hours: "~4 hrs", value: "~$3,600", cost: "$749", roi: "~5×", highlight: false },
                  { plan: "Independent", size: "6–25 agents", hours: "~10 hrs", value: "~$9,000", cost: "$1,599", roi: "~5.6×", highlight: false },
                  { plan: "Brokerage", size: "26+ agents", hours: "~25 hrs", value: "~$22,500+", cost: "$2,799", roi: "~8–13×", highlight: true },
                ].map(({ plan, size, hours, value, cost, roi, highlight }) => (
                  <tr key={plan} className={highlight ? "bg-indigo-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{plan}</td>
                    <td className="px-6 py-4 text-gray-600">{size}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{hours}</td>
                    <td className={`px-6 py-4 font-semibold ${highlight ? "text-indigo-700" : "text-gray-900"}`}>{value}</td>
                    <td className="px-6 py-4 text-gray-500">{cost}</td>
                    <td className={`px-6 py-4 font-bold text-lg ${highlight ? "text-indigo-600" : "text-gray-700"}`}>{roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-xs text-gray-400">
            Based on ~1 hr saved per deal (conservative estimate including calculation, QBO entry, cap tracking, and agent communications), broker time valued at $75/hr, annual billing pricing, and NAR median deal volume per agent. Errors prevented not included.
          </p>
        </div>
      </section>

      {/* Enterprise */}
      <section className="py-10 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-gray-900 text-lg">Enterprise / Custom</p>
            <p className="text-sm text-gray-500 mt-0.5">
              Franchise groups, multi-office brokerages, or white-label needs? Let&apos;s talk.
            </p>
          </div>
          <a
            href="mailto:support@splitre.app"
            className="shrink-0 bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Contact us
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <div key={q} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2">{q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-indigo-600 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-3">Ready to ditch the spreadsheet?</h2>
          <p className="text-indigo-200 mb-8">Start your free 14-day trial. No credit card required.</p>
          <Link
            href="https://app.splitre.app/signup"
            className="inline-block bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors"
          >
            Start free trial
          </Link>
        </div>
      </section>
    </>
  );
}
