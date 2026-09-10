# SplitRE SEO Reference

## Target audience
Independent US real estate brokerages, 3–50 agents. Owner-operators and office managers who currently run commissions in spreadsheets. Typically searching for a spreadsheet replacement or a QuickBooks-connected commission tool.

---

## Primary keywords (highest intent)

| Keyword | Notes |
|---|---|
| real estate commission management software | Core product descriptor |
| commission calculation software for brokerages | High buying intent |
| real estate brokerage back office software | Broad category |
| agent commission tracking | Feature-level search |
| QuickBooks real estate brokerage | Integration-specific, low competition |
| commission split calculator | Tool-level search, high volume |
| real estate cap tracking | Feature-level, niche |
| independent brokerage software | Audience qualifier |

## Secondary / long-tail keywords

| Keyword | Notes |
|---|---|
| real estate commission split software | Variation of primary |
| brokerage commission tracking app | Mobile-friendly framing |
| annual cap tracking real estate | Feature search |
| real estate agent cap management | Feature search |
| QuickBooks sync real estate commissions | Integration + use case |
| replace commission spreadsheet real estate | Pain-point search |
| real estate back office automation | Category |
| commission disbursement software | Accounting angle |
| real estate agent earnings statements | Feature search (PDF statements) |
| mid-year cap migration new agent hire | Very specific, zero competition |
| tiered commission split brokerage | Feature search |
| referral fee deduction commission software | Feature search |
| real estate team commission cap | Feature search (Teams) |
| shared commission cap | Feature search (Teams) |
| team commission split tracking | Feature search (Teams) |
| co-listing commission split | Feature search (co-agent deals) — calculator page + blog post |
| split a real estate deal between two agents | Long-tail, high-intent — calculator page |
| dual agency commission split calculator | Long-tail — calculator page (co-agent split covers the same math) |
| mentor mentee commission split real estate | Long-tail — calculator page / co-agent deals |

---

## Competitor keywords to target

| Competitor | Positioning gap |
|---|---|
| Paperless Pipeline | Priced by transaction volume, commission tracking is a separate paid module — we're flat-rate with everything included |
| Brokermint (rebranded **BoldTrail BackOffice** in 2024 by parent Inside Real Estate — still commonly searched under the old name) | Per-agent/seat pricing, quote-only — we publish flat per-tier pricing |
| dotloop | CRM-heavy, no cap tracking — we focus on commissions |
| kvCORE | Enterprise pricing — we're priced for independents |

Search terms: `Paperless Pipeline alternative`, `Brokermint alternative`, `real estate commission software cheaper than Brokermint`. Addressed in [SplitRE vs. Paperless Pipeline vs. Brokermint](https://splitre.app/blog/best-commission-split-software-for-brokerages) — verified current pricing/model via each competitor's own site before publishing.

---

## Page-level targeting

### Homepage (`splitre.app`)
- H1 target: "Stop Doing Commissions in Spreadsheets"
- Meta title: "SplitRE — Commission Management Software for Real Estate Brokerages"
- Primary: `real estate commission management software`, `independent brokerage software`

### Pricing (`splitre.app/pricing`)
- Meta title: "Pricing — Real Estate Commission Management Software"
- Primary: `real estate commission software pricing`, `brokerage back office software cost`
- Note: include dollar amounts in meta description (Boutique $35/mo, Independent $75/mo, Brokerage $199/mo) — Google surfaces prices in snippets

### Features (`splitre.app/features`)
- Primary: `commission split calculator`, `real estate cap tracking`, `QuickBooks real estate brokerage`
- Target one H2 per major feature with its exact keyword
- Now also covers **Teams / shared caps** (H2 "Run a team on one shared cap" → `real estate team commission cap`, `shared commission cap`) and **co-agent deals** (H2 "One deal, more than one agent" → `co-listing commission split`, `split a real estate deal between two agents`). Both stated as included in every tier.

### Calculator (`splitre.app/real-estate-commission-split-calculator`)
- Primary: `real estate commission split calculator`, `commission split calculator`
- Now also targets multi-agent: the tool splits one deal between two or more agents, each with their own GCI share % and their own split. Metadata + `WebApplication` schema description say so; content section "How to split one deal between two agents" (numbered order-of-operations) targets `co-listing commission split`, `split a real estate deal between two agents`, `dual agency commission split calculator`, `mentor mentee commission split real estate`. FAQ #6 covers the co-listing question and is mirrored in the visible FAQ (schema/visible parity via `faqSchema.mainEntity.map`).

### Blog (8 posts live)
1. "Why Your Commission Spreadsheet Is Costing You More Than You Think" (`eliminate-commission-spreadsheets`) → `real estate commission spreadsheet`
2. "Real Estate Brokerage Accounting: What Every Broker Needs to Know" (`real-estate-brokerage-accounting-basics`) → `real estate brokerage accounting`
3. "QuickBooks Online for Real Estate Brokerages: A Practical Setup Guide" (`quickbooks-online-real-estate-brokerage`) → `QuickBooks real estate brokerage`
4. "The Real Estate Commission Cap: What Every Broker Needs to Know" (`real-estate-commission-cap-explained`) → `commission cap real estate`
5. "How to Calculate Real Estate Agent Commission (The Right Way)" (`how-to-calculate-real-estate-agent-commission`) → `real estate agent commission calculator`
6. "SplitRE vs. Paperless Pipeline vs. Brokermint" (`best-commission-split-software-for-brokerages`) → `Paperless Pipeline alternative`, `Brokermint alternative`
7. "How the NAR Settlement Changed Commission Tracking for Brokerages" (`nar-settlement-commission-changes`) → `NAR settlement real estate`
8. "Tiered Commission Splits Explained" (`tiered-commission-splits-explained`) → `tiered commission split brokerage` — honest about the gap: SplitRE's plan rules are a fixed split + cap-graduation, not multi-tier production splits; positions the cap as a simpler alternative rather than claiming a feature that doesn't exist
9. "How to Calculate a Commission Split When Two Agents Co-List a Property" (`co-listing-commission-split`) → `co-listing commission split` — maps directly to the co-agent-deals feature; links to the calculator's "Split between agents" mode
10. "Running a Real Estate Team on One Shared Commission Cap" (`real-estate-team-shared-commission-cap`) → `real estate team commission cap` — maps directly to the Teams feature; links to `/docs/teams` and `/features`

`related` frontmatter hand-picks each post's 2 related posts (not "most recent 2" — see `lib/blog.ts`); all posts cross-link into `/docs` and back, plus into `/pricing`, `/features`, and the calculator. Blog posts render through `rehypeSlug` (same as docs) so every `##` heading has a stable anchor for deep-linking between posts.

---

## Technical SEO implemented

- `metadataBase`: `https://splitre.app` (set in `web/app/layout.tsx`)
- `alternates.canonical` on every page
- `openGraph` + `twitter` card metadata on layout and per-page
- Keywords array in layout metadata (12 terms)
- `applicationName`, `authors`, `creator`, `publisher` fields set to Keplify LLC
- `robots` directive: `googleBot.max-snippet: -1` and `max-image-preview: large` — enables full snippets in Google AI Overviews
- Static export (`output: "export"`) — fully static HTML, fast crawl
- Cloudflare Pages CDN with edge caching
- `www.splitre.app` → `splitre.app` redirect via Cloudflare Pages custom domains

## Schema markup implemented

| Page | Schema types |
|---|---|
| Layout (all pages) | `Organization` — Keplify LLC, Delaware, contact, sameAs social links |
| Homepage | `SoftwareApplication` (with `featureList`, `AggregateOffer`) + `HowTo` (3-step deal process) |
| Features | `FAQPage` — 7 Q&As (cap tracking, tiered splits, QBO, per-agent overrides, co-agent deals, shared team caps, CSV import) |
| Calculator (`/real-estate-commission-split-calculator`) | `WebApplication` (with `Offer`) + `FAQPage` — 9 Q&As (incl. the co-listing / two-agent split question) |
| Pricing (`/pricing`) | `Product` with a per-tier `Offer` array (name, price, description for Boutique/Independent/Brokerage) |
| Every blog post | `BlogPosting` — headline, image, author/publisher, `dateModified`, `mainEntityOfPage` |
| Every docs article | `Article` (not `TechArticle` — Google doesn't recognize that type for rich results) |
| Docs FAQ (`/docs/faq`) | `FAQPage` — all 16 Q&As, parsed straight from the MDX content so schema can never drift from the visible page |

Schema types eligible for Google AI Overviews and rich results: `HowTo`, `FAQPage`, `SoftwareApplication`, `BlogPosting`, `Article`, `Product`.

## AI search optimization (generative AI / LLM)

- **`robots.ts`**: Explicit allow rules for `GPTBot` (ChatGPT), `ClaudeBot` (Anthropic), `PerplexityBot`, `Meta-ExternalAgent`, `CCBot` (Common Crawl / LLM training), `Google-Extended` (Gemini / AI Overviews — distinct from plain `Googlebot`), `Applebot-Extended` (Apple Intelligence / Siri), `Bytespider` (ByteDance LLM training), `bingbot` (Copilot)
- **`public/llms.txt`**: Emerging standard for AI systems — plain-text summary of what SplitRE does, who it's for, pricing, and key URLs. Google's own May 2026 guidance calls this unnecessary for their systems specifically, but other AI crawlers may still reference it — kept accurate, not treated as a growth lever
- All content written in direct, factual prose (E-E-A-T signals) that AI systems can excerpt accurately
- FAQ and HowTo schema provide structured Q&A that feeds directly into AI Overview answers
- Every blog post carries a "By the SplitRE team" byline linking to `/about` — a modest but real E-E-A-T authorship signal, previously absent
- Answer-first structure: the calculator page's H1 + subhead and the docs FAQ's per-question answers already led with the direct answer; the cap-explainer post's opening was restructured so the actual definition of a commission cap is the first sentence, not buried after a narrative hook

## Analytics

Cloudflare Web Analytics is live for `splitre.app`, added via the dashboard in **Automatic setup** mode — Cloudflare injects the beacon into every response at the edge since Pages traffic is already proxied through their network, so no manual script tag in `layout.tsx` and no token in the codebase. Confirmed working (real page views, visits, and Core Web Vitals data flowing in the dashboard). Privacy-friendly, no cookie banner needed.

## Sitemap

`web/app/sitemap.ts` — Next.js dynamic sitemap with:
- `changeFrequency` on all pages
- Proper `lastModified` date
- Includes `/privacy` and `/terms`

## Legal pages created

- `web/app/privacy/page.tsx` → `splitre.app/privacy`
- `web/app/terms/page.tsx` → `splitre.app/terms`

Both pages reference Keplify LLC as the operating entity (Delaware LLC). Terms include Delaware governing law, arbitration clause, and a disclaimer specific to commission calculation software.

---

## ROI / trust copy (for use in content)

Real numbers for a Boutique-tier brokerage (up to 10 agents):
- ~2.5 hrs/mo admin labor saved (at $30/hr = ~$900/yr value)
- Plan cost: $348/yr (Boutique annual) → **~2.6× ROI from time savings alone**
- Replacing a producing agent costs a brokerage $20,000–$50,000 once you count recruiting, onboarding, and the deals that stall while the seat is empty — that's the real argument for small shops, not per-error dollar amounts
- "One prevented commission error covers ~57 years of SplitRE at $348/yr"

Time-value figures scale by tier — see the pricing page's time-savings table (Independent: ~10 hrs/mo at $40/hr = ~$4,800/yr, $780/yr cost, ~6.2× ROI; Brokerage: ~25 hrs/mo at $50/hr = ~$15,000/yr, $2,028/yr cost, ~7.4× ROI).

---

## Domain / brand

- Domain: `splitre.app` (registered June 2026 via Cloudflare)
- Brand: SplitRE (no USPTO trademark found in Class 36 or 42 as of June 2026 — filing recommended)
- Email: `mike@keplify.com` (contact), `noreply@splitre.app` (transactional)
- Social handles to claim: @splitre on X, Instagram, LinkedIn
