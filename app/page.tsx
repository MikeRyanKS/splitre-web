import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SplitRE — Commission Calculations on Autopilot",
  description: "SplitRE eliminates spreadsheet-based commission tracking for independent real estate brokerages. Automated calculations, QuickBooks sync, and accurate agent payments.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "SplitRE",
  applicationCategory: "BusinessApplication",
  description: "Commission calculation engine and QuickBooks sync tool for independent real estate brokerages.",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "49",
    highPrice: "179",
    priceCurrency: "USD",
  },
  operatingSystem: "Web",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-white pt-20 pb-24 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 rounded-full px-4 py-1.5 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            Built for US real estate brokerages
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Commission Calculations<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">on Autopilot</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Stop spending 40–80 hours a month on spreadsheets. SplitRE calculates commissions automatically, keeps caps up to date, and syncs every transaction to QuickBooks Online in one click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.splitre.com/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg shadow-indigo-200">
              Start free trial — no credit card
            </Link>
            <Link href="/features" className="border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 rounded-xl text-lg transition-colors">
              See how it works
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-400">14-day free trial · No credit card required</p>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything your brokerage needs</h2>
            <p className="text-lg text-gray-600">From deal entry to agent payment — no spreadsheets required.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Live deal preview</h3>
              <p className="text-gray-600">See the full commission breakdown before you confirm. Agent split, broker cut, E&amp;O deductions, transaction fees — no surprises.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cap tracking</h3>
              <p className="text-gray-600">Annual cap balances update automatically with every deal. When an agent hits their cap, the split flips to 100% — instantly, correctly, every time.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">QuickBooks sync</h3>
              <p className="text-gray-600">One click pushes every confirmed deal to QuickBooks Online. Preview before syncing, undo if needed, and see a complete sync log for your bookkeeper.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How it works</h2>
            <p className="text-lg text-gray-600">Three steps from deal to books — in minutes, not hours.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Enter the deal", desc: "Add the closing price, agent, and property details. SplitRE pulls the right commission plan automatically." },
              { step: "2", title: "See the breakdown", desc: "Review the full split calculation — GCI, agent portion, broker keep, deductions — with live cap tracking." },
              { step: "3", title: "Sync to QuickBooks", desc: "One click sends the transaction to QBO. Your bookkeeper sees clean, categorized entries with zero manual entry." },
            ].map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-gray-500 text-sm font-medium uppercase tracking-wider mb-8">Trusted by independent brokerages across the US</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Apex Realty Group", "Summit Properties", "BlueSky Brokerage", "Cornerstone RE"].map((name) => (
              <div key={name} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                <p className="text-gray-400 text-sm font-medium">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">What brokers are saying</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "We used to spend every Monday morning redoing the commission spreadsheet. SplitRE just does it. I haven't touched a spreadsheet in four months.",
                name: "Sarah T.",
                role: "Broker/Owner, 18 agents",
              },
              {
                quote: "The QuickBooks sync alone saves my bookkeeper three hours a week. The cap tracking is what really sold me — it's bulletproof.",
                name: "Marcus D.",
                role: "Managing Broker, 31 agents",
              },
              {
                quote: "I had an agent leave because we overpaid someone else by mistake. That cost me a top producer. SplitRE has eliminated payment errors completely.",
                name: "Jennifer R.",
                role: "Broker/Owner, 12 agents",
              },
            ].map(({ quote, name, role }) => (
              <div key={name} className="bg-gray-50 rounded-2xl p-8">
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

      {/* Pricing teaser */}
      <section className="py-24 px-4 bg-gradient-to-br from-indigo-600 to-violet-700 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Plans starting at $49/month</h2>
          <p className="text-indigo-100 text-lg mb-8">All plans include a 14-day free trial and no credit card required. Cancel any time.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pricing" className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors">
              View pricing
            </Link>
            <Link href="https://app.splitre.com/signup" className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              Start free trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
