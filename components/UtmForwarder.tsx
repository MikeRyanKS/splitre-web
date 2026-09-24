"use client";

import { useEffect } from "react";

// Carries campaign attribution from the marketing site onto the app's signup
// page. Cold-email links land on splitre.app with utm_* params, but the
// "Start free trial" links point at app.splitre.app/signup, a different host,
// so without this the campaign is lost at the exact step we want to measure.
//
// The params are remembered for the browser session, so a visitor who lands
// on the calculator, then browses to pricing, still carries them to signup.
// Rewriting happens at click time via one delegated listener, which covers
// every signup link on the site (Nav, CTAs, pricing cards, MDX content)
// without touching each one.

const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "ref"];
const STORAGE_KEY = "splitre_attribution";
const SIGNUP_HOST = "app.splitre.app";

function readFromUrl(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const found: Record<string, string> = {};
  for (const key of KEYS) {
    const value = params.get(key);
    if (value) found[key] = value;
  }
  return found;
}

function readStored(): Record<string, string> {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function decorate(anchor: HTMLAnchorElement) {
  let url: URL;
  try {
    url = new URL(anchor.href);
  } catch {
    return;
  }
  if (url.hostname !== SIGNUP_HOST || !url.pathname.startsWith("/signup")) return;

  const attribution = { ...readStored(), ...readFromUrl() };
  let changed = false;
  for (const [key, value] of Object.entries(attribution)) {
    // Never overwrite params already on the link (e.g. ?plan=, or GA's _gl linker).
    if (!url.searchParams.has(key)) {
      url.searchParams.set(key, value);
      changed = true;
    }
  }
  if (changed) anchor.href = url.toString();
}

export default function UtmForwarder() {
  useEffect(() => {
    const fromUrl = readFromUrl();
    if (Object.keys(fromUrl).length > 0) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
      } catch {
        // Storage blocked: the current page's own query string still works below.
      }
    }

    const onInteract = (event: Event) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a[href]");
      if (anchor instanceof HTMLAnchorElement) decorate(anchor);
    };

    // pointerdown/contextmenu cover open-in-new-tab and middle click;
    // click covers keyboard activation.
    const events = ["pointerdown", "click", "auxclick", "contextmenu"];
    for (const name of events) document.addEventListener(name, onInteract, true);
    return () => {
      for (const name of events) document.removeEventListener(name, onInteract, true);
    };
  }, []);

  return null;
}
