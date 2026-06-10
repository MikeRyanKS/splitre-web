import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Features",
  description: "Commission calculation engine, cap tracking, QuickBooks Online sync, agent management, and deal history — everything your independent brokerage needs.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="bg-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6">Built for how brokerages actually work</h1>
          <p className="text-xl text-gray-600">Every feature was designed to eliminate the manual work that eats your week — from commission calculations to QuickBooks entries.</p>
        </div>
      </section>

      {/* Commission calculation engine */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-indigo-100 text-indigo-700 rounded-full px-3 py-1 text-sm font-medium mb-4">Commission Engine</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculation you can trust</h2>
            <p className="text-gray-600 mb-6">SplitRE handles every plan structure your brokerage uses — percentage splits, tiered splits, flat fees, E&amp;O deductions, and transaction fees. Define rules once; every deal calculates correctly from then on.</p>
            <ul className="space-y-3">
              {[
                "Live deal preview before confirming",
                "Rule-based commission plans per agent",
                "Annual cap tracking with automatic flip to 100%",
                "E&O and transaction fee deductions",
                "Support for referral fee splits",
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
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-sm font-semibold text-gray-500 mb-4">Deal Preview</div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm"><span className="text-gray-600">Sale price</span><span className="font-semibold">$485,000</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-600">Gross commission (3%)</span><span className="font-semibold">$14,550</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-600">E&amp;O deduction</span><span className="text-red-500 font-semibold">-$150</span></div>
              <div className="flex justify-between text-sm"><span className="text-gray-600">Net commission</span><span className="font-semibold">$14,400</span></div>
              <div className="border-t border-gray-100 pt-3">
                <div className="flex justify-between text-sm"><span className="text-gray-600">Agent split (70%)</span><span className="text-indigo-600 font-bold">$10,080</span></div>
                <div className="flex justify-between text-sm mt-1"><span className="text-gray-600">Broker keep (30%)</span><span className="font-semibold">$4,320</span></div>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-sm">
                <span className="text-amber-700 font-medium">Cap progress: $28,400 / $30,000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QuickBooks sync */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="text-sm font-semibold text-gray-500 mb-4">QuickBooks Sync Log</div>
            <div className="space-y-3">
              {[
                { deal: "123 Oak St", status: "Synced", color: "text-emerald-600" },
                { deal: "44 Maple Ave", status: "Synced", color: "text-emerald-600" },
                { deal: "Riverside Condo", status: "Pending", color: "text-amber-600" },
              ].map(({ deal, status, color }) => (
                <div key={deal} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-100">
                  <span className="text-sm text-gray-700">{deal}</span>
                  <span className={`text-xs font-semibold ${color}`}>{status}</span>
                </div>
              ))}
              <button className="w-full bg-indigo-600 text-white text-sm font-semibold py-2.5 rounded-lg">Sync 1 pending deal</button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-block bg-emerald-100 text-emerald-700 rounded-full px-3 py-1 text-sm font-medium mb-4">QuickBooks Online</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">One-click sync to QBO</h2>
            <p className="text-gray-600 mb-6">Every confirmed deal flows to QuickBooks Online automatically. Your bookkeeper gets clean, categorized entries — no more spreadsheet-to-QBO manual entry at month end.</p>
            <ul className="space-y-3">
              {[
                "One-click sync from deal to QBO",
                "Dry-run preview before any sync",
                "Undo a sync if you catch an error",
                "Full sync log with timestamps",
                "Bookkeeper CSV export on Growth and above",
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
            <p className="text-gray-600 mb-6">Manage your entire roster from one dashboard. See cap progress at a glance, assign commission plans, and handle mid-year plan migrations without recalculating anything by hand.</p>
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
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-sm font-semibold text-gray-500 mb-4">Cap Progress</div>
            <div className="space-y-4">
              {[
                { name: "Sarah M.", pct: 95, amount: "$28,500", cap: "$30,000" },
                { name: "James K.", pct: 60, amount: "$18,000", cap: "$30,000" },
                { name: "Lisa P.", pct: 33, amount: "$9,900", cap: "$30,000" },
              ].map(({ name, pct, amount, cap }) => (
                <div key={name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-gray-900">{name}</span>
                    <span className="text-gray-500">{amount} / {cap}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: `${pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deal history */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-700 rounded-full px-3 py-1 text-sm font-medium mb-4">Deal History</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Every deal, always on record</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">A permanent, searchable history of every confirmed deal with full audit trails, CSV export, and PDF agent summaries for year-end or disputes.</p>
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
          <Link href="https://app.splitre.com/signup" className="bg-white text-indigo-700 font-semibold px-8 py-4 rounded-xl hover:bg-indigo-50 transition-colors inline-block">
            Start free trial
          </Link>
        </div>
      </section>
    </>
  );
}
