# Marketing Facts

Last verified: 2026-11-09 against app repo commit 52a9d39 (splitre) and the live site.

The only list of claims marketing may make in public. Feature detail lives in the app repo's `docs/HOW_IT_WORKS_splitRe.md`; do not quote that for copy. Prices are deliberately not repeated here: read `lib/pricing.ts`.

## ACTION REQUIRED FOR MARKETING

Check live and scheduled campaigns against these. Remove an item only once the copy is fixed.

1. **"14-day trial" and "free trial" are wrong** and have been since 2026-10-05. Use the offer wording below.
2. **"$29/month", "$65/month" or "$169/month" with no "billed annually" is wrong.** Those are the annual prices divided by 12. See Pricing. Our own homepage and pricing metadata said "from $29/month" unqualified until 2026-11-09; they now say "billed annually".

## The offer

Exact on-site wording: "Your first 3 deals are free either way. No credit card, and no clock." (pricing page). Short form used everywhere: "Your first 3 deals free."

- Consumes one: confirming a deal. Does not: saving a draft, amending a confirmed deal. A co-agent deal is one. Voiding does not give one back.
- It is the whole product: no watermark, and agent limits are not enforced while the account is on free deals. Limits apply once the broker picks a plan.
- Confirming the 3rd free deal just works. The paywall appears when they try to confirm a 4th: it offers a pay-as-you-go pack or a flat plan, the draft is saved first, they can still see the full breakdown. Nothing is deleted or locked and everything confirmed stays readable.
- No 14-day path exists, including for legacy accounts. No trial-ending or "days left" emails are sent (removed 2026-10-05). A free account with deals left stays open until 24 months of total inactivity, with two warning emails first.
- Two different things share the words "3 free": the **signup offer** above, and the **calculator limit** (one email address can download or email 3 PDFs per 6 months). Say "3 free deals" only about the signup offer. For the calculator say "3 free PDFs per email".

## Pricing

Source of truth: `lib/pricing.ts` (`plans`, `paygPacks`). Rendering and JSON-LD both read it.

- The pricing page opens on the **Annual** view. A reader sees `annualPerMonth` (annual divided by 12) first, which is why the page's first prices are the lower ones.
- `monthly` is the month-to-month price. `annualPerMonth` is only ever a billed-annually figure. Never call it "the monthly price".
- Annual does save money, but the percentage differs by tier: `annualSavings / (monthly * 12)`. "Save up to 17%" is true only because the best tier reaches it. Never "save 17%" flat.
- Pay as you go has no monthly fee, credits never expire, 1 credit = 1 confirmed deal. Every plan and pack includes every feature.
- Money-back guarantee is 7 days. Conditions are on /refund-policy; quote that page, not a paraphrase.

## Claims marketing may make

Each is still true as of 2026-11-09.

- QuickBooks-ready CSV export: select deals, one click, one row per agent on co-agent deals.
- Automatic cap tracking, including a deal that crosses the cap partway: the brokerage takes only what is left of the cap on that deal.
- The agent's commission statement is emailed when a deal is confirmed. On by default, and the broker can switch it off per agent or brokerage-wide, so say "can email", not "always emails".
- Free calculator at /real-estate-commission-split-calculator. The calculation needs no signup; downloading or emailing the PDF asks for a first name and email.
- Co-agent deals, shared team caps, graduated splits and capped fees are on every plan.

## Do NOT claim

- A free trial, a trial period, or any number of days of free use.
- "Unlimited free deals", "free forever", or a free plan. It is 3 deals.
- "No per-agent fees". Tiers are by agent count. Say "one flat price per tier".
- "Back office software". It is commission management software.
- "Save 17%" as a flat figure, or any `annualPerMonth` price without "billed annually".
- That the calculator's 3 PDFs are the account's 3 free deals.

## Keeping this file true

- Update it in the same PR as any change to pricing, plan limits, the free offer, or a user-facing feature marketing talks about, in whichever repo the change lands.
- A change that invalidates something marketing is sending goes under ACTION REQUIRED first, naming the exact claim and the ship date.
- Quote on-site wording exactly. Do not paste prices here; reference `lib/pricing.ts`.
- `npm run check:facts` enforces this (see `scripts/check-marketing-facts.mjs`) and runs before every deploy. A weekly job fails if "Last verified" is over 30 days old. The app repo's CI cross-checks its billing code against `lib/pricing.ts`.
- Under 100 lines. Longer belongs in HOW_IT_WORKS.
