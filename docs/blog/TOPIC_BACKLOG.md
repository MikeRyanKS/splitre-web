# SplitRE blog topic backlog (the topic ledger)

This file plus the frontmatter in `content/blog/` and `content/blog-queue/` is the ledger that stops a topic being written twice. The writer sets `planned` to `queued` and fills the slug column; the publisher flips `queued` to `published` (it matches the row by the backticked slug and the text `| queued |`, so keep those two exactly as they are). Statuses: `planned`, `queued`, `published`, `skipped` (with a reason in the Notes column), `hold` (needs owner input).

Pillars: **A** commission mechanics, **B** back-office and accounting, **C** switching and software evaluation, **D** growth and plan design. Reader: **BO** broker-owner, **BK** bookkeeper, **SB** solo broker. Priority 1 comes before 2 before 3; within a priority take the lowest ID. Add rows at the bottom, never renumber. When fewer than 10 `planned` rows remain, the writer adds 15 new rows (sources: Search Console queries with impressions and no dedicated post; `docs/WEBSITE_UPDATES.md` in the app repo; the docs FAQ; People Also Ask on the primary keywords; competitor posts that rank where we have nothing).

Product-tie notes are for the writer: verify every product claim in `docs/HOW_IT_WORKS_splitRe.md` (app repo) before writing it. No prices in any post.

## Priority 1

| ID | Working title | Pillar | Reader | Primary keyword | Slug | Status | Notes |
|---|---|---|---|---|---|---|---|
| B01 | Desk Fee vs Commission Split: How to Price Your Brokerage's Plan | A | BO | desk fee vs commission split | `desk-fee-vs-commission-split` | published | Compare a capped split, a high split plus desk fee, and a hybrid for the same 12-deal agent. Plans support a desk fee and per-transaction fees. |
| B02 | Real Estate Commission Tracking Spreadsheet: A Layout and Where It Breaks | C | BO | real estate commission tracking spreadsheet | `commission-tracking-spreadsheet-brokerage` | queued | Brokerage-level layout, then five failure points (cap crossing, anniversary year, backdated deals, co-agent, team pool). Link `eliminate-commission-spreadsheets`. |
| B03 | What Is Company Dollar in Real Estate (and How to Calculate It) | B | BK | company dollar real estate | `company-dollar-real-estate` | queued | GCI minus agent payout and pass-throughs. Royalties and referral fees are pass-through, not company dollar. Ties to Broker Net in the CSV and Broker Revenue report. |
| B04 | Brokermint Alternative: BoldTrail BackOffice vs SplitRE | C | BO | Brokermint alternative | `brokermint-alternative` | queued | Competitor facts only from their live pages, fetched now. No price comparison. Be fair about transaction management and CRM suite. |
| B05 | Anniversary Cap vs Calendar-Year Cap: Which Should Your Brokerage Use? | A | BO | anniversary year commission cap | `anniversary-cap-vs-calendar-year-cap` | queued | Closing date decides cap year. Worked example, agent joining in June. |
| B06 | How to Set Up a Graduated Commission Split (With a 3-Tier Example) | A | BO | graduated commission split real estate | `graduated-commission-split-example` | skipped | Skipped 2026-11-06: the tiered-splits refresh now carries the real feature and a three-tier crossing example, so a separate post would cannibalise it. Revisit only with a distinct setup angle. |
| B07 | Commission Disbursement Authorization (CDA): What It Is and What Goes on It | B | BK | commission disbursement authorization | `commission-disbursement-authorization` | queued | Define CDA, fields, how a per-deal breakdown and agent statement cover the same ground. SplitRE calculates and records; it does not move money. |
| B08 | Paperless Pipeline Alternative for Small Brokerages | C | BO | Paperless Pipeline alternative | `paperless-pipeline-alternative` | queued | Same rules as B04. Link `best-commission-split-software-for-brokerages`. |
| B09 | How to Switch From a Commission Spreadsheet to Software in One Afternoon | C | BO | switch from commission spreadsheet to software | `switch-from-commission-spreadsheet` | queued | Plans, agents CSV, cap opening balances, historical deals CSV, what to do with last year. Link `/docs/importing-agents-and-deals-via-csv`. |
| B10 | How to Split a Commission Between Two Brokerages (Company Caps Explained) | A | BO | split commission between two brokerages | `split-commission-between-two-brokerages` | queued | The Axen / DownTown style worked example from the product docs; which company is "us" for revenue. |
| B11 | Franchise Royalty Caps: Tracking a Fee That Stops at a Yearly Limit | A | BO | franchise royalty cap tracking | `franchise-royalty-cap-tracking` | queued | Labeled example only (a 6% royalty that stops at $3,000), never a claim about a real franchise. |
| B12 | Pay-as-You-Go Commission Software: When Paying Per Deal Beats a Monthly Plan | C | SB | commission software no monthly fee | `pay-as-you-go-commission-software` | hold | Needs price figures for the break-even. Prices are banned in unattended posts. Hand-write with the owner, or rewrite as structure-only. |
| B13 | What to Look for in Real Estate Commission Software: 12 Questions to Ask | C | BO | real estate commission software | `real-estate-commission-software-questions` | queued | Checklist that doubles as a comparison frame. No named competitor prices. |
| B14 | Real Estate Commission Split Examples: 8 Plans Worked Deal by Deal | A | BO | real estate commission split example | `commission-split-examples` | queued | Fixed, capped, tiered, desk fee, referral, co-agent, team, post-cap fee. Compute every figure. |
| B15 | Post-Cap Transaction Fees Explained (Including Fees That Step Down) | A | BO | post cap transaction fee real estate | `post-cap-transaction-fee` | queued | Flat post-cap fee and a step-down as a labeled example ($250 until $5,000 paid, then $75). |
| B16 | The Real Estate Brokerage Month-End Close: A Checklist for Bookkeepers | B | BK | real estate brokerage month end close | `brokerage-month-end-close-checklist` | queued | Confirm deals, export CSV, invoice and bill entries, reconcile payouts, review Agent Cap Report. Link `quickbooks-online-real-estate-brokerage`. |
| B17 | A Bookkeeper's Guide to Serving Several Small Brokerages | B | BK | bookkeeper for real estate brokerage | `bookkeeper-for-real-estate-brokerages` | queued | Repeatable per-client setup, export format, cap report as audit trail. |
| B18 | Real Estate Agent Commission Statement: What to Include and a Sample | B | BO | agent commission statement | `agent-commission-statement` | planned | Line items, the frozen breakdown, the Annual Earnings Summary PDF (informational, not a tax document). |

## Priority 2

| ID | Working title | Pillar | Reader | Primary keyword | Slug | Status | Notes |
|---|---|---|---|---|---|---|---|
| B19 | Transaction Fee in Real Estate: What Brokerages Charge and How to Set Yours | A | BO | real estate transaction fee brokerage | `real-estate-transaction-fee-brokerage` | planned | Flat versus percent of sale price; a fee that stops at a yearly amount. No "typical range" figures unless fetched and linked. |
| B20 | E&O Fee in a Commission Plan: Flat or Percentage? | A | BO | real estate E&O fee commission | `eo-fee-commission-plan` | planned | Percent-mode E&O is a percent of the agent's share after the split. Worked example. |
| B21 | How to Handle a Company Lead Split (and Keep It Off the Agent's Cap) | A | BO | company lead commission split | `company-lead-commission-split` | planned | Deal types that do not count toward the cap. |
| B22 | Rental and Lease Commissions: Charging a Flat Fee Instead of a Split | A | BO | rental commission flat fee brokerage | `rental-commission-flat-fee-brokerage` | planned | Deal type with a flat broker fee. |
| B23 | Mentor and Mentee Commission Splits: How to Structure and Track Them | A | BO | mentor mentee commission split real estate | `mentor-mentee-commission-split` | planned | Co-agent deal with GCI shares; Mentor/Training Fee. Link `co-listing-commission-split`. |
| B24 | Real Estate Team Commission Splits: Team Lead Overrides That Work | A | BO | real estate team commission split | `real-estate-team-commission-split` | planned | Lead override from member's share versus gross. Link `real-estate-team-shared-commission-cap`. |
| B25 | What Happens to an Agent's Cap When They Join Mid-Year | A | BO | mid year cap migration new agent | `agent-cap-when-joining-mid-year` | planned | Cap opening balance counts toward one cap year only. |
| B26 | How to Design a Commission Plan That Attracts Agents Without Losing Money | D | BO | real estate brokerage commission plan design | `commission-plan-design-brokerage` | planned | Model brokerage margin at 5, 10 and 20 agents with invented-but-labeled examples. |
| B27 | 1099-NEC for Real Estate Agents: What a Brokerage Needs to Track | B | BK | 1099 real estate agents brokerage | `1099-nec-real-estate-agents` | planned | General explanation. Verify current IRS form and threshold on irs.gov at write time or omit. CPA disclaimer. |
| B28 | Gross Commission Income vs Brokerage Net: How to Record Both in QuickBooks | B | BK | real estate brokerage gross commission income | `gross-commission-income-vs-brokerage-net` | planned | Invoice for GCI, bill for agent net, pass-through costs. CSV export, no live sync. Link B03. |
| B29 | Seven Commission Mistakes a Spreadsheet Lets You Make | C | BO | real estate commission calculation mistakes | `commission-calculation-mistakes` | planned | Each with a dollar example (cap crossing, double referral deduction, wrong cap year). |
| B30 | How Much Time Does Commission Admin Take a Small Brokerage? | C | BO | real estate brokerage admin time | `commission-admin-time-small-brokerage` | planned | Hours only, labeled as estimates, no plan cost comparison. |
| B31 | Plan Changes Without Rewriting History: Why Closed Deals Should Never Change | C | BO | edit commission plan past deals | `plan-changes-closed-deals-never-change` | planned | Confirmed deals keep their recorded numbers; trust and audit angle. |
| B32 | Referral Fees on a Real Estate Deal: Where They Come Off the Top | A | BO | real estate referral fee commission split | `referral-fee-commission-split` | planned | Referral comes off gross before the split; franchise fee base toggle. |
| B33 | How to Keep Agents Happy With Commission Transparency | D | BO | real estate agent commission transparency | `agent-commission-transparency` | planned | Statements by email, share link, year-end summary. |
| B34 | Commission Software Pricing Models: Per Seat, Per Transaction, Flat Tier, Pay Per Deal | C | BO | commission software pricing | `commission-software-pricing-models` | planned | Framework only. No figures, no named competitor prices. |

## Priority 3 (revisit with Search Console data)

| ID | Working title | Pillar | Reader | Primary keyword | Slug | Status | Notes |
|---|---|---|---|---|---|---|---|
| B35 | NAR Settlement One Year On: What Changed for Brokerage Commission Plans | D | BO | NAR settlement brokerage commission | `nar-settlement-brokerage-commission-plans` | planned | Verify against primary sources. Link `nar-settlement-commission-changes`. |
| B36 | How to Start a Real Estate Brokerage: Set Up Your Commission Plan First | D | BO | how to start a real estate brokerage | `start-real-estate-brokerage-commission-plan` | planned | Plan before agents; the sample default plan is placeholder numbers. |
| B37 | Real Estate Commission Split Calculator for Teams | A | BO | team commission split calculator | `team-commission-split-calculator` | planned | The free calculator omits teams on purpose; be honest and show the manual math. |
| B38 | Dual Agency Commission Split: How to Calculate and Record It | A | BO | dual agency commission split | `dual-agency-commission-split` | planned | Co-agent math covers in-house both-sides deals. |
| B39 | Using the Agent Cap Report as an Audit Trail | B | BK | agent cap report | `agent-cap-report-audit-trail` | planned | Cap report and its CSV. |
| B40 | Where Commission Management Fits in a Brokerage Software Stack | C | BO | real estate brokerage software | `brokerage-software-stack-commission-management` | planned | Not a transaction manager, not a CRM. |
