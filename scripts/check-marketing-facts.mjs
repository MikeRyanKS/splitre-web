// Drift guard for the claims marketing is allowed to make. Run: npm run check:facts
//
// Everything is derived from lib/pricing.ts so no number is copied into a second
// place. The script only fails on things that have actually drifted before:
//   - MARKETING_FACTS.md missing, too long, or repeating prices
//   - a copy surface saying "$29/month" (an annual-billing figure) with no
//     "annual" next to it
//   - "14-day trial" / "free trial" wording coming back
//   - "save up to N%" where N is not what the pricing data supports
//   - llms.txt or SEO.md quoting a price pricing.ts does not have
// `--max-age=30` additionally fails when "Last verified" is older than 30 days
// (the weekly freshness workflow uses it).
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { plans, paygPacks } from "../lib/pricing.ts";

const root = join(fileURLToPath(import.meta.url), "..", "..");
const errors = [];
const fail = (where, msg) => errors.push(`${where}: ${msg}`);
const read = (p) => readFileSync(join(root, p), "utf8");

// ---- derived facts --------------------------------------------------------
const pct = (p) => (p.annualSavings / (p.monthly * 12)) * 100;
const maxPct = Math.round(Math.max(...plans.map(pct)));
const annualFigures = plans.map((p) => p.annualPerMonth);

// pricing.ts must agree with itself, or every surface built from it is wrong.
for (const p of plans) {
  if (p.monthly * 12 - p.annual !== p.annualSavings) fail("lib/pricing.ts", `${p.name}: annualSavings != monthly*12 - annual`);
  if (Math.round(p.annual / 12) !== p.annualPerMonth) fail("lib/pricing.ts", `${p.name}: annualPerMonth != annual/12`);
  if (p.annual >= p.monthly * 12) fail("lib/pricing.ts", `${p.name}: annual billing saves nothing, so "save up to N%" is false`);
}
for (const k of paygPacks) {
  if (Math.abs(k.price / k.credits - k.perCredit) > 0.01) fail("lib/pricing.ts", `${k.credits}-credit pack: perCredit != price/credits`);
}

// ---- files to scan --------------------------------------------------------
function walk(dir, out = []) {
  for (const name of readdirSync(join(root, dir))) {
    const rel = join(dir, name);
    const st = statSync(join(root, rel));
    if (st.isDirectory()) walk(rel, out);
    else if (/\.(tsx?|mdx?|txt)$/.test(name)) out.push(rel);
  }
  return out;
}
// Blog posts are checked for banned claims too, but not for price shape (they
// quote competitor and worked-example figures).
const copy = [...walk("app"), ...walk("components"), ...walk("content/docs"), ...walk("legal"), "public/llms.txt", "SEO.md"].filter((f) => existsSync(join(root, f)));
const blog = existsSync(join(root, "content/blog")) ? walk("content/blog") : [];

// ---- MARKETING_FACTS.md ---------------------------------------------------
const FACTS = "MARKETING_FACTS.md";
if (!existsSync(join(root, FACTS))) {
  fail(FACTS, "missing. It is the single source of truth for marketing claims.");
} else {
  const facts = read(FACTS);
  const lines = facts.split("\n");
  if (lines.length > 100) fail(FACTS, `${lines.length} lines; keep it under 100 (longer belongs in HOW_IT_WORKS)`);
  for (const h of ["## ACTION REQUIRED FOR MARKETING", "## The offer", "## Pricing", "## Claims marketing may make", "## Do NOT claim"]) {
    if (!facts.includes(h)) fail(FACTS, `missing section "${h}"`);
  }
  const m = facts.match(/^Last verified: (\d{4}-\d{2}-\d{2})/m);
  if (!m) fail(FACTS, 'needs a "Last verified: YYYY-MM-DD ..." line');
  else {
    const age = (Date.now() - Date.parse(m[1])) / 864e5;
    const maxAge = process.argv.find((a) => a.startsWith("--max-age="))?.split("=")[1];
    if (Date.parse(m[1]) > Date.now() + 864e5) fail(FACTS, "Last verified is in the future");
    if (maxAge && age > Number(maxAge)) fail(FACTS, `Last verified ${m[1]} is ${Math.floor(age)} days old (limit ${maxAge}). Re-check the live site and copy, then update the date.`);
  }
  // No copied prices: outside quoted wording and the ACTION REQUIRED section,
  // a dollar figure means someone pasted a number that pricing.ts already owns.
  let inAction = false;
  lines.forEach((line, i) => {
    if (line.startsWith("## ")) inAction = line.startsWith("## ACTION REQUIRED");
    if (inAction) return;
    const bare = line.replace(/"[^"]*"/g, "").replace(/`[^`]*`/g, "");
    if (/\$\d/.test(bare)) fail(`${FACTS}:${i + 1}`, "dollar figure repeated here; reference lib/pricing.ts instead");
  });
}

// ---- banned claims + unqualified annual prices ------------------------------
const bannedTrial = /(?<!no )(?<!Is there a )(14[- ]day (free )?trial|free trial|trial period)/i;
const dollars = annualFigures.map((n) => `\\$${n}`).join("|");
const unqualified = new RegExp(`(${dollars})(\\s?\\/\\s?mo\\b|\\s?\\/\\s?month|\\s(a|per)\\s(month|mo)\\b)`, "g");
const up = /save up to (\d+)%|up to (\d+)% (less|off|cheaper)/gi;

for (const f of [...copy, ...blog]) {
  const lines = read(f).split("\n");
  lines.forEach((line, i) => {
    const where = `${f}:${i + 1}`;
    if (bannedTrial.test(line)) fail(where, 'trial wording. There is no trial; use the free-deals wording from MARKETING_FACTS.md');
    for (const m of line.matchAll(up)) {
      const n = Number(m[1] ?? m[2]);
      if (n !== maxPct) fail(where, `says "up to ${n}%" but lib/pricing.ts supports ${maxPct}%`);
    }
  });
}
for (const f of copy) {
  if (f.startsWith("content/blog")) continue;
  const lines = read(f).split("\n");
  lines.forEach((line, i) => {
    for (const m of line.matchAll(unqualified)) {
      const window = [line.slice(m.index), lines[i + 1] ?? "", lines[i + 2] ?? ""].join(" ").slice(0, 160);
      if (!/annual/i.test(window)) fail(`${f}:${i + 1}`, `"${m[0]}" is an annual-billing price with no "annual" next to it; month-to-month is higher`);
    }
  });
}

// ---- machine-readable surfaces must quote real prices ----------------------
const real = new Set([...plans.flatMap((p) => [p.monthly, p.annual, p.annualPerMonth]), ...paygPacks.flatMap((k) => [k.price])]);
const realText = (n) => n.toLocaleString("en-US");
for (const f of ["public/llms.txt", "SEO.md"]) {
  if (!existsSync(join(root, f))) continue;
  const txt = read(f);
  for (const p of plans) {
    for (const n of [p.monthly, p.annual]) {
      if (f === "public/llms.txt" && !txt.includes(`$${realText(n)}`)) fail(f, `does not mention ${p.name} price $${realText(n)} from lib/pricing.ts`);
    }
  }
  for (const k of paygPacks) {
    if (f === "public/llms.txt" && !txt.includes(`$${realText(k.price)}`)) fail(f, `does not mention the ${k.credits}-credit pack at $${realText(k.price)}`);
  }
  // Only a price attached to a plan name; the files also quote ROI and competitor figures.
  txt.split("\n").forEach((line, i) => {
    for (const m of line.matchAll(/\b(Boutique|Independent|Brokerage)\b[^$\n]{0,30}\$(\d[\d,]*)\/(mo|yr)\b/g)) {
      const n = Number(m[2].replace(/,/g, ""));
      if (!real.has(n)) fail(`${f}:${i + 1}`, `quotes "${m[0]}", which is not a price in lib/pricing.ts`);
    }
  });}

if (errors.length) {
  console.error(`check:facts found ${errors.length} problem${errors.length > 1 ? "s" : ""}:\n`);
  for (const e of errors) console.error(`  ${relative(root, join(root, e.split(":")[0]))}${e.slice(e.split(":")[0].length)}`);
  console.error("\nFix the copy, or if a fact really changed, update MARKETING_FACTS.md in the same PR.");
  process.exit(1);
}
console.log(`check:facts ok (${copy.length} copy files, ${blog.length} blog posts, max annual saving ${maxPct}%)`);
