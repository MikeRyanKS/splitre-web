import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "SplitRE — Commission Management Software for Real Estate Brokerages",
  description:
    "SplitRE replaces commission spreadsheets for independent real estate brokerages. Automated split calculations, agent cap tracking, and one-click QuickBooks Online sync. Starts at $89/mo.",
  alternates: { canonical: "https://splitre.app" },
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SplitRE",
  applicationCategory: "BusinessApplication",
  description:
    "Commission management software for independent real estate brokerages. Automates split calculations, cap tracking, and QuickBooks Online sync.",
  featureList: [
    "Automated commission split calculations",
    "Annual agent cap tracking with automatic cap flip",
    "One-click QuickBooks Online sync",
    "PDF agent earnings statements",
    "Tiered commission split support",
    "Per-agent commission plan overrides",
    "Shareable deal breakdown links",
    "CSV data export",
  ],
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "89",
    highPrice: "329",
    priceCurrency: "USD",
    offerCount: "3",
  },
  operatingSystem: "Web",
  url: "https://splitre.app",
  creator: {
    "@type": "Organization",
    name: "Keplify LLC",
  },
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to process a real estate commission deal with SplitRE",
  description:
    "SplitRE turns a 45-minute manual commission process into under two minutes.",
  step: [
    {
      "@type": "HowToStep",
      name: "Enter the deal",
      text: "Add the address, sale price, commission rate, and agent. SplitRE pulls the correct commission plan and calculates the full breakdown in real time.",
    },
    {
      "@type": "HowToStep",
      name: "Review and confirm",
      text: "See the exact agent split, every deduction, and the updated cap balance before committing. Edit and recalculate instantly if anything changes.",
    },
    {
      "@type": "HowToStep",
      name: "Sync to QuickBooks",
      text: "One click posts the Invoice and Bill to QuickBooks Online. Your bookkeeper sees clean, categorized entries with no manual re-keying.",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <section className="bg-white pt-20 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-indigo-500 rounded-full" />
            Built for independent US real estate brokerages
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Stop Doing Commissions<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">in Spreadsheets</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            SplitRE calculates every agent split automatically, tracks annual caps in real time, and syncs confirmed deals to QuickBooks Online in one click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.splitre.app/signup"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-indigo-200"
            >
              Start free, no credit card
            </Link>
            <Link
              href="/features"
              className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
            >
              See how it works
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-400">14-day free trial · All features included · Cancel any time</p>
        </div>
      </section>

      {/* ROI bar */}
      <section className="bg-indigo-600 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white mb-6">
            {[
              { stat: "~120 hrs/yr", label: "saved on commission admin for a 10-agent brokerage" },
              { stat: "5× to 13× ROI", label: "average return on your annual subscription cost" },
              { stat: "$9,000/yr", label: "in reclaimed broker time for a 10-agent brokerage" },
            ].map(({ stat, label }) => (
              <div key={stat}>
                <div className="text-3xl font-extrabold mb-1">{stat}</div>
                <div className="text-indigo-200 text-sm">{label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-indigo-100 text-sm">
            Brokerages with 50+ agents save up to{" "}
            <span className="font-bold text-white">$36,000/yr</span>{" "}
            in reclaimed admin time — SplitRE is the commission management software that pays for itself many times over, at every team size.
          </p>
        </div>
      </section>

      {/* Automation breakdown table */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-5 text-center">What SplitRE actually automates per deal</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="w-full min-w-[580px] text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">Task</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">Manual time</th>
                  <th className="text-left px-5 py-3 font-semibold text-gray-600">With SplitRE</th>
                  <th className="text-left px-5 py-3 font-semibold text-indigo-600">Saved</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { task: "Look up agent's plan, check cap position", manual: "3–5 min", with: "0 (auto-loaded)", saved: "~4 min" },
                  { task: "Calculate split — custom plans, tiered/capped, E&O, bonuses, extra deductions", manual: "15–40 min", with: "30 sec (confirm button)", saved: "~25 min" },
                  { task: "Update cap tracking spreadsheet", manual: "3–5 min", with: "0 (auto-ledger)", saved: "~4 min" },
                  { task: "Agent communications — share breakdown, answer questions, send corrections", manual: "10–20 min", with: "0 (auto-emailed with breakdown)", saved: "~10 min" },
                  { task: "Enter invoice + bill in QuickBooks", manual: "10–15 min", with: "1 click, ~30 sec", saved: "~12 min" },
                  { task: "Prepare + email agent commission statement", manual: "5–8 min", with: "0 (auto-generated)", saved: "~6 min" },
                ].map(({ task, manual, with: w, saved }) => (
                  <tr key={task} className="bg-white hover:bg-gray-50">
                    <td className="px-5 py-3 text-gray-700">{task}</td>
                    <td className="px-5 py-3 text-gray-500">{manual}</td>
                    <td className="px-5 py-3 text-gray-500">{w}</td>
                    <td className="px-5 py-3 font-semibold text-indigo-600">{saved}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 border-t-2 border-gray-200">
                  <td className="px-5 py-3 font-bold text-gray-900">Total per deal</td>
                  <td className="px-5 py-3 font-semibold text-gray-700">~46–93 min</td>
                  <td className="px-5 py-3 font-semibold text-gray-700">~3–5 min</td>
                  <td className="px-5 py-3 font-bold text-indigo-600">~43–88 min</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">Call it conservatively <strong className="text-gray-500">~1 hour saved per deal.</strong></p>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The spreadsheet problem every independent broker knows
            </h2>
            <p className="text-gray-600 mb-4">
              You copy last month&apos;s spreadsheet, update the numbers by hand, hope the cap balance is right, then manually key the same transaction into QuickBooks. One typo in a formula and an agent gets underpaid. Or worse, overpaid, and now you have a conversation you don&apos;t want to have.
            </p>
            <p className="text-gray-600 mb-6">
              For a 5-agent brokerage closing 50 deals a year, that works out to roughly 37 to 50 hours of manual admin and 2 to 3 commission errors that cost an average of $1,100 each to sort out.
            </p>
            <Link
              href="https://app.splitre.app/signup"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Fix it with SplitRE
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          {/* Mock deal breakdown card */}
          <div className="bg-gray-50 rounded-2xl p-5 md:p-8 border border-gray-200 shadow-sm">
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-5">Live Deal Preview</div>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Sale price</span>
                <span className="font-semibold text-gray-900">$415,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Gross commission (2.75%)</span>
                <span className="font-semibold text-gray-900">$11,413</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">E&amp;O deduction</span>
                <span className="font-semibold text-red-500">−$150</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Transaction fee</span>
                <span className="font-semibold text-red-500">−$295</span>
              </div>
              <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Agent split (70%)</span>
                  <span className="font-bold text-indigo-600">$7,677</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-gray-500">Broker keep (30%)</span>
                  <span className="font-semibold text-gray-900">$3,290</span>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2.5 mt-2">
                <div className="text-xs font-semibold text-amber-700">Cap progress: $26,400 / $30,000</div>
                <div className="mt-1.5 bg-amber-200 rounded-full h-1.5 w-full">
                  <div className="bg-amber-500 h-1.5 rounded-full" style={{ width: "88%" }} />
                </div>
              </div>
            </div>
            <button className="mt-5 w-full bg-indigo-600 text-white text-sm font-semibold py-2.5 rounded-lg">
              Confirm &amp; sync to QuickBooks →
            </button>
          </div>
        </div>
      </section>

      {/* Product screenshot */}
      <section className="bg-white pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 ring-1 ring-black/5">
            <Image
              src="/screenshots/dashboard.png"
              alt="SplitRE dashboard showing agent cap progress, broker revenue, and recent deals"
              width={1440}
              height={900}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything in one place
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From deal entry to QuickBooks, the whole process lives in SplitRE. Nothing to re-key, nothing to reconcile at month end.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                color: "bg-indigo-100",
                iconColor: "text-indigo-600",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                ),
                title: "Accurate commission calculations",
                desc: "Define your commission plans once. Percentage splits, tiered splits, flat post-cap fees, E&O, transaction fees, referral deductions. Every deal calculates from those rules automatically.",
              },
              {
                color: "bg-violet-100",
                iconColor: "text-violet-600",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                ),
                title: "Automatic cap tracking",
                desc: "Cap balances update with every confirmed deal. When an agent crosses their annual cap, the split flips to 100% on its own. No manual intervention, no catching it mid-deal.",
              },
              {
                color: "bg-emerald-100",
                iconColor: "text-emerald-600",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                ),
                title: "One-click QuickBooks sync",
                desc: "Preview the QBO Invoice and Bill before committing. One click posts both to QuickBooks Online. Your bookkeeper sees clean, categorized entries with nothing left to re-key.",
              },
              {
                color: "bg-amber-100",
                iconColor: "text-amber-600",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                ),
                title: "PDF agent earnings statements",
                desc: "Generate a professional annual earnings PDF for any agent in seconds. Handy for mortgage applications, tax prep, or just keeping agents in the loop on their YTD income.",
              },
              {
                color: "bg-sky-100",
                iconColor: "text-sky-600",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                ),
                title: "Per-agent plan overrides",
                desc: "One agent negotiated a better split? Override the plan at the agent level without touching anyone else. The change applies only to that agent's deals going forward.",
              },
              {
                color: "bg-rose-100",
                iconColor: "text-rose-600",
                icon: (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                ),
                title: "Shareable deal breakdowns",
                desc: "Share a read-only deal link with an agent or their attorney. No login required. Everything they need to verify the split, deductions, and QuickBooks sync status.",
              },
            ].map(({ color, iconColor, icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 md:p-8 border border-gray-100">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-4`}>
                  <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From deal to books in three steps</h2>
            <p className="text-lg text-gray-600">What used to take 45 minutes now takes under two.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Enter the deal",
                desc: "Add the address, sale price, commission rate, and agent. SplitRE pulls the right commission plan and calculates the full breakdown in real time.",
              },
              {
                step: "2",
                title: "Review and confirm",
                desc: "See the exact split, every deduction, and the updated cap balance before committing anything. Change your mind? Edit and recalculate instantly.",
              },
              {
                step: "3",
                title: "Sync to QuickBooks",
                desc: "One click posts the Invoice and Bill to QuickBooks Online. Your bookkeeper sees clean entries with nothing left to do.",
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Works for brokerages of every size</h2>
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            A 3-agent boutique and a 40-agent independent brokerage get the exact same tool. Your plan tier reflects your team size, not your feature set.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                who: "Boutique broker-owners",
                size: "1 to 5 agents",
                pain: "You&apos;re doing commissions yourself in a spreadsheet you copy every month. One wrong formula and you&apos;re explaining an underpayment to your top producer.",
              },
              {
                who: "Growing independents",
                size: "6 to 25 agents",
                pain: "You&apos;ve outgrown the spreadsheet but can&apos;t justify enterprise software. Your bookkeeper manually re-keys every closing into QuickBooks. Nobody enjoys that.",
              },
              {
                who: "Established brokerages",
                size: "26 or more agents",
                pain: "Multiple commission plan structures, cap migration for mid-year hires, and a bookkeeper who needs a clean QBO audit trail. SplitRE handles all of it.",
              },
            ].map(({ who, size, pain }) => (
              <div key={who} className="bg-gray-50 rounded-2xl p-5 md:p-7 border border-gray-100">
                <div className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-1">{size}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{who}</h3>
                <p
                  className="text-sm text-gray-600 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: pain }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">What brokers are saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We used to spend every Monday morning redoing the commission spreadsheet. SplitRE just does it. I haven't touched a spreadsheet in four months.",
                name: "Sarah T.",
                role: "Broker/Owner, 18 agents",
              },
              {
                quote: "The QuickBooks sync alone saves my bookkeeper three hours a week. The cap tracking is what really sold me. It's bulletproof.",
                name: "Marcus D.",
                role: "Managing Broker, 31 agents",
              },
              {
                quote: "I lost a top producer because we overpaid someone else by mistake. That was a hard lesson. SplitRE has completely eliminated payment errors.",
                name: "Jennifer R.",
                role: "Broker/Owner, 12 agents",
              },
            ].map(({ quote, name, role }) => (
              <div key={name} className="bg-white rounded-2xl p-5 md:p-8 border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">&ldquo;{quote}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-900">{name}</p>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-600 to-violet-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Plans starting at $89/month</h2>
          <p className="text-indigo-100 text-lg mb-3">
            All plans include every feature. Pay annually and save around 30%.
          </p>
          <p className="text-indigo-200 text-sm mb-8">
            For a 5-agent brokerage, SplitRE pays for itself the first time it catches a commission error.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/pricing"
              className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors"
            >
              View pricing
            </Link>
            <Link
              href="https://app.splitre.app/signup"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors"
            >
              Start free trial
            </Link>
          </div>
          <p className="mt-4 text-sm text-indigo-300">14-day free trial · No credit card required</p>
        </div>
      </section>
    </>
  );
}
