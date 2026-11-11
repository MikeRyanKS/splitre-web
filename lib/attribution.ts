// Single source of truth for campaign attribution on the marketing site.
//
// Cold-email links land on splitre.app carrying utm_* params. Two separate
// places need them afterwards:
//
//   1. The signup CTAs, which cross to app.splitre.app (a different host) and
//      so cannot share storage. components/UtmForwarder.tsx rewrites those
//      links at click time; the app persists what arrives into
//      brokerages.signup_attribution.
//   2. The calculator's lead gate, which posts to the demo-lead edge function
//      (lib/demoLead.ts). Most cold-email recipients will run a calculation
//      long before they ever create an account, so this is the earlier and
//      more frequent conversion event of the two.
//
// Params are remembered for the browser session, so a visitor who lands on the
// calculator, browses to pricing, then comes back still carries them.

export const ATTRIBUTION_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "ref",
] as const;

export const ATTRIBUTION_STORAGE_KEY = "splitre_attribution";

export type Attribution = Record<string, string>;

export function readAttributionFromUrl(): Attribution {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const found: Attribution = {};
  for (const key of ATTRIBUTION_KEYS) {
    const value = params.get(key);
    if (value) found[key] = value;
  }
  return found;
}

export function readStoredAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem(ATTRIBUTION_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

export function rememberAttribution(found: Attribution): void {
  if (typeof window === "undefined" || Object.keys(found).length === 0) return;
  try {
    sessionStorage.setItem(ATTRIBUTION_STORAGE_KEY, JSON.stringify(found));
  } catch {
    // Storage blocked (private browsing, quota). The current page's own query
    // string still works, so this degrades rather than breaking.
  }
}

// The current page's params win over the stored ones: a visitor who arrives a
// second time on a fresher link should be credited to that link.
export function readAttribution(): Attribution {
  return { ...readStoredAttribution(), ...readAttributionFromUrl() };
}
