"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Reads ?status= client-side (rather than Next's useSearchParams) so this
// stays a plain static-exported page with no Suspense-boundary requirement.
// This page only ever needs to reflect one query param.
export default function UnsubscribedClient() {
  const [status, setStatus] = useState<"ok" | "invalid" | "checking">("checking");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setStatus(params.get("status") === "invalid" ? "invalid" : "ok");
  }, []);

  return (
    <div className="max-w-lg mx-auto px-4 py-24 text-center">
      {status === "checking" ? (
        <p className="text-gray-400">Checking your unsubscribe link…</p>
      ) : status === "invalid" ? (
        <>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">That link isn&apos;t valid</h1>
          <p className="text-gray-600">
            This unsubscribe link has expired or already been used. If you&apos;re still getting emails you don&apos;t want, reach us at{" "}
            <a href="mailto:support@splitre.app" className="text-indigo-600 hover:underline">support@splitre.app</a>.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold text-gray-900 mb-3">You&apos;re unsubscribed</h1>
          <p className="text-gray-600">
            You won&apos;t receive any further emails from the SplitRE demo calculator. If you change your mind, you can always run another free calculation at{" "}
            <Link href="/real-estate-commission-split-calculator" className="text-indigo-600 hover:underline">splitre.app</Link>.
          </p>
        </>
      )}
    </div>
  );
}
