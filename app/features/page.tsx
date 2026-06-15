import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Features — Commission Calculation, Cap Tracking & QuickBooks Sync",
  description:
    "SplitRE handles every commission structure your brokerage uses: percentage splits, tiered splits, flat fees, E&O deductions, automatic cap tracking, and one-click QuickBooks Online sync. Built for independent real estate brokerages.",
  alternates: { canonical: "https://splitre.app/features" },
  openGraph: {
    title: "SplitRE Features — Built for How Brokerages Actually Work",
    description:
      "Commission calculation engine, real-time cap tracking, one-click QuickBooks sync, per-agent plan overrides, and PDF earnings statements.",
    url: "https://splitre.app/features",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does SplitRE support tiered commission splits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SplitRE supports percentage splits, tiered splits (where the agent split percentage changes at different GCI thresholds), flat post-cap fees, E&O deductions, transaction fees, and referral deductions. You define the rules once and every deal calculates from them automatically.",
      },
    },
    {
      "@type": "Question",
      name: "How does cap tracking work in SplitRE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SplitRE tracks each agent's cumulative gross commission income toward their annual cap. When an agent crosses their cap amount, their split automatically flips to 100% for the remainder of the cap year with no manual intervention required.",
      },
    },
    {
      "@type": "Question",
      name: "Which QuickBooks products does SplitRE support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SplitRE integrates with QuickBooks Online (Simple Start, Essentials, Plus, and Advanced). It does not support QuickBooks Desktop. Each confirmed deal syncs as an Invoice and a Bill, keeping your books clean and categorized.",
      },
    },
    {
      "@type": "Question",
      name: "Can I override commission plans for individual agents?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every agent can follow the brokerage-wide plan or have an individual override. If one agent negotiated a different split, you set the override at the agent level and it only applies to their deals.",
      },
    },
  ],
};

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">What SplitRE actually does</h1>
          <p className="text-xl text-gray-600">Every feature exists to cut the manual work that eats your week, from commission calculations to QuickBooks entries.</p>
        </div>
      </section>

      {/* Full-width dashboard screenshot */}
      <section className="bg-gray-50 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 ring-1 ring-black/5">
            <Image
              src="/screenshots/dashboard.png"
              alt="SplitRE dashboard — cap progress for 6 agents, $74,428 YTD broker revenue, recent deals"
              width={1440}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Commission calculation engine */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 text-sm font-medium mb-4">Commission Engine</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculation you can trust</h2>
            <p className="text-gray-600 mb-6">SplitRE handles every plan structure your brokerage uses: percentage splits, tiered splits, flat fees, E&amp;O deductions, and transaction fees. Set up the rules once and every deal calculates correctly from that point on.</p>
            <ul className="space-y-3">
              {[
                "Live deal preview before confirming",
                "Rule-based commission plans per agent",
                "Annual cap tracking with automatic flip to 100%",
                "E&O and transaction fee deductions",
                "Referral fee splits",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/screenshots/deal_entry.png"
              alt="SplitRE deal entry form showing live payout preview with broker cut, agent gross, and net payout"
              width={1440}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* QuickBooks sync */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/screenshots/deals.png"
              alt="SplitRE deals list showing synced and pending QuickBooks statuses across 20 transactions"
              width={1440}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-emerald-100 text-emerald-700 rounded-full px-3 py-1 text-sm font-medium mb-4">QuickBooks Online</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">One-click sync to QBO</h2>
            <p className="text-gray-600 mb-6">Every confirmed deal flows to QuickBooks Online automatically. Your bookkeeper gets clean, categorized entries with no spreadsheet-to-QBO re-keying at month end.</p>
            <ul className="space-y-3">
              {[
                "One-click sync from deal to QBO",
                "Dry-run preview before any sync",
                "Undo a sync if you catch an error",
                "Full sync log with timestamps",
                "CSV export included on all plans",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Agent management */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-violet-100 text-violet-700 rounded-full px-3 py-1 text-sm font-medium mb-4">Agent Management</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Every agent, always accurate</h2>
            <p className="text-gray-600 mb-6">Manage your entire roster from one dashboard. Cap progress at a glance, commission plan assignments, and mid-year plan migrations handled without recalculating anything by hand.</p>
            <ul className="space-y-3">
              {[
                "Per-agent cap progress dashboard",
                "Assign and change commission plans",
                "Mid-year plan migration with audit trail",
                "Historical commission statements per agent",
                "Annual cap reset automation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/screenshots/agents.png"
              alt="SplitRE agents page showing cap progress bars for 6 agents across two commission plans"
              width={1440}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Deal history */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mb-4">Deal History</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Every deal, permanently on record</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A searchable history of every confirmed deal with full audit trails, CSV export, and PDF agent summaries for year-end or disputes.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🗂️", title: "Confirmed deal log", desc: "Every closed deal stored permanently with full calculation details." },
              { icon: "📥", title: "CSV export", desc: "Export any date range to CSV for your accountant or custom reports." },
              { icon: "📄", title: "PDF agent summaries", desc: "Generate a clean commission statement for any agent, any period." },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-6">
                <div className="text-2xl mb-3">{icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-indigo-600 text-white text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to eliminate commission errors?</h2>
          <p className="text-indigo-100 mb-8">Start your 14-day free trial. No credit card, no commitment.</p>
          <Link href="https://app.splitre.app/signup" className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors inline-block">
            Start free trial
          </Link>
        </div>
      </section>
    </>
  );
}
