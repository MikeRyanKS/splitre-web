import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About SplitRE — Commission Software Built for Independent Brokerages",
  description:
    "SplitRE is built by Keplify LLC, a Delaware-incorporated company. Our mission: make commission accuracy a given for every independent real estate brokerage, from boutique to established.",
  alternates: { canonical: "https://splitre.app/about" },
  openGraph: {
    title: "About SplitRE — Why We Built a Better Commission Tool",
    description:
      "The problem every independent broker knows: spreadsheets that break, cap balances that are always wrong, and a bookkeeper who dreads month-end. We built SplitRE to fix it.",
    url: "https://splitre.app/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">We got tired of the spreadsheet too</h1>
          <p className="text-xl text-gray-600">SplitRE exists because the people who built it lived the problem. Midnight recalculations, agent payment errors, a bookkeeper who dreaded month-end.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What we&apos;re trying to do</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Independent real estate brokerages run on trust. The trust agents place in their broker to pay them correctly and on time. When that breaks, agents leave. 80% of brokerages pay at least one agent incorrectly per year — and most of those errors start with a spreadsheet.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our goal is simple: make commission accuracy something you take for granted, not something you worry about. A 5-agent boutique deserves the same financial precision that large franchises pay enterprise software to achieve.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-indigo-100">
            <div className="space-y-6">
              {[
                { stat: "~120 hrs/yr", label: "saved on commission admin for a 10-agent brokerage" },
                { stat: "80%", label: "of brokerages pay agents incorrectly at least once per year" },
                { stat: "5× to 13×", label: "average ROI on annual subscription cost, depending on team size" },
              ].map(({ stat, label }) => (
                <div key={stat}>
                  <div className="text-3xl font-extrabold text-indigo-600">{stat}</div>
                  <div className="text-sm text-gray-600 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The problem we solve</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The typical independent brokerage tracks commissions in Excel or Google Sheets. Those spreadsheets get copied from last month, modified by hand, and emailed to an agent or a bookkeeper who may or may not be working from the same version.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Cap tracking lives in a separate tab, if it exists at all. When an agent hits their cap mid-deal, someone usually catches it late. And syncing any of this to QuickBooks is a manual process that bookkeepers dread.
          </p>
          <p className="text-gray-700 leading-relaxed">
            SplitRE replaces all of it with a single tool that calculates correctly by construction, tracks caps automatically, and syncs to QuickBooks Online in one click.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What we believe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Accuracy first", desc: "An incorrect commission payment is not a minor inconvenience. It erodes the relationship between broker and agent. We treat accuracy as non-negotiable." },
              { title: "Built for small teams", desc: "We don't build for Fortune 500 companies. Every feature is designed for a broker who wears many hats and doesn't have time for complexity." },
              { title: "Your data stays yours", desc: "We never sell or share your brokerage data. You can export everything at any time. If you leave, your history leaves with you." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-5 md:p-8 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 bg-indigo-50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Get in touch</h2>
          <p className="text-gray-600 mb-4">Questions, feedback, or want to talk through a commission structure?</p>
          <a href="mailto:support@splitre.app" className="text-indigo-600 font-semibold hover:underline text-lg">support@splitre.app</a>
        </div>
      </section>

      {/* Legal */}
      <section className="py-12 px-4 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 mb-3">Legal</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            SplitRE is a product of Keplify LLC, a Delaware limited liability company. Our registered address is 8 The Green, Suite 20261, Dover, Delaware 19901. We are incorporated under the laws of the State of Delaware, United States.
          </p>
          <p className="text-gray-600 text-sm">
            Read our full legal documentation:
          </p>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="/terms" className="text-indigo-600 hover:underline">Terms of Service</Link>
              {" "}— governs your use of the SplitRE application and website
            </li>
            <li>
              <Link href="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link>
              {" "}— describes how we collect, use, and protect your data, including CCPA rights
            </li>
            <li>
              <Link href="/refund-policy" className="text-indigo-600 hover:underline">Refund / Cancellation Policy</Link>
              {" "}— our 7-day refund window and data export terms
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
