"use client";

import { useState } from "react";
import Link from "next/link";
import { storeLead, requestDemoDeal, type DemoDealPayload, type DemoLeadResult } from "@/lib/demoLead";

type Props = {
  action: "download" | "email";
  deal: DemoDealPayload;
  onClose: () => void;
  onResolved: (result: DemoLeadResult, email: string, firstName: string) => void;
};

export default function LeadGateModal({ action, deal, onClose, onResolved }: Props) {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!firstName.trim() || !email.trim()) return;
    setSubmitting(true);
    setError(null);

    const trimmedEmail = email.trim();
    const trimmedName = firstName.trim();
    const result = await requestDemoDeal(action, trimmedEmail, trimmedName, deal);

    if (!result.ok) {
      setError(result.error);
      setSubmitting(false);
      return;
    }

    storeLead({ email: trimmedEmail, firstName: trimmedName, remaining: result.limited ? 0 : result.remaining });
    onResolved(result, trimmedEmail, trimmedName);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 print:hidden">
      <div className="bg-white rounded-2xl shadow-xl max-w-sm w-full p-6 sm:p-7">
        <h2 className="text-lg font-bold text-gray-900">
          {action === "download" ? "Get your PDF" : "Email me this deal"}
        </h2>
        <p className="mt-1.5 text-sm text-gray-500">
          {action === "download"
            ? "Enter your name and email — we'll open your PDF right away. No account needed."
            : "We'll send this breakdown straight to your inbox. No account needed."}
        </p>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">First name</label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Jamie"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="jamie@brokerage.com"
            />
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <div className="flex gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-lg border border-gray-300 text-gray-600 text-sm font-medium py-2.5 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 rounded-lg bg-indigo-600 text-white text-sm font-semibold py-2.5 hover:bg-indigo-700 disabled:opacity-60 transition-colors"
            >
              {submitting ? "Please wait…" : action === "download" ? "Get PDF" : "Send it"}
            </button>
          </div>
        </form>

        <p className="mt-4 text-[11px] text-gray-400 text-center">
          Want unlimited deals?{" "}
          <Link href="https://app.splitre.app/signup" className="text-indigo-600 font-medium hover:underline">
            Start your free 14-day trial
          </Link>
        </p>
      </div>
    </div>
  );
}
