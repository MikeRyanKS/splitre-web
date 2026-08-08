import type { Metadata } from "next";
import UnsubscribedClient from "./UnsubscribedClient";

// A transactional confirmation page has no search-relevant content and
// exists only for people who just clicked an email link — keep it out of
// the index entirely.
export const metadata: Metadata = {
  title: "Unsubscribed — SplitRE",
  robots: { index: false, follow: false },
};

export default function UnsubscribedPage() {
  return <UnsubscribedClient />;
}
