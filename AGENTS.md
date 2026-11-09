<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes. APIs, conventions, and file structure may all
differ from your training data. Read the relevant guide in
`node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# Writing copy

Any visitor-facing words (marketing pages, docs, blog, legal, calculator UI,
`public/llms.txt`) follow `CONTENT_STYLE.md`. The short version: broker-to-broker
voice, no hype words, and never an em dash or en dash (rewrite the sentence, do
not find-and-replace).
<!-- END:nextjs-agent-rules -->

# Marketing claims

Marketing sends cold email from a separate workspace and quotes this site. A claim
that changes here silently becomes a false claim there.

Any change to pricing, plan limits, the free-deals offer, or a user-facing feature
that marketing talks about **also requires updating `MARKETING_FACTS.md` in the same
PR**. If the change invalidates something marketing may already be sending (a price,
the offer wording, a feature), put it under "ACTION REQUIRED FOR MARKETING" and name
the exact claim. This applies even when the change lands in the private `splitre`
app repo: update the file here anyway.

Prices live only in `lib/pricing.ts`; never copy them into `MARKETING_FACTS.md` or
anywhere else. `npm run check:facts` enforces this and runs before every deploy.
