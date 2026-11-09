# SplitRE blog engine: strategy

The full strategy for the SplitRE blog. Read by the `splitre-blog-batch` skill at the start of every run. Written 2026-11-05 from `docs/HOW_IT_WORKS_splitRe.md` (app repo), `SEO.md`, `CONTENT_STYLE.md`, the ten live posts, and a round of SERP research. If this file and the skill ever disagree, this file wins. The topic ledger is `docs/blog/TOPIC_BACKLOG.md`.

**Outcome:** a self-running engine that writes 5 posts once a week, each 650 to 950 words with at least 2 properly captioned images, publishes them on five different randomly chosen days, never repeats a topic, reads as though a person wrote it, and logs every post to a Google Sheet.

**Decisions already taken by the owner:** publish straight to `main` (auto-live); spread the 5 across the week, never same-day; keep a topic record to prevent repetition; at least 2 captioned images per post; no em dashes, no emoji, no inflated vocabulary; internal linking without overdoing it; the first batch is read by a human before anything goes live.

## 1. Architecture

```
Sunday 19:07  - writer task -> 5 posts into content/blog-queue/
                               + images into public/blog/<slug>/
                               each stamped publishAt: <distinct random day + time>
                               commit the queue to main (inert: the build ignores it)

Daily 09:13  -+- publisher task -> node scripts/publish-due-posts.mjs
     15:41   -+                    - take at most 1 due post
                                   - strip publishAt, set date = today
                                   - move to content/blog/
                                   - npm run build (restore and abort on failure)
                                   - append a row to public/blog-tracker.csv
                                   - commit + push -> live
```

Facts about this repo that shape the design:

1. **No staging.** A push to `main` triggers GitHub Actions then `wrangler pages deploy`, live on splitre.app. Unreviewed auto-publishing is the owner's choice, so the guardrails carry the whole quality burden. The biggest risk is a wrong number or a claim about a feature that does not exist.
2. **A post is live the instant it is in `content/blog/`.** `lib/blog.ts` reads every `.mdx` there and does not filter by date, so a future `date` holds nothing back. Scheduling uses a staging folder outside `content/blog`: `content/blog-queue/`. It renders nowhere and enters no sitemap.
3. **The page renders MDX through `next-mdx-remote`.** Plain Markdown images arrive as bare `<img>` with no dimensions or caption. The pipeline change  (Section 15) adds a rehype plugin that wraps a lone image in `<figure>`, reads real dimensions from the file, sets loading hints and builds the `<figcaption>` from the Markdown image title. Writers only ever produce Markdown.
4. **`out/` is static export.** Images are written to their final `public/blog/<slug>/` path at write time so the publisher is a single atomic move.

**Why a script, not a model, publishes:** the publisher runs 14 times a week and is nearly always a no-op. Deterministic is cheap and predictable; the scheduled task is a thin wrapper that reasons only when the script exits non-zero.

**Why at most one post per publisher run:** if the app is closed for days the queue backs up. Draining one at a time preserves the day spread.

**Where the 5 posts go:** posts are written into the queue on Sunday evening and stay editable until their own day, which is also a free review window.

## 2. Who the writing is for

| Reader | Who they are | What they type | What they need |
|---|---|---|---|
| **Broker-owner (primary)** | Runs an independent US brokerage, 5 to 50 agents, not franchise-managed. Commissions in a spreadsheet or a part-time bookkeeper. | "commission cap", "desk fee vs split", "company dollar", "replace commission spreadsheet" | Plain correct answers and worked dollar examples they can copy into a plan. |
| **Bookkeeper or office manager (secondary)** | Freelance bookkeeper serving several small brokerages, or an office admin. Lives in QuickBooks. | "QuickBooks real estate brokerage", "commission disbursement authorization", "1099 real estate agents" | Exact accounting treatment, month-end checklists, export formats. |
| **Solo or tiny-team broker (tertiary)** | 1 to 4 agents, few deals a year. Price-sensitive. | "commission software no monthly fee", "free commission tracker" | The free first 3 deals and the pay-as-you-go path (pointing to /pricing, never quoting it). |

Buying triggers to write into: a new agent joins mid-year, the spreadsheet formula breaks on a cap crossing, an agent disputes a payout, the bookkeeper quits or changes, the brokerage adds a second company or a team, a franchise changes its royalty rules, tax season.

Write for the person who actually types the deals in. In a small office that is often the broker-owner after hours, or an office manager who is not an accountant.

Not our readers: franchise-managed offices, individual agents shopping for a brokerage (only when the answer helps a broker-owner explain their own plan), enterprise brokerages.

## 3. Segments, ranked by how winnable they are

English, US only. SplitRE is for independent US brokerages, so the ranking is by competition found in the research, not market size.

| Tier | Segment | Why |
|---|---|---|
| **1. Write first** | Commission mechanics for independents (caps, anniversary caps, desk and transaction fees, tiers, referral fees, split companies, team pools, co-agent splits, deal types) | Recruiting blogs (passandearn, movewithmomentum, jamilacademy, listwithclever, qobra) write for agents picking a brokerage with thin math. A broker-owner angle with worked numbers has little direct competition. |
| **1. Write first** | Bookkeeper and accounting for brokerages (company dollar, CDA, month-end, 1099, GCI versus net in QuickBooks, serving several brokerages) | Served by generalist bookkeeping vendors and QuickBooks community threads. None cover cap math or per-agent export rows. |
| **2. Write next** | Switching and software evaluation (spreadsheet limits, migration, alternatives, pricing models, what to look for) | Owned by Paperless Pipeline's own pages, G2 and Capterra. Our edge is published pricing and honesty about limits. Winnable with specific, fair comparisons. |
| **2. Write next** | Growth (plan design, recruiting through the plan, retention, NAR follow-ups) | Crowded top-of-funnel, so only with a plan-design angle no recruiting blog has. |
| **Not yet** | State-by-state content (licensing, trust account rules, disclosures) | Needs per-state legal verification that cannot be done safely unattended. Deliberate deferral. |
| **Not yet** | Franchise-by-franchise "X commission split" pages | Recruiting sites own it and conflicting, fast-changing figures make unattended accuracy impossible. Use franchise plan shapes only as labeled examples. |

## 4. Four clusters

| Cluster | Share | Pattern | Why it earns its place |
|---|---|---|---|
| **A. Commission mechanics** | ~40% | "Anniversary Cap vs Calendar-Year Cap" | Highest fit with the product and weakest competition. Every topic maps to a real feature, so the product mention is honest. |
| **B. Back-office and accounting** | ~20% | "What Is Company Dollar in Real Estate" | Bookkeeper audience, long-tail, and each answer ties to the QuickBooks export or a report. |
| **C. Switching and software evaluation** | ~25% | "Brokermint Alternative", "Commission Spreadsheet Template and Where It Breaks" | Commercial intent, closest to signup, and comparison content carries extra weight in AI-assisted research. |
| **D. Growth and plan design** | ~15% | "How to Design a Plan That Attracts Agents" | Top of funnel, question-shaped, shareable. |

A good week is 2 from A, 1 from B, 1 to 2 from C, 0 to 1 from D. Never more than 2 from one cluster, never more than 1 purely definitional post.

## 5. What makes SplitRE worth writing about

1. **Cap math done right:** straddling caps, anniversary-year caps, fees with their own yearly ceiling, team shared caps, caps split across two companies.
2. **Worked dollar examples,** computed from the app's real rules. Competitor posts are mostly generic definitions.
3. **Honest flat pricing and a free start:** first 3 confirmed deals free, no card, no time limit. (Prices themselves are never quoted in posts, see guardrails.)
4. **Bookkeeper-ready output:** a QuickBooks-ready CSV with invoice and bill descriptions, one row per agent on co-agent deals.
5. **Confirmed deals never change:** plan edits only affect new deals. A strong trust and audit message.

## 6. Keyword method (repeatable, no paid tools)

**Limit to remember:** the available search tools do not return Google search volumes. Priorities are SERP analysis plus judgment. Connect Google Search Console (Section 11) and replace guesses with data after 4 to 6 weeks.

For each candidate topic the writer:

1. Runs a `WebSearch` for the primary keyword and reads who ranks. **Weak competition, go ahead:** recruiting blogs with thin math, Etsy and Gumroad agent templates, vendor landing pages, directory stubs, bookkeeping vendors that never mention caps. **Strong, skip:** an independent, accurate, deep guide already owns it. Mark the row `skipped` with a reason.
2. Harvests the related phrasings and questions from the results and turns them into H2s.
3. Confirms nothing of ours already targets it: `ls content/blog/ content/blog-queue/ content/docs/`, grep `app/features` and `app/pricing`, and the topic ledger.
4. Picks **one** primary keyword, long-tail, usually with a modifier (`software`, `cost`, `checklist`, `vs`, `example`, `how to`) plus an audience or situation qualifier.

Placement: primary keyword in the `title`, the `excerpt`, the slug, the first 100 words, and one H2. Three to six secondaries as H2 or H3 questions. Nothing stuffed, nothing repeated mechanically.

**What the SERPs showed on 2026-11-05**

- Commission split queries: recruiting blogs, sparse worked math, conflicting franchise cap figures (KW caps vary by market center, eXp 80/20 to $16,000 with anniversary reset, Real 85/15 to $12,000, from low-quality sources). Never state a franchise's cap as current fact.
- Spreadsheet queries: Etsy, Payhip, Gumroad and Notion templates for individual agents. A brokerage-level page with honest limits is a gap.
- Software comparison: Paperless Pipeline's own pages, G2, Capterra. BoldTrail BackOffice (formerly Brokermint) is quote-only. Our edge is published flat pricing, but posts do not quote any figures.
- Bookkeeping: beancount.io, uplinq, getholdings and QuickBooks community threads. Nothing on cap math or per-agent rows, nothing for the bookkeeper who serves several brokerages.
- Category scale: "real estate transaction management software" shows roughly 1,300 US searches a month (seodata.dev). Our narrower terms are probably tens to low hundreds each. The aim is buyers, not traffic.

**Keyword tiers**

| Tier | Primary targets | Use |
|---|---|---|
| 1. Buying intent | real estate commission software, commission management software real estate, brokerage commission tracking software, Brokermint alternative, BoldTrail BackOffice alternative, Paperless Pipeline alternative | Cluster C. One primary keyword per post. |
| 2. Feature and problem | real estate commission cap, anniversary cap, franchise royalty cap, graduated commission split, desk fee vs commission split, transaction fee real estate brokerage, company dollar real estate, commission disbursement authorization, agent commission statement | Clusters A and B. Best chance to rank in the first months. |
| 3. Tool and template | commission split calculator, real estate commission tracking spreadsheet, brokerage commission spreadsheet | Posts that funnel into the free calculator. |
| 4. Audience and context | QuickBooks real estate brokerage, 1099-NEC real estate agents brokerage, bookkeeper for real estate brokerage | Clusters B and D. |
| 5. Question and AI-answer | "how does a commission cap work", "what is a desk fee", "what is company dollar", "how do you split commission between two agents" | Answer-first openings and the Common questions block on every post. |

`SEO.md` keyword tables remain valid.

## 7. Post format

- **650 to 950 words** of body text (existing posts average about 950; this is slightly tighter).
- **The opening paragraph is a 50 to 70 word direct answer to the title's question.** No preamble. No links in it.
- **Three or four H2s**, phrased as questions a reader would type. Each H2's first sentence answers it alone.
- **A worked example with real dollar figures** in at least one section, computed and checked twice. Label it "Example". Dollar figures in worked examples are commission math, not product prices.
- **One table, optional,** and only where it carries the comparison.
- **A `## Common questions` section,** two or three Q&As as H3.
- **A closing paragraph** with the single call to action, linking `https://app.splitre.app/signup`, tied to what the post explained. "Your first 3 deals free" only where it fits.
- `readTime: "N min read"` is words divided by 200, rounded up.
- No `# H1` in the body: the page renders H1 from `title`.
- Frontmatter, matching `lib/blog.ts`:

```yaml
---
title: "Anniversary Cap vs Calendar-Year Cap: Which Should Your Brokerage Use?"
date: "2026-11-09"
excerpt: "One sentence, 140 to 160 characters, carrying the primary keyword and a reason to click."
readTime: "4 min read"
keywords: ["anniversary year commission cap", "calendar year cap real estate", "commission cap reset date", "agent cap anniversary"]
related: ["real-estate-commission-cap-explained", "how-to-calculate-real-estate-agent-commission"]
publishAt: "2026-11-09T10:35"
cluster: "A. Commission mechanics"
reader: "Broker-owner"
primaryKeyword: "anniversary year commission cap"
---
```

- `title`, `date`, `excerpt`, `readTime`, `keywords` (at least 3) and `related` (exactly 2 slugs of already-published posts) are required.
- `publishAt` is stripped and `date` rewritten to the real publish date by the publisher. Set `date` equal to the `publishAt` day so the file is valid if moved by hand.
- `cluster`, `reader` and `primaryKeyword` are carried into the tracker. The publisher strips only `publishAt`; the other three stay as harmless extra frontmatter, which `lib/blog.ts` ignores.
- Filename is the slug: kebab-case, keyword-shaped, 2 to 8 words, matches the image directory name.

## 8. Voice, so it reads like a person wrote it

`CONTENT_STYLE.md` already governs voice. In addition:

**Never:**
- Em dashes or en dashes (a range uses "to"). Rewrite the sentence; never find-and-replace.
- Emoji, anywhere.
- The inflated register: delve, leverage, robust, seamless, streamline, unlock, elevate, harness, pivotal, crucial, vital, paramount, myriad, plethora, realm, landscape, tapestry, testament, game-changer, cutting-edge, state-of-the-art, holistic, synergy, bustling, ever-evolving, fast-paced, powerful, effortless, revolutionary, supercharge, delight.
- The giveaways: "In today's ... world", "It's not just X, it's Y", "Let's dive in", "In conclusion", "At its core", "When it comes to", "Moreover" / "Furthermore" / "Additionally" opening a paragraph, "Whether you're a ... or a ...", a rhetorical question as the first line, a bolded one-line summary under every heading.
- Three-item lists as the default rhythm. Vary to two, four, five.
- Hedging stacks ("may potentially help to somewhat improve").

**Do:**
- Vary sentence length on purpose. Some short. Some that run longer because the thought needs the room.
- Use contractions where they fall naturally.
- Name one concrete, checkable specific per section: a real dollar figure in a worked example, an actual order of operations, a named feature (cap opening balance, deal types, Confirm Deal).
- Write in the second person to the broker or the person typing the deals.
- State a trade-off or something SplitRE does not do (it calculates and records; it does not move money, hold trust funds or replace a compliance tool). Nothing reads more human than an honest limitation.
- Let a paragraph be one sentence when that is the right length.

## 9. Images: at least two per post

No image-generation tool is available, so images are **authored**, which is better here anyway: a clear diagram and a real screenshot beat generic illustration.

1. **An authored SVG diagram**, at least one per post, always image one. A flow (deal to cap check to split), a before-and-after, a labelled worked-example bar, a decision tree, a comparison. Hand-written SVG using the site palette from `app/globals.css`: primary `#4f46e5`, dark primary `#4338ca`, accent `#7c3aed`, success `#10b981`, ink `#111827`, body text `#374151`, tint `#eef2ff`, border `#e5e7eb`, surface `#f9fafb`. `viewBox="0 0 1200 630"` with `width="1200" height="630"`, `font-family="system-ui, -apple-system, 'Segoe UI', sans-serif"`, labels as real `<text>` elements, `role="img"` plus `aria-label` describing the picture, at most six labels for a flow or diagram (eight for a two-column list), no clip-art, no emoji, no gradients, no drop shadows. Body text at 28px or larger because the article column is roughly 700px wide and everything renders at about half size. Light only (the site has no dark mode). Check every attribute for stray whitespace.
2. **A real product screenshot** from `public/screenshots/` wherever the topic maps to a module: `dashboard.png` (dashboard), `commission_plans.png` / `splitre-commission-plan-setup.png` (plan setup), `deal_entry.png` / `splitre-commission-deal-entry-calculator.png` (deal entry with live preview), `deals.png` / `splitre-deals-table-full.png` (deals list), `splitre-deals-list-csv-export.png` (CSV export), `agents.png` / `splitre-agent-cap-tracking-dashboard.png` (cap progress), `splitre-cap-reached-notification.png`, `splitre-agent-confirmation-email.png`, `splitre-deal-amendment-email.png`, `splitre-deal-amendment-history.png`, `splitre-import-deals-csv.png`, `splitre-deals-by-location.png`. Where nothing genuinely fits, author a second SVG. Never force a screenshot that does not match the paragraph.

**Placement:** image one directly after the opening answer paragraph; image two in the middle third. Never two images adjacent, never one immediately before the closing CTA.

| Attribute | Rule |
|---|---|
| Path | `public/blog/<post-slug>/<descriptive-name>.svg` |
| Filename | 3 to 6 lowercase hyphenated words describing the image, not the post: `cap-crossing-split-across-one-deal.svg`. Never `image-1.svg`, never keyword-stuffed |
| `alt` | One specific sentence on what is shown, under about 125 characters, the primary keyword at most once and only if natural. Never "image of" or "picture showing" |
| Caption | A short sentence adding something the body does not repeat |
| `width` / `height` | Set by the build from the real file, so there is no layout shift |
| `loading` | First image `eager` with `fetchpriority="high"`, the rest `lazy` |
| Sitemap | Each post's images listed on its `sitemap.xml` entry |

**Markdown is all a writer produces:**

```markdown
![A $12,000 broker share crossing a $4,000 cap room, split into a capped part and a 100% part](/blog/anniversary-cap-vs-calendar-year-cap/cap-crossing-split-across-one-deal.svg "The deal that crosses the cap is split in two, so the brokerage only collects what is left under it.")
```

The third argument is Markdown's image title; the build turns it into the `<figcaption>`.

## 10. Internal linking: a map, not a sprinkle

- **Hubs** (existing posts act as cluster hubs): cap hub `real-estate-commission-cap-explained`; split math hub `how-to-calculate-real-estate-agent-commission`; accounting hub `quickbooks-online-real-estate-brokerage` (and `real-estate-brokerage-accounting-basics`); software hub `best-commission-split-software-for-brokerages`; team hub `real-estate-team-shared-commission-cap`; co-agent hub `co-listing-commission-split`. Plus `/features`, `/pricing`, `/real-estate-commission-split-calculator`, and the relevant `/docs/<slug>`.
- **Spokes:** every post links **up** to exactly one hub, **sideways** to one or two already-published siblings in its cluster, to the calculator once, and to one `/docs/` page.
- **Hard caps:** 3 to 5 in-text internal links per post, no more than one per roughly 150 words, never two in one sentence, never the same target twice, **none in the opening answer paragraph**, and exactly one link to `https://app.splitre.app/signup` (the closing CTA, not counted among the internal links).
- **Only link to posts that are already published** (in `content/blog/`). A link to a queued post is a 404 until its day.
- Anchor text is the target's subject in natural words, never "click here", never a bare URL, never the exact primary keyword reused as anchor across posts.
- `related` frontmatter: two already-published slugs chosen by topic, not recency.

## 11. Measurement

The marketing site already has Cloudflare Web Analytics (automatic), Google Analytics 4 (`G-T54MEEW87Y`, events `calculator_used` and `sign_up_click`) and Microsoft Clarity. **Google Search Console verification is not in the repo** (`app/layout.tsx` has no `verification` metadata), so impressions, queries and positions are invisible. That is the missing piece. Handled as a step that needs the owner's verification token: add `verification: { google: "<token>" }` to the root metadata in `app/layout.tsx`, or verify the property through Cloudflare DNS, and submit `https://splitre.app/sitemap.xml`.

Monthly review: posts with impressions but few clicks (rewrite title and excerpt); posts with clicks but no calculator use (strengthen the tie-in; filter GA by landing page `/blog/*`); posts with nothing after 8 weeks (merge or retire). Drop from 5 posts a week to 2 or 3 if impressions per post are flat after the first month. Five a week is aggressive for a niche this size, and Google's spam policies target volume of thin, interchangeable content.

## 12. Hard guardrails

This is the quality bar for unattended publishing. Sources: `CONTENT_STYLE.md`, `docs/HOW_IT_WORKS_splitRe.md` and `docs/stripe-payment-system.md` (app repo), and `SEO.md`.

- **Never state a price.** No plan price, credit-pack price, annual-discount figure or per-deal cost. Link to `/pricing`. Prices have changed before (a 14-day trial became "first 3 deals free") and a hundred unattended posts would guarantee drift. Plan names are fine; the fixed promise "Your first 3 deals free" and "7-day money-back guarantee" are fine; dollar figures inside worked commission examples are fine.
- Never "free trial", never "14-day", never any clock. Never "no per-agent fees" (tiers are by active agent count).
- SplitRE is **commission management software**. Never "back office software".
- SplitRE **calculates and records**. It does not process payments, move money, hold trust or escrow funds, file taxes, or replace a document compliance tool (SkySlope, Dotloop). Say so where relevant.
- **QuickBooks:** a QuickBooks-ready CSV export with pre-formatted invoice and bill descriptions. **No live integration or sync.** Never write "QuickBooks sync" or "integrates with QuickBooks".
- Teams, shared caps and co-agent deals ship on every plan. Never imply feature gating.
- Not for franchise-managed brokerages. Franchise plan shapes (KW, eXp, Real style) are **labeled examples only**: "a plan like 80/20 to a $16,000 cap". Never state a franchise's current cap or royalty as fact.
- No tech stack names, hosting provider or database.
- No invented numbers, customers, brokerages, testimonials or quotes. A statistic is fetched and linked at write time or left out; describe the mechanism instead of a made-up percentage. Commission worked examples are labeled "Example".
- Tax, legal, trust account and licensing topics: explain how it generally works, say it varies by state and situation, tell the reader to confirm with a CPA or their state real estate commission. No legal or tax advice. IRS forms and thresholds are verified against irs.gov at write time or omitted. No state-by-state claims.
- Cluster C: competitor facts only from that competitor's own live public pages, fetched at write time. **No competitor price comparisons**, no disparagement, "alternatives to X" framing rather than a head-to-head verdict. Be fair about what they do that SplitRE does not (transaction management, CRM suites).
- SplitRE app analytics: never imply the app runs third-party analytics. Never describe the privacy policy.
- No images of real people, no invented screenshots. Screenshots come only from `public/screenshots/`.
- Only describe SplitRE features that appear in `docs/HOW_IT_WORKS_splitRe.md`. If the topic touches something SplitRE does not do (agent billing, revenue share, stock awards, recurring desk-fee billing, trust accounting, payments), say so plainly.

## 13. Refresh queue (do these before writing new posts)

Existing posts that are wrong now. The writer edits them in place (not through the queue, since they are already live) and logs them in the ledger below; they do not count toward the five, at most 3 per run.

| Slug | Problem | Fix | Status |
|---|---|---|---|
| `tiered-commission-splits-explained` | Says SplitRE "doesn't replicate" multi-tier graduated splits. Commission Engine v2 shipped 2026-10-02: graduated splits by GCI this cap year, sales volume, brokerage collected, or closed deals; deals that cross a threshold are split across tiers by default. | Rewrite the "simpler alternative" section to describe the real feature with a worked three-tier example; keep the honest cap comparison. Also update `SEO.md` blog entry 8, which repeats the old claim. | done 2026-11-06 (real tiered feature described, three-tier crossing example, SEO entry 8 rewritten) |
| `real-estate-commission-cap-explained`, `how-to-calculate-real-estate-agent-commission` | Written before anniversary caps, capped fees, split companies, deal types. | Read both; add short accurate mentions and links where silent or wrong. Do not rewrite wholesale. | done 2026-11-06 (closing date decides the cap year, anniversary resets, capped fees, split companies, deal types off the cap, franchise fee base) |
| `best-commission-split-software-for-brokerages` | Quotes plan prices ("$29/mo, $65/mo, $169/mo", the annual-billing per-month equivalents). Prices never appear in posts, and the post omits monthly billing and pay-as-you-go. It also says "no per-agent add-on" wording that the style guide discourages. | Replace the figures with a link to `/pricing`; describe the model (flat tier by active agent count, or pay per confirmed deal, first 3 deals free); re-fetch the competitors' own pages and drop any competitor figure that is stale. Update `SEO.md` entry 6 if needed. | done 2026-11-06 (prices and Paperless Pipeline figures removed, pay-as-you-go and graduated splits added) |
| `real-estate-brokerage-accounting-basics` | Uses "when it comes to" (style lint). | Rewrite that sentence. | done 2026-11-06 |
| `eliminate-commission-spreadsheets` | States "40 to 70 hours per month" of commission admin for a 10-agent brokerage with no source. | Find a sourced figure or reword as a mechanism with a labeled example. | done 2026-11-09 (no figure was sourceable, so the section now tells the broker to time three of their own deals, with a labeled 12-deal example; the invented hourly-rate valuation is gone) |
| `real-estate-team-shared-commission-cap` | No link to the calculator (and the calculator deliberately omits teams, so word the link carefully). | Add one honest sentence and link. | done 2026-11-09 (calculator link added after the worked example, saying why it has no team mode and how to keep the pool total by hand; SEO entry 10 updated) |
| `real-estate-team-shared-commission-cap` | Has no closing call to action and no signup link, unlike every other post. Spotted during the 2026-11-09 run while adding the calculator link; left alone because the refresh row only covered the calculator. | Add a closing paragraph tied to shared caps with the single signup link, the same shape as the other posts. | pending |

Add a row whenever a docs or product change makes a post wrong (`docs/WEBSITE_UPDATES.md` in the app repo is the signal).

## 14. The tracker

`public/blog-tracker.csv` is the source of truth, written by the publisher. It is served at `https://splitre.app/blog-tracker.csv`. Columns: `Post #,Title,URL,Date Published,Cluster,Reader,Primary Keyword,Status`. No post content. It is public, but it holds only titles, dates, URLs and keywords that the published posts and sitemap already expose.

A Google Sheet pulls it with `=IMPORTDATA("https://splitre.app/blog-tracker.csv")` and refreshes about hourly. Manual columns (Search Console impressions, clicks, position) go to the right of the imported block.

## 15. Files

Changed in `web/`: `lib/blog.ts` (export `getPostImages`, `getPostOgImage`), `lib/rehypeBlogFigures.ts` (new rehype plugin), `app/blog/[slug]/page.tsx` (plugin and OG image), `app/globals.css` (figure styling), `app/sitemap.ts` (images), `package.json` (`image-size` devDependency).

New in `web/`: `scripts/publish-due-posts.mjs`, `scripts/blog-lint.mjs`, `scripts/pick-publish-slots.mjs`, `content/blog-queue/.gitkeep`, `public/blog/`, `public/blog-tracker.csv`, `docs/blog/CONTENT_STRATEGY.md`, `docs/blog/TOPIC_BACKLOG.md`.

New in `~/.claude`: `skills/splitre-blog-batch/SKILL.md`, and two scheduled tasks `splitre-blog-writer` (Sunday 19:07) and `splitre-blog-publisher` (daily 09:13 and 15:41). Both run only while the Claude desktop app is open; a missed run fires on next launch and the publisher is idempotent.
