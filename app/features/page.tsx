import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Features — Commission Calculation, Cap Tracking & Bookkeeper-Ready CSV Export",
  description:
    "SplitRE handles every commission structure your brokerage uses: percentage splits, tiered splits, flat fees, E&O deductions, automatic cap tracking, agent notifications, and QuickBooks-ready CSV export. Built for independent real estate brokerages.",
  alternates: { canonical: "https://splitre.app/features" },
  openGraph: {
    title: "SplitRE Features — Built for How Brokerages Actually Work",
    description:
      "Commission calculation engine, real-time cap tracking, automatic agent notifications, QuickBooks-ready CSV export, per-agent plan overrides, and PDF earnings statements.",
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
      name: "How does the QuickBooks-ready CSV export work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Select any confirmed deals on the Deals page and click Export CSV for QuickBooks. The downloaded file includes the date, property address, agent name, sale price, commission %, GCI (gross commission income), agent net payout, broker net revenue, and pre-formatted memo lines for QuickBooks invoices and bills. Hand the file to your bookkeeper — no live connection needed, works with QuickBooks Online and Desktop.",
      },
    },
    {
      "@type": "Question",
      name: "Can I import existing deals from a spreadsheet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. SplitRE includes a CSV import for both agents and deals. Upload your spreadsheet, map the columns, and preview every row before importing. Cap opening balances carry forward automatically. Any rows that fail export as a separate CSV so you can fix and re-import them without hunting through a list.",
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">What SplitRE actually does</h1>
          <p className="text-xl text-gray-600">Every feature exists to cut the manual work that eats your week — from commission calculations and cap tracking to agent notifications and bookkeeper exports.</p>
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
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

      {/* QuickBooks-ready CSV export */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <Image
              src="/screenshots/deals.png"
              alt="SplitRE deals list with export button"
              width={1440}
              height={900}
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-emerald-100 text-emerald-700 rounded-full px-3 py-1 text-sm font-medium mb-4">Bookkeeper Export</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">QuickBooks-ready in one click</h2>
            <p className="text-gray-600 mb-6">Select any deals and click <strong>Export CSV for QuickBooks</strong>. Your bookkeeper gets a clean, pre-formatted file — no live connection to break, no OAuth tokens to expire, no re-keying.</p>
            <ul className="space-y-3">
              {[
                "GCI (commission income) — enter as an Invoice in QBO",
                "Agent net payout — enter as a Bill in QBO",
                "Broker net revenue — the margin, for your records",
                "Pre-formatted QuickBooks Invoice & Bill memo lines",
                "Property address, agent, date, sale price, commission %",
                "Works with QuickBooks Desktop too, not just QBO",
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

      {/* Agent notifications */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-amber-100 text-amber-700 rounded-full px-3 py-1 text-sm font-medium mb-4">Agent Notifications</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Agents find out automatically</h2>
            <p className="text-gray-600 mb-6">Every time a deal is confirmed or amended, SplitRE emails the agent their full commission breakdown. No phone calls, no texts asking &quot;what am I getting paid?&quot; — the answer is already waiting in their inbox.</p>
            <ul className="space-y-3">
              {[
                "Instant email on deal confirmation",
                "Email on amendments with updated breakdown",
                "Shareable deal link in every notification",
                "Professional branded layout — looks like your brokerage sent it",
                "No agent login required to view their breakdown",
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
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Agent receives</div>
            <div className="border border-gray-100 rounded-xl p-5 bg-gray-50 text-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 bg-indigo-600 rounded-md flex items-center justify-center text-white text-xs font-bold">S</div>
                <span className="font-semibold text-gray-900">SplitRE · Deal Confirmed</span>
              </div>
              <p className="text-gray-700 mb-3">A deal has been confirmed for <strong>Jennifer Rodriguez</strong>.</p>
              <div className="space-y-1.5 text-xs text-gray-600">
                <div className="flex justify-between"><span>Property</span><span className="font-medium text-gray-900">888 Rainey St #204, Austin TX</span></div>
                <div className="flex justify-between"><span>GCI</span><span className="font-medium text-gray-900">$14,750</span></div>
                <div className="flex justify-between"><span>Agent Net</span><span className="font-bold text-indigo-600">$10,325</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Import */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm text-sm">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Import preview</div>
            {[
              { name: "Jennifer Rodriguez", status: "ready", note: "Matched by email" },
              { name: "Marcus Williams", status: "ready", note: "Auto-created from CSV" },
              { name: "Sarah Johnson", status: "warn", note: "Same name, different email — will import" },
              { name: "David Chen", status: "skip", note: "Email already exists — skipped" },
            ].map(({ name, status, note }) => (
              <div key={name} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg mb-2 ${status === "ready" ? "bg-emerald-50 border border-emerald-100" : status === "warn" ? "bg-amber-50 border border-amber-100" : "bg-red-50 border border-red-100"}`}>
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${status === "ready" ? "bg-emerald-500" : status === "warn" ? "bg-amber-500" : "bg-red-400"}`} />
                <div>
                  <div className="font-medium text-gray-900">{name}</div>
                  <div className="text-xs text-gray-500">{note}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-sky-100 text-sky-700 rounded-full px-3 py-1 text-sm font-medium mb-4">CSV Import</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Import your history — hit the ground running</h2>
            <p className="text-gray-600 mb-6">Already have deals or agents in a spreadsheet? Upload a CSV and SplitRE maps, validates, and imports your existing data in minutes — so you&apos;re not starting from zero.</p>
            <ul className="space-y-3">
              {[
                "Import agents from any CSV — auto-maps common column names",
                "Import historical deals with cap balances carried forward",
                "Auto-creates agents from deal import if email is provided",
                "Row-by-row preview shows exactly what will import and why",
                "Failed rows export as a fixable CSV — no hunting through a list",
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
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
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
