"use client";

import Script from "next/script";

// Microsoft Clarity: heatmaps and session replay for the marketing site.
//
// Marketing site ONLY, exactly like GA4 and for the same reason: nothing that profiles
// behaviour is loaded inside the signed-in app at app.splitre.app, where the screen
// would contain real brokerages' deal addresses, agent names and commission figures.
// The app's own funnel measurement is first-party (funnel_events + the admin console).
// Keep that boundary when adding anything else of this kind.
//
// Loaded with strategy="afterInteractive" rather than the raw snippet so it never
// blocks first paint; the inline IIFE is Clarity's own documented loader.
const CLARITY_PROJECT_ID = "yt07fygok6";

export default function Clarity() {
  return (
    <Script id="ms-clarity" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");`}
    </Script>
  );
}
