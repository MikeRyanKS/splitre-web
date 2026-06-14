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

---

## Competitor keywords to target

| Competitor | Positioning gap |
|---|---|
| Paperless Pipeline | Priced by transaction volume — we're flat-rate |
| Brokermint | Per-agent fees — we don't charge per agent |
| dotloop | CRM-heavy, no cap tracking — we focus on commissions |
| kvCORE | Enterprise pricing — we're priced for independents |

Search terms: `Paperless Pipeline alternative`, `Brokermint alternative`, `real estate commission software cheaper than Brokermint`

---

## Page-level targeting

### Homepage (`splitre.app`)
- H1 target: "Stop Doing Commissions in Spreadsheets"
- Meta title: "SplitRE — Commission Management Software for Real Estate Brokerages"
- Primary: `real estate commission management software`, `independent brokerage software`

### Pricing (`splitre.app/pricing`)
- Meta title: "Pricing — Real Estate Commission Management Software"
- Primary: `real estate commission software pricing`, `brokerage back office software cost`
- Note: include dollar amounts in meta description (Boutique $89/mo, Independent $189/mo, Brokerage $329/mo) — Google surfaces prices in snippets

### Features (`splitre.app/features`)
- Primary: `commission split calculator`, `real estate cap tracking`, `QuickBooks real estate brokerage`
- Target one H2 per major feature with its exact keyword

### Blog (future)
Suggested posts ranked by keyword opportunity:
1. "How to Track Agent Caps Without a Spreadsheet" → `real estate cap tracking`
2. "QuickBooks Online for Real Estate Brokerages: A Practical Setup Guide" → `QuickBooks real estate brokerage`
3. "Tiered Commission Splits Explained (and How to Automate Them)" → `tiered commission split brokerage`
4. "Paperless Pipeline vs SplitRE: Which Is Right for Your Brokerage?" → `Paperless Pipeline alternative`
5. "What Is a Commission Cap? A Guide for Brokerage Owners" → `real estate agent cap management`

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
| Homepage | `SoftwareApplication` (with `featureList`) + `HowTo` (3-step deal process) |
| Features | `FAQPage` — 4 Q&As targeting high-intent searches (cap tracking, tiered splits, QBO, per-agent overrides) |

Schema types eligible for Google AI Overviews and rich results: `HowTo`, `FAQPage`, `SoftwareApplication`.

## AI search optimization (generative AI / LLM)

- **`robots.ts`**: Explicit allow rules for `GPTBot` (ChatGPT), `ClaudeBot` (Anthropic), `PerplexityBot`, `Meta-ExternalAgent`, `CCBot` (Common Crawl / LLM training), `bingbot` (Copilot)
- **`public/llms.txt`**: Emerging standard for AI systems — plain-text summary of what SplitRE does, who it's for, pricing, and key URLs. Used by ChatGPT, Perplexity, and others to understand a site without crawling every page
- All content written in direct, factual prose (E-E-A-T signals) that AI systems can excerpt accurately
- FAQ and HowTo schema provide structured Q&A that feeds directly into AI Overview answers

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

Real numbers validated for a 5-agent brokerage closing 50 deals/year:
- ~50 hrs/yr admin labor saved (at $40/hr = $2,000 value)
- 2–3 commission errors prevented per year
- Average commission error: ~10% slip on $11K GCI = ~$1,100/error
- Net annual savings: $2,500–$4,000
- At $749/yr (Boutique annual): **3.5×–5× ROI**
- "Pays for itself with the first commission error it prevents"

---

## Domain / brand

- Domain: `splitre.app` (registered June 2026 via Cloudflare)
- Brand: SplitRE (no USPTO trademark found in Class 36 or 42 as of June 2026 — filing recommended)
- Email: `mike@keplify.com` (contact), `noreply@splitre.app` (transactional)
- Social handles to claim: @splitre on X, Instagram, LinkedIn
