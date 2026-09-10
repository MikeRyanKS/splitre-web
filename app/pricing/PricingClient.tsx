"use client";

import Link from "next/link";
import { useState } from "react";
import ContactModal from "@/components/ContactModal";
import { plans } from "@/lib/pricing";

const CHECKOUT_URL = "https://pvxduycjxnvccputddbq.supabase.co/functions/v1/stripe-checkout-public";

async function startDirectCheckout(plan: string, interval: string, couponCode: string) {
  const res = await fetch(CHECKOUT_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ plan, interval, coupon_code: couponCode || undefined }),
  });
  const data = await res.json() as { url?: string; error?: string };
  if (data.url) window.location.href = data.url;
  else throw new Error(data.error ?? "Checkout unavailable");
}

const allFeatures = [
  "Unlimited deals and transactions",
  "Commission calculation engine",
  "Commission plan templates: build a plan once, assign it to as many agents as you want",
  "Tiered splits, flat fees, referral deductions",
  "Annual cap tracking and automatic cap flip",
  "Co-agent deals: put up to 6 agents on one transaction, each running through their own plan and cap",
  "Shared team caps, with an optional team lead who earns a cut of every team deal",
  "QuickBooks-ready CSV export for your bookkeeper",
  "Per-agent plan overrides",
  "Mid-year cap migration for new hires",
  "One-click PDF download and shareable links for confirmed deals",
  "Automated agent notifications on deal confirmation and amendments",
  "Email alerts (cap reached, deal confirmed)",
  "Bulk deal and agent import from CSV",
  "14-day free trial",
];

const faqs = [
  {
    q: "Do all plans include the same features?",
    a: "Yes. Every SplitRE plan includes every feature: QuickBooks-ready CSV export, cap tracking, one-click PDF downloads and share links for confirmed deals, agent email notifications, and everything else. The only difference between plans is the number of active agents your brokerage can have. No features are locked behind higher tiers.",
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
    a: "Annual plans are billed once per year at the discounted rate, saving you up to 17% compared to monthly (the exact discount varies by tier). You can cancel before your renewal date and you won't be charged again.",
  },
  {
    q: "How does the QuickBooks-ready CSV export work?",
    a: "Every deal produces a row in the export with the closing date, property address, agent, GCI (commission income), agent net payout, broker net revenue, and pre-formatted memo lines for QuickBooks invoices and bills. Select any deals, click Export, and hand the file to your bookkeeper. No re-keying, no live connection to manage.",
  },
  {
    q: "What happens at the end of my free trial?",
    a: "If you don't add a payment method before your trial ends, your account is paused and your data is kept for 30 days. Add a payment method any time in that window to pick up right where you left off. After 30 days, the data is permanently deleted.",
  },
  {
    q: "Is my brokerage data secure?",
    a: "Yes. All data is encrypted in transit and at rest. Row-level security in our database ensures your brokerage data is completely isolated from other accounts. You can export all your data at any time.",
  },
];

export default function PricingClient() {
  const [interval, setInterval] = useState<"monthly" | "annual">("annual");
  const [couponCode, setCouponCode] = useState("");
  const [buyLoading, setBuyLoading] = useState<string | null>(null);
  const [buyError, setBuyError] = useState<string | null>(null);
  // Consent lives in a confirmation modal shown after "Subscribe now" is clicked, not
  // as a page-level checkbox gating the button. A checkbox this far down the page,
  // easy to scroll past, reads as "the button is broken" rather than "check this
  // first". "Start free trial" is unaffected: it routes to signup, which has its own
  // checkbox in the app.
  const [pendingPlan, setPendingPlan] = useState<string | null>(null);
  const [consentChecked, setConsentChecked] = useState(false);

  function openConsentModal(planName: string) {
    setBuyError(null);
    setConsentChecked(false);
    setPendingPlan(planName);
  }

  async function handleBuyNow(planName: string) {
    setBuyLoading(planName);
    setBuyError(null);
    try {
      await startDirectCheckout(planName.toLowerCase(), interval, couponCode);
    } catch (err) {
      setBuyError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setBuyLoading(null);
    }
  }

  return (
    <>
      {/* Header */}
      <section className="bg-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-600 mb-2">No feature paywalls. No surprise charges. One flat price for your agent-count tier, not a meter that climbs every time you add one more agent.</p>
          <p className="text-indigo-600 font-semibold">14-day free trial on all plans, no credit card required.</p>
          <Link href="/real-estate-commission-split-calculator" className="inline-block mt-4 text-sm text-gray-500 underline hover:text-gray-700">
            Not ready to sign up? Try the calculator free →
          </Link>
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
              Save up to 17%
            </span>
          </button>
        </div>
      </section>

      {/* Coupon code */}
      <section className="pb-6 px-4 text-center">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
          placeholder="Have a coupon code?"
          className="w-full max-w-[220px] rounded-lg border border-gray-200 px-3 py-2 text-sm text-center uppercase focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
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
                    ${plan.annual}/yr, saving ${plan.annualSavings}/yr
                  </p>
                ) : (
                  <p className="text-sm text-gray-400 mb-2">billed monthly</p>
                )}

                <p className="text-sm font-semibold text-indigo-600 mb-6">{plan.agentLimit}</p>

                <Link
                  href={`https://app.splitre.app/signup?plan=${plan.name.toLowerCase()}`}
                  className={`block w-full text-center font-semibold py-3 rounded-xl transition-colors ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "border-2 border-gray-300 text-gray-700 hover:border-indigo-400 hover:text-indigo-600"
                  }`}
                >
                  Start free trial
                </Link>

                <button
                  onClick={() => openConsentModal(plan.name)}
                  disabled={buyLoading === plan.name}
                  className="block w-full text-center font-semibold py-3 rounded-xl mt-2 mb-3 transition-colors bg-gray-900 text-white hover:bg-gray-700 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  Subscribe now
                </button>

                <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-5">
                  <svg className="w-3.5 h-3.5 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  7-day money-back guarantee, no questions asked
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

      {/* Error-prevention lead block */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-10 sm:px-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              At $29 a month, SplitRE costs less than one team lunch
            </h2>
            <div className="space-y-4 text-gray-600 max-w-2xl mx-auto">
              <p>
                When your team is small, the risk isn&apos;t wasted hours. It&apos;s a single mistake. Pay one top producer wrong, and you&apos;re not fixing a spreadsheet; you&apos;re trying to keep them from leaving. Replacing a producing agent costs a brokerage <strong className="text-gray-900">$20,000 to $50,000</strong> once you count recruiting, onboarding, and the deals that don&apos;t close while their seat is empty.
              </p>
              <p>For a small brokerage, that agent might be a third of your business.</p>
              <p>
                At <strong className="text-gray-900">$348 a year</strong>, SplitRE has to prevent <em>one</em> commission error <em>one time</em> to cover itself for the next <strong className="text-gray-900">57 years</strong>, and that&apos;s on the low end of what losing an agent costs. It&apos;s small enough to sit on your card and never think about, and precise enough that you never pay an agent wrong again. That&apos;s the whole trade.
              </p>
              <p className="text-center text-indigo-600 font-semibold pt-2">
                Start your free 14-day trial. No credit card required, no meetings, no migration project, no sales call.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI / time-savings table */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What you save in admin time</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Even before it prevents a single error, SplitRE gives you back the hours you currently spend on commission admin every month.
            </p>
          </div>

          {/* Tiered savings table */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 mb-6">
            <table className="w-full min-w-[720px] text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Plan</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Team size</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Hours saved / month</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Admin rate</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Time value / year</th>
                  <th className="text-left px-6 py-4 font-semibold text-gray-700">Plan cost / year</th>
                  <th className="text-left px-6 py-4 font-semibold text-indigo-600">Return</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { plan: "Boutique", size: "1 to 10 agents", hours: "~2.5 hrs", rate: "$30/hr", value: "~$900", cost: "$348", roi: "~2.6x", highlight: false },
                  { plan: "Independent", size: "11 to 30 agents", hours: "~10 hrs", rate: "$40/hr", value: "~$4,800", cost: "$780", roi: "~6.2x", highlight: false },
                  { plan: "Brokerage", size: "31+ agents", hours: "~25 hrs", rate: "$50/hr", value: "~$15,000", cost: "$2,028", roi: "~7.4x", highlight: true },
                ].map(({ plan, size, hours, rate, value, cost, roi, highlight }) => (
                  <tr key={plan} className={highlight ? "bg-indigo-50" : "bg-white"}>
                    <td className="px-6 py-4 font-semibold text-gray-900">{plan}</td>
                    <td className="px-6 py-4 text-gray-600">{size}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">{hours}</td>
                    <td className="px-6 py-4 text-gray-600">{rate}</td>
                    <td className={`px-6 py-4 font-semibold ${highlight ? "text-indigo-700" : "text-gray-900"}`}>{value}</td>
                    <td className="px-6 py-4 text-gray-500">{cost}</td>
                    <td className={`px-6 py-4 font-bold text-lg ${highlight ? "text-indigo-600" : "text-gray-700"}`}>{roi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="max-w-2xl mx-auto space-y-2 mb-6">
            <p className="text-center text-xs text-gray-400 italic">
              All returns above use the annual plan price. Monthly billing costs slightly more per year and lowers these ratios proportionally, so the annual figures are the honest baseline to quote.
            </p>
          </div>
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
          <ContactModal type="sales" trigger={
            <span className="shrink-0 bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer">
              Contact us
            </span>
          } />
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

      {/* Terms/Privacy consent: the final step before "Subscribe now" actually checks
          out, shown only after a plan is picked (not a page-level checkbox easy to
          scroll past and mistake for a broken button). */}
      {pendingPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-1">Confirm your plan</h2>
            <p className="text-sm text-gray-500 mb-5">
              {pendingPlan} · {interval === "annual" ? "Annual" : "Monthly"} billing
            </p>

            <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer select-none mb-5 text-left">
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={(e) => setConsentChecked(e.target.checked)}
                autoFocus
                className="h-4 w-4 mt-0.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 shrink-0"
              />
              <span>
                I agree to the <a href="/terms" className="text-indigo-600 hover:underline">Terms of Service</a>
                {" "}and <a href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</a>,
                {" "}and understand this subscription renews automatically until I cancel.
              </span>
            </label>

            {buyError && (
              <div className="mb-4 rounded-lg bg-red-50 border border-red-100 px-3 py-2 text-xs text-red-700">
                {buyError}
              </div>
            )}

            <button
              onClick={() => handleBuyNow(pendingPlan)}
              disabled={!consentChecked || buyLoading === pendingPlan}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {buyLoading === pendingPlan ? "Redirecting…" : "Continue to checkout"}
            </button>

            <button
              onClick={() => setPendingPlan(null)}
              disabled={buyLoading === pendingPlan}
              className="w-full mt-2 py-2 text-sm text-gray-400 hover:text-gray-600 disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}
