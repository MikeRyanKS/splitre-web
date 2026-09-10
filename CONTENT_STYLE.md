# SplitRE website content style guide

This governs every word a visitor reads on splitre.app: the marketing pages
(`app/**`), the help docs (`content/docs/*.mdx`), the blog (`content/blog/*.mdx`),
the legal pages (`app/{terms,privacy,refund-policy}` and `legal/*.md`), the
calculator UI, and `public/llms.txt`. If a human will read it, it follows these
rules.

## Voice

Write like an experienced broker explaining something to another broker over
coffee. Plain, direct, a little dry. We know this job is tedious and we are not
going to pretend commission accounting is exciting.

- **Short sentences.** One idea each. If a sentence has two clauses joined by a
  dash, it is usually two sentences.
- **Concrete over abstract.** "The brokerage stops collecting a split once it has
  collected $18,000 from that agent this year" beats "cap logic is applied
  automatically."
- **Second person.** "You" is the broker. "Your agents", "your bookkeeper",
  "your card."
- **No hype words.** Avoid "seamless", "effortless", "powerful", "revolutionary",
  "game-changing", "unlock", "supercharge", "delight". State what the thing does
  and let the reader decide it is good.
- **Contractions are fine** everywhere except the legal pages, which stay formal.
- **Numbers do the persuading.** A worked example with real dollar figures is
  worth more than an adjective.

## Never use em dashes or en dashes

No `—` (em dash), no `–` (en dash as punctuation), and no `&mdash;` / `&ndash;`
HTML entities. They are the single clearest tell that a machine wrote the copy,
and the user has asked repeatedly for them to be gone.

**Do not find-and-replace.** Rewrite the sentence so it does not want a dash:

| Instead of a dash for... | Use |
|---|---|
| Joining two independent clauses | A period. Two sentences. |
| A pause before a summary or list | A colon |
| An aside or clarification | Parentheses, or commas, or a separate sentence |
| "from X to Y" ranges (`$20,000–$50,000`, `3–50 agents`) | The word "to": `$20,000 to $50,000`, `3 to 50 agents` |
| Attribution before a quote | A colon, or restructure |

A hyphen `-` is correct in compound modifiers (`co-listing`, `year-end`,
`QuickBooks-ready`) and is a tolerable last resort for a genuine mid-sentence
break, but restructuring is always better.

The one exception: a literal `"—"` used as a "no value" placeholder inside a
data table cell is fine, because it is data, not prose.

## Never name the tech stack

Visitors do not care that the site is Next.js or that the app is React and
Supabase. Describe capabilities and outcomes, never implementation. "Your data
is encrypted and isolated per brokerage" is fine; naming the database is not.

## Product facts to keep straight

- Pricing is **tiered by active agent count**, one flat price per tier. It is
  **not** per-seat and **not** a meter that adds a charge for every agent. Never
  write "no per-agent fees" (the tiers are literally by agent count).
- We do not call SplitRE "back office software." It is **commission management
  software**. "Back office" implies the full traditional brokerage suite, which
  this is not.
- **Teams / shared caps** and **co-agent deals** ship on every plan. They are
  not add-ons and not gated to higher tiers.
- Free trial is **14 days**, no card required.
- The money-back guarantee is **7 days**.

## Before you ship copy

1. Search the file for `—`, `–`, `&mdash;`, `&ndash;`. There should be zero.
2. Read it out loud. If it sounds like a press release, rewrite it.
3. Check any dollar figures and percentages against the app's actual behavior.
