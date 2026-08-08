"use client";

import Link from "next/link";

export type ReceiptLineItem = { label: string; amount: number };

type Props = {
  brokerageName: string;
  address: string;
  agentName: string;
  dateLabel: string;
  lineItems: ReceiptLineItem[];
  agentNet: number;
  brokerCut: number;
  remaining: number | null;
  onDownloadClick: () => void;
  onEmailClick: () => void;
};

function fmt(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Deliberately mirrors src/pages/Share.tsx's card + BreakdownTable — same
// header layout, same line-item formatting, same bold Agent Net Payout /
// Broker Cut divider — so a demo PDF looks identical to a real confirmed
// deal's PDF, per the "should look exactly like the real app" requirement.
export default function ReceiptCard({
  brokerageName,
  address,
  agentName,
  dateLabel,
  lineItems,
  agentNet,
  brokerCut,
  remaining,
  onDownloadClick,
  onEmailClick,
}: Props) {
  return (
    <div>
      <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 print:shadow-none print:rounded-none print:border-0">
        {/* Header */}
        <div className="bg-indigo-600 px-8 py-7">
          <p className="text-white text-[11px] font-semibold uppercase tracking-wider">
            {brokerageName || "Your Brokerage"} · Demo Deal
          </p>
          <p className="mt-2 text-white text-xl font-bold">{address || "123 Main St"}</p>
          <p className="mt-1 text-indigo-50 text-sm">
            {agentName || "Agent Name"} &nbsp;·&nbsp; {dateLabel}
          </p>
        </div>

        {/* Breakdown */}
        <div className="px-8 py-7">
          <p className="text-[11px] font-semibold text-gray-500 uppercase tracking-wide mb-3 pb-2 border-b border-gray-100">
            Commission Breakdown
          </p>
          <table className="w-full text-sm">
            <tbody className="divide-y divide-gray-100">
              {lineItems.map((item, i) => (
                <tr key={`${item.label}-${i}`}>
                  <td className="py-2 text-gray-500">{item.label}</td>
                  <td className={`py-2 text-right font-medium ${item.amount < 0 ? "text-red-600" : "text-gray-900"}`}>
                    {item.amount < 0 ? `-${fmt(Math.abs(item.amount))}` : fmt(item.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <table className="w-full text-sm border-t-2 border-indigo-600 mt-3">
            <tbody>
              <tr>
                <td className="pt-3 font-bold text-gray-900 text-[15px]">Agent Net Payout</td>
                <td className="pt-3 text-right font-bold text-indigo-600 text-lg">{fmt(agentNet)}</td>
              </tr>
              <tr>
                <td className="pt-1 text-gray-500 text-[13px]">Broker Cut</td>
                <td className="pt-1 text-right text-gray-500 text-[13px]">{fmt(brokerCut)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Footer — the actual conversion pitch. "Nothing is saved" isn't a
            reason to sign up; "you'll never do this by hand again" is. */}
        <div className="px-8 py-5 bg-indigo-50 border-t border-indigo-100 text-center">
          <p className="text-sm font-semibold text-gray-900">
            You just did this math by hand. SplitRE does it automatically — every deal, every agent, all year — and tracks each agent&apos;s cap for you.
          </p>
          <a
            href="https://app.splitre.app/signup"
            className="inline-block mt-2 text-sm font-bold text-indigo-600 hover:text-indigo-700 hover:underline"
          >
            Start your free 14-day trial → No credit card required
          </a>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-3 print:hidden">
        {remaining !== null && (
          <p className="text-xs text-gray-400 sm:mr-auto">
            {remaining > 0 ? `${remaining} free demo deal${remaining === 1 ? "" : "s"} left` : "Free demo deals used up"}
          </p>
        )}
        <button
          onClick={onEmailClick}
          className="inline-flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Email me this deal
        </button>
        <button
          onClick={onDownloadClick}
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </button>
      </div>

      <p className="mt-3 text-center text-xs text-gray-400 print:hidden">
        Calculated accurately via{" "}
        <Link href="https://splitre.app" className="hover:underline">SplitRE.app</Link>. This live demo doesn&apos;t save anything unless you download or email yourself a copy.
      </p>
    </div>
  );
}
