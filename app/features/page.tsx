import type { Metadata } from "next";
import Link from "next/link";
import ZoomableScreenshot from "@/components/ZoomableScreenshot";

export const metadata: Metadata = {
  title: "Features — Commission Calculation, Cap Tracking & Bookkeeper-Ready CSV Export",
  description:
    "SplitRE is commission calculation software for brokerages: percentage and tiered splits, flat fees, E&O deductions, real estate cap tracking, shared team caps, co-agent deal splits, agent notifications, and QuickBooks-ready CSV export. Built for independent real estate brokerages.",
  alternates: { canonical: "https://splitre.app/features" },
  openGraph: {
    title: "SplitRE Features — Built for How Brokerages Actually Work",
    description:
      "Commission calculation engine, real-time cap tracking, automatic agent notifications, QuickBooks-ready CSV export, per-agent plan overrides, and one-click PDF downloads.",
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
        text: "Select any confirmed deals on the Deals page and click Export CSV for QuickBooks. The downloaded file includes the date, property address, agent name, sale price, commission %, GCI (gross commission income), agent net payout, broker net revenue, and pre-formatted memo lines for QuickBooks invoices and bills. Hand the file to your bookkeeper. No live connection needed; works with QuickBooks Online and Desktop.",
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
    {
      "@type": "Question",
      name: "Can two agents split one deal in SplitRE?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A single deal can be credited to up to six agents, each with a GCI share percentage. Whole-deal deductions (outside referral, relocation, bonus) come off the top once, then each agent's share runs through their own commission plan and their own annual cap independently. It stays one deal with one Deal number, and the QuickBooks CSV export writes one row per agent.",
      },
    },
    {
      "@type": "Question",
      name: "Can a real estate team share one commission cap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. A team in SplitRE is one annual cap shared across several agents: commissions from any member draw down the same pool, and every member flips to a 100% split at the same moment the pool reaches the team cap. A team can also have an optional team lead who earns a set percentage of each member's commission on team deals. Teams are managed from the Teams tab, and every tier includes them.",
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
          <p className="text-xl text-gray-600">Every feature exists to cut the manual work that eats your week: commission calculations, cap tracking, agent notifications, and bookkeeper exports. It&apos;s commission management software built specifically for how brokerages calculate and pay agents — not a CRM or transaction-management suite with commissions bolted on.</p>
        </div>
      </section>

      {/* Full-width dashboard screenshot */}
      <section className="bg-gray-50 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 ring-1 ring-black/5">
            <ZoomableScreenshot
              src="/screenshots/splitre-real-estate-brokerage-dashboard.png"
              alt="SplitRE dashboard showing agent cap progress bars, draft deals, YTD broker revenue, and recent deals"
              width={1906}
              height={921}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The math is always right</h2>
            <p className="text-gray-600 mb-6">SplitRE is agent commission tracking and calculation software built for how brokerages actually structure plans: percentage splits, tiered splits, flat fees, E&amp;O deductions, and transaction fees. Set up the rules once and every deal calculates correctly from that point on.</p>
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
            <Link href="/real-estate-commission-split-calculator" className="inline-block mt-6 text-indigo-600 font-semibold hover:underline">
              Try the free commission split calculator →
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <ZoomableScreenshot
              src="/screenshots/splitre-commission-deal-entry-calculator.png"
              alt="SplitRE Close a Deal form showing a live payout preview with cap progress, broker cut, and agent net payout updating as the deal is entered"
              width={1919}
              height={856}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Co-agent deals */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <div className="inline-block bg-rose-100 text-rose-700 rounded-full px-3 py-1 text-sm font-medium mb-4">Co-Listing &amp; Splits</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">One deal, more than one agent</h2>
            <p className="text-gray-600 mb-6">A co-listing, a mentor and mentee, or an in-house deal where the listing side and the buyer side are both your agents. Add up to six agents to a single deal, each with a GCI share percentage. Whole-deal deductions come off the top once, then each agent&apos;s share runs through their own plan and their own cap.</p>
            <ul className="space-y-3">
              {[
                "Up to 6 agents on one deal, each with a GCI share %",
                "Referral, relocation, and bonus deductions applied once, off the top",
                "Each agent's share runs through their own split, fees, and annual cap",
                "One agent hitting their cap doesn't change what the others take home",
                "Still one deal, one Deal #, one row on the Deals list (\"Jordan + 1\")",
                "QuickBooks CSV exports one clean row per agent",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <Link href="/real-estate-commission-split-calculator" className="inline-block mt-6 text-indigo-600 font-semibold hover:underline">
              Try a co-listing split in the free calculator →
            </Link>
          </div>
          <div className="bg-gray-50 rounded-2xl p-5 md:p-7 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
              <span>Co-agent deal preview</span>
              <span className="text-gray-500 normal-case">GCI $21,600</span>
            </div>
            <div className="space-y-4 text-sm">
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Alex Rivera</span>
                  <span className="text-xs text-gray-500">50% share · on a team</span>
                </div>
                <div className="space-y-1 text-gray-500">
                  <div className="flex justify-between"><span>Agent gross (70/30)</span><span className="text-gray-900">$7,560</span></div>
                  <div className="flex justify-between"><span>Team lead split (25%)</span><span className="text-red-500">−$1,890</span></div>
                  <div className="flex justify-between"><span>E&amp;O fee</span><span className="text-red-500">−$150</span></div>
                  <div className="flex justify-between font-semibold text-gray-900 pt-1 border-t border-gray-100 mt-1"><span>Net payout</span><span className="text-indigo-600">$5,520</span></div>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Sam Okafor</span>
                  <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Capped</span>
                </div>
                <div className="space-y-1 text-gray-500">
                  <div className="flex justify-between"><span>Agent gross (100%, past cap)</span><span className="text-gray-900">$10,800</span></div>
                  <div className="flex justify-between"><span>Broker cut</span><span className="text-gray-900">$0</span></div>
                  <div className="flex justify-between"><span>E&amp;O fee</span><span className="text-red-500">−$150</span></div>
                  <div className="flex justify-between font-semibold text-gray-900 pt-1 border-t border-gray-100 mt-1"><span>Net payout</span><span className="text-indigo-600">$10,650</span></div>
                </div>
              </div>
              <div className="flex justify-between px-1 pt-1 text-gray-500">
                <span>Total agent net</span><span className="font-semibold text-gray-900">$16,170</span>
              </div>
              <div className="flex justify-between px-1 text-gray-500">
                <span>Total broker cut</span><span className="font-semibold text-gray-900">$3,240</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 mt-4">One deal, one Deal #. Each agent&apos;s share runs through their own plan and cap — Sam is already at 100% for the year, so no split is taken on his portion.</p>
          </div>
        </div>
      </section>

      {/* Commission plan templates */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <ZoomableScreenshot
              src="/screenshots/splitre-commission-plan-setup.png"
              alt="SplitRE Commission Plans list showing multiple named plans, each applied across a different number of agents"
              width={1911}
              height={932}
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-fuchsia-100 text-fuchsia-700 rounded-full px-3 py-1 text-sm font-medium mb-4">Commission Plan Templates</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">One plan, many agents</h2>
            <p className="text-gray-600 mb-6">Set up a commission plan once — a split, a cap, whatever deductions apply — and assign it to every agent who uses it. A senior agent plan, a franchise-fee plan, a plan for new hires: keep as many as your brokerage actually needs, each one editable in one place instead of re-entering the same rules per agent.</p>
            <ul className="space-y-3">
              {[
                "Named, reusable plan templates",
                "Any number of plans, each applied to as many agents as you want",
                "Per-agent overrides without touching the shared plan",
                "See agent count and rule count for every plan at a glance",
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

      {/* QuickBooks-ready CSV export */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <ZoomableScreenshot
              src="/screenshots/splitre-deals-list-csv-export.png"
              alt="SplitRE deals list with 19 confirmed deals selected and a one-click Export CSV for QuickBooks action"
              width={1912}
              height={920}
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-emerald-100 text-emerald-700 rounded-full px-3 py-1 text-sm font-medium mb-4">Bookkeeper Export</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">QuickBooks-ready in one click</h2>
            <p className="text-gray-600 mb-6">Select any deals and click <strong>Export CSV for QuickBooks</strong>. Your bookkeeper gets a pre-formatted file with everything in place — built specifically for QuickBooks real estate brokerage workflows, not a generic accounting export. No live connection to manage, no tokens to expire, and no call from them asking what any of the numbers mean.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Agents get their breakdown before they ask</h2>
            <p className="text-gray-600 mb-6">Confirm a deal and SplitRE emails the agent their full commission breakdown straight away: net payout, GCI, every deduction, their current cap position. If the deal gets amended later, they get an updated email. The &quot;what am I getting paid?&quot; call just stops happening.</p>
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
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">What the agent receives</div>
            <div className="rounded-xl overflow-hidden border border-gray-100">
              <ZoomableScreenshot
                src="/screenshots/splitre-agent-confirmation-email.png"
                alt="Real SplitRE commission-confirmed email showing the full breakdown and agent net payout"
                width={546}
                height={512}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Import */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <ZoomableScreenshot
              src="/screenshots/splitre-import-deals-csv.png"
              alt="SplitRE CSV import column-mapping step showing 113 rows detected and matched to deal fields"
              width={1913}
              height={858}
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-sky-100 text-sky-700 rounded-full px-3 py-1 text-sm font-medium mb-4">CSV Import</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Import your history and hit the ground running</h2>
            <p className="text-gray-600 mb-6">Already have deals or agents in a spreadsheet? Upload a CSV and SplitRE walks you through it: column mapping, row-by-row validation, a preview before anything is committed. Cap balances carry forward from wherever your agents are in the year. You&apos;re not starting from zero.</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your whole roster, one dashboard</h2>
            <p className="text-gray-600 mb-6">See cap progress for every agent at a glance. Change commission plans, handle mid-year hires, migrate an agent to a new plan after they hit a production milestone. Nothing requires a manual recalculation.</p>
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
            <ZoomableScreenshot
              src="/screenshots/splitre-agent-cap-tracking-dashboard.png"
              alt="SplitRE agents page showing cap progress bars for 6 agents across two commission plans"
              width={1440}
              height={900}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Teams / shared cap */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1 bg-gray-50 rounded-2xl p-5 md:p-7 border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Team shared cap</span>
              <span className="text-xs font-medium text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">Team</span>
            </div>
            <p className="font-bold text-gray-900 text-lg">The West Side Team</p>
            <p className="text-sm text-gray-500 mb-4">5 members · Lead: Jordan Blake (25%)</p>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-gray-500">Collected this year</span>
              <span className="font-semibold text-gray-900">$28,400 <span className="text-gray-400 font-normal">/ $70,000</span></span>
            </div>
            <div className="bg-gray-200 rounded-full h-2.5 w-full mb-5">
              <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "40%" }} />
            </div>
            <div className="space-y-2">
              {[
                { name: "Amanda Reyes", note: "3 deals · draws the pool" },
                { name: "Chris Nolan", note: "2 deals · draws the pool" },
                { name: "Dana Wu", note: "1 deal · draws the pool" },
              ].map((m) => (
                <div key={m.name} className="flex items-center justify-between bg-white rounded-lg border border-gray-100 px-3 py-2 text-sm">
                  <span className="text-gray-900">{m.name}</span>
                  <span className="text-gray-400 text-xs">{m.note}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4">Every member flips to a 100% split the moment the shared pool hits $70,000 — no matter who got it there.</p>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-teal-100 text-teal-700 rounded-full px-3 py-1 text-sm font-medium mb-4">Teams</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Run a team on one shared cap</h2>
            <p className="text-gray-600 mb-6">Some brokerages cap a group of agents together instead of individually. A team is one annual cap shared across its members: any member&apos;s commission draws the same pool, and everyone flips to a 100% split the moment the pool reaches the team cap. Add an optional team lead who earns a set percentage of each member&apos;s commission on team deals.</p>
            <ul className="space-y-3">
              {[
                "One shared annual cap for the whole team",
                "Every member flips to 100% the moment the pool is hit",
                "Optional team lead earns a set % of each member's team-deal commission",
                "Per-deal switch to turn the lead's split off for a member's own sphere deal",
                "Leave or disband a team without touching closed deals",
                "Shared-cap progress bar on the dashboard and every team deal",
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

      {/* Deal history */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mb-4">Deal History</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">A complete paper trail, automatically</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Search any deal in seconds. Export a date range for your accountant. Download a single deal&apos;s breakdown as a PDF for an agent who needs it for a mortgage application or a dispute. It&apos;s all there, exactly as it was calculated.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "🗂️", title: "Confirmed deal log", desc: "Every confirmed deal on record with the full breakdown as it was calculated." },
              { icon: "📥", title: "CSV export", desc: "Export any date range to CSV for your accountant or custom reports." },
              { icon: "📄", title: "One-click PDF download", desc: "Download or share any confirmed deal's commission breakdown in one click." },
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
          <h2 className="text-3xl font-bold mb-4">Try it on one month&apos;s deals</h2>
          <p className="text-indigo-100 mb-8">Start your 14-day free trial and run a deal you&apos;ve already processed. Compare the math. No credit card needed.</p>
          <Link href="https://app.splitre.app/signup" className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors inline-block">
            Start free trial
          </Link>
        </div>
      </section>
    </>
  );
}
