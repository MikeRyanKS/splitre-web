"use client";

import Link from "next/link";

export default function LimitReachedModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 print:hidden">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 sm:p-7 text-center">
        <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-lg font-bold text-gray-900">You've used your 3 free demo deals</h2>
        <p className="mt-2 text-sm text-gray-500">
          That's every free deal for this email for the next 6 months. Start a free 14-day trial for unlimited deals, agents, and commission plans, no credit card required.
        </p>
        <Link
          href="https://app.splitre.app/signup"
          className="mt-5 block w-full rounded-lg bg-indigo-600 text-white text-sm font-semibold py-3 hover:bg-indigo-700 transition-colors"
        >
          Start free 14-day trial
        </Link>
        <button
          onClick={onClose}
          className="mt-2 w-full text-sm text-gray-500 py-2 hover:text-gray-700 transition-colors"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
