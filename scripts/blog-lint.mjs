#!/usr/bin/env node
/**
 * Quality gate for SplitRE blog posts. Exit code 1 if any file fails.
 *
 * Usage:
 *   node scripts/blog-lint.mjs --queue                 # every post in content/blog-queue
 *   node scripts/blog-lint.mjs content/blog-queue/a.mdx [more files]
 *   node scripts/blog-lint.mjs --style-only content/blog/old-post.mdx
 *       (refresh edits to an already-live post: voice, banned claims, links and
 *        prices only; no length, image or structure rules)
 *
 * The rules are the ones in docs/blog/CONTENT_STRATEGY.md sections 7 to 12.
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const ROOT = path.resolve(import.meta.dirname, "..");
const BLOG = path.join(ROOT, "content/blog");
const QUEUE = path.join(ROOT, "content/blog-queue");
const DOCS = path.join(ROOT, "content/docs");
const PUBLIC = path.join(ROOT, "public");

const STATIC_PAGES = new Set([
  "/", "/features", "/pricing", "/about", "/blog", "/docs", "/privacy", "/terms",
  "/refund-policy", "/real-estate-commission-split-calculator",
]);

const BANNED_WORDS = [
  "delve", "leverage", "robust", "seamless", "seamlessly", "streamline", "streamlined",
  "unlock", "elevate", "harness", "pivotal", "crucial", "vital", "paramount", "myriad",
  "plethora", "realm", "landscape", "tapestry", "testament", "game-changer", "game changer",
  "game-changing", "cutting-edge", "state-of-the-art", "holistic", "synergy", "bustling",
  "ever-evolving", "fast-paced", "powerful", "effortless", "effortlessly", "revolutionary",
  "supercharge", "delight",
];
const GIVEAWAYS = [
  /\bin today'?s\b/i, /\bit'?s not just\b/i, /\blet'?s dive\b/i, /\bin conclusion\b/i,
  /\bat its core\b/i, /\bwhen it comes to\b/i, /\bwhether you'?re\b/i,
  /\bnavigate the complexit/i,
];
const PARAGRAPH_OPENERS = /^(Moreover|Furthermore|Additionally)\b/;
const TECH = ["next.js", "react.js", "supabase", "postgres", "cloudflare", "vite", "wrangler"];
const FORBIDDEN = [
  [/14-day/i, "14-day (there is no trial clock)"],
  [/free trial/i, "free trial"],
  [/back[- ]office software/i, "back office software (SplitRE is commission management software)"],
  [/no per-agent/i, "no per-agent fees"],
  [/\bquickbooks (sync|integration)\b/i, "QuickBooks sync/integration claim (CSV export only)"],
  [/\b(integrates?|syncs?|connects?) (directly )?(with|to) quickbooks\b/i, "QuickBooks integration claim (CSV export only)"],
];
// SplitRE plan and credit-pack figures. Prices are never stated in posts.
const PRICE_FIGURES = /\$(35|75|199|95|179|429|348|780|2,?028)(\.00)?\b(?!,)/;

const lines = (s) => s.split(/\r?\n/);
const words = (s) => (s.match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) ?? []).length;

function parse(file) {
  const raw = fs.readFileSync(file, "utf8");
  const parsed = matter(raw);
  return { raw, data: parsed.data, body: parsed.content };
}

function bodyForCounting(body) {
  return body
    .split(/\r?\n/)
    .filter((l) => !/^\s*!\[/.test(l))
    .join("\n")
    .replace(/\]\([^)]*\)/g, "]")
    .replace(/^#{1,6}\s*/gm, "");
}

function publishedSlugs() {
  return new Set(fs.readdirSync(BLOG).filter((f) => f.endsWith(".mdx")).map((f) => f.replace(/\.mdx$/, "")));
}

function check(file, { styleOnly }) {
  const errs = [];
  const warns = [];
  const { raw, data: fm, body } = parse(file);
  const slug = path.basename(file, ".mdx");
  const inQueue = path.resolve(path.dirname(file)) === QUEUE;
  const published = publishedSlugs();

  // ---- voice and claims (always) -------------------------------------
  if (/—|–/.test(raw)) errs.push("contains an em dash or en dash");
  if (/&[mn]dash;|&#8212;|&#8211;/i.test(raw)) errs.push("contains a dash HTML entity");
  if (/\p{Extended_Pictographic}/u.test(raw)) errs.push("contains an emoji");
  const low = raw.toLowerCase();
  for (const w of BANNED_WORDS) {
    if (new RegExp(`(^|[^a-z])${w.replace(/[-]/g, "[- ]")}($|[^a-z])`, "i").test(low)) errs.push(`banned word: ${w}`);
  }
  for (const re of GIVEAWAYS) if (re.test(raw)) errs.push(`giveaway phrase: ${re.source}`);
  for (const para of body.split(/\n{2,}/)) {
    if (PARAGRAPH_OPENERS.test(para.trim())) errs.push(`paragraph opens with "${para.trim().split(/\s/)[0]}"`);
  }
  for (const t of TECH) if (new RegExp(`\\b${t.replace(".", "\\.")}\\b`, "i").test(low)) errs.push(`tech/vendor name: ${t}`);
  for (const [re, msg] of FORBIDDEN) if (re.test(raw)) errs.push(`forbidden claim: ${msg}`);
  if (PRICE_FIGURES.test(raw)) errs.push("looks like a SplitRE plan or credit-pack price; prices never appear in posts (link /pricing)");
  if (/\b(HIPAA|GDPR)\b/.test(raw)) warns.push("mentions HIPAA/GDPR; check it is accurate and relevant");
  if (/TODO|\[CITATION|lorem ipsum|XXX/i.test(raw)) errs.push("placeholder text left in post");

  // ---- links (always) -------------------------------------------------
  const linkRe = /(?<!!)\[[^\]]+\]\(([^)\s]+)\)/g;
  const allLinks = [...body.matchAll(linkRe)].map((m) => m[1]);
  const internal = allLinks.filter((l) => l.startsWith("/"));
  for (const l of internal) {
    const p = l.split("#")[0];
    if (STATIC_PAGES.has(p)) continue;
    if (p.startsWith("/blog/") && published.has(p.slice(6))) continue;
    if (p.startsWith("/docs/") && fs.existsSync(path.join(DOCS, `${p.slice(6)}.mdx`))) continue;
    errs.push(`broken or unpublished internal link: ${l}`);
  }
  if (allLinks.some((l) => /^https?:\/\/(www\.)?splitre\.app/.test(l))) warns.push("absolute splitre.app link; use root-relative paths");

  if (styleOnly) return { errs, warns };

  // ---- frontmatter ----------------------------------------------------
  const required = ["title", "date", "excerpt", "readTime", "keywords", "related"];
  if (inQueue) required.push("publishAt", "cluster", "reader", "primaryKeyword");
  for (const k of required) if (fm[k] === undefined || fm[k] === null || fm[k] === "" || (Array.isArray(fm[k]) && !fm[k].length)) errs.push(`frontmatter missing ${k}`);
  if (errs.some((e) => e.startsWith("frontmatter missing"))) return { errs, warns };

  if (fm.title.length > 65) errs.push(`title is ${fm.title.length} chars (max 65)`);
  const ex = fm.excerpt.length;
  if (ex < 120 || ex > 175) errs.push(`excerpt is ${ex} chars (want 140 to 160, hard limits 120 to 175)`);
  else if (ex < 140 || ex > 160) warns.push(`excerpt is ${ex} chars (aim for 140 to 160)`);
  if (!Array.isArray(fm.keywords) || fm.keywords.length < 3) errs.push("need at least 3 keywords");
  if (!/^[a-z0-9]+(-[a-z0-9]+){1,8}$/.test(slug)) errs.push(`slug "${slug}" should be kebab-case, 2 to 9 words`);
  if (published.has(slug) && inQueue) errs.push(`slug already published: ${slug}`);
  if (!Array.isArray(fm.related) || fm.related.length !== 2) errs.push("related must list exactly 2 slugs");
  else for (const r of fm.related) if (!published.has(r)) errs.push(`related slug is not a published post: ${r}`);
  const dateStr = String(fm.date);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) errs.push("date is not YYYY-MM-DD");
  if (inQueue) {
    const pa = String(fm.publishAt);
    if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(pa)) errs.push("publishAt must look like 2026-11-09T10:35");
    else if (pa.slice(0, 10) !== dateStr) errs.push("date must equal the publishAt day");
    if (!/^[ABCD]\. /.test(String(fm.cluster))) errs.push('cluster must start with "A. ", "B. ", "C. " or "D. "');
  } else if (new Date(dateStr) > new Date()) errs.push("date is in the future");
  const need = Math.ceil(words(bodyForCounting(body)) / 200);
  if (String(fm.readTime).split(" ")[0] !== String(need)) warns.push(`readTime says "${fm.readTime}", word count suggests ${need} min read`);

  // ---- length and structure ------------------------------------------
  const wc = words(bodyForCounting(body));
  if (wc < 650 || wc > 950) errs.push(`${wc} words (want 650 to 950)`);
  const paras = body.trim().split(/\n{2,}/);
  const firstIdx = paras.findIndex((p) => p.trim() && !p.trim().startsWith("#") && !p.trim().startsWith("!["));
  const opening = firstIdx >= 0 ? paras[firstIdx] : "";
  const ow = words(opening.replace(/\]\([^)]*\)/g, "]"));
  if (ow < 50 || ow > 70) errs.push(`opening paragraph is ${ow} words (want 50 to 70)`);
  if (/\]\([^)]*\)/.test(opening)) errs.push("opening paragraph contains a link");
  if (/\?\s*$/.test(opening.trim().split(/(?<=[.?!])\s/)[0])) errs.push("opening sentence is a question; open with the answer");
  const h2 = lines(body).filter((l) => /^## /.test(l));
  const h2Main = h2.filter((l) => !/^## common questions/i.test(l));
  if (h2Main.length < 3 || h2Main.length > 4) errs.push(`${h2Main.length} main H2 headings (want 3 or 4, plus "Common questions")`);
  if (!h2.some((l) => /^## common questions\s*$/i.test(l))) errs.push('missing "## Common questions" section');
  const h3Count = lines(body).filter((l) => /^### /.test(l)).length;
  if (h3Count < 2) errs.push("Common questions needs 2 or 3 H3 Q&As");
  if (/^# [^#]/m.test(body)) errs.push("body contains an H1; the page renders the title");
  if (!/\$\d/.test(body)) errs.push("no dollar figure; every post needs a worked example");
  if (!/\bexample\b/i.test(body)) warns.push('worked example is not labelled "Example"');
  const pk = String(fm.primaryKeyword ?? fm.keywords[0]).toLowerCase();
  const first100 = words(body) ? body.split(/\s+/).slice(0, 110).join(" ").toLowerCase() : "";
  if (!fm.title.toLowerCase().includes(pk.split(" ")[0])) warns.push("primary keyword's lead word is not in the title");
  if (!first100.includes(pk) && !pk.split(" ").every((w) => first100.includes(w))) warns.push("primary keyword is not (nearly) in the first 100 words");
  if (!h2.some((l) => pk.split(" ").filter((w) => w.length > 3).every((w) => l.toLowerCase().includes(w)))) warns.push("no H2 carries the primary keyword");

  // ---- links: counts and caps ----------------------------------------
  const signup = allLinks.filter((l) => l.includes("app.splitre.app/signup"));
  if (signup.length !== 1) errs.push(`${signup.length} signup links (want exactly 1, in the closing paragraph)`);
  else if (!/signup/.test(paras.filter((p) => p.trim()).slice(-1)[0])) errs.push("the signup link must be in the final paragraph");
  const inText = internal;
  if (inText.length < 3 || inText.length > 5) errs.push(`${inText.length} in-text internal links (want 3 to 5)`);
  if (new Set(inText).size !== inText.length) errs.push("the same internal target is linked twice");
  if (!inText.includes("/real-estate-commission-split-calculator")) errs.push("missing link to the calculator");
  if (!inText.some((l) => l.startsWith("/docs/"))) errs.push("missing link to a /docs/ page");
  if (!inText.some((l) => l.startsWith("/blog/"))) errs.push("missing link to a published blog post");
  if (inText.length > wc / 150 + 1) errs.push(`too many links for ${wc} words (max about one per 150 words)`);
  for (const l of lines(body)) {
    if (/^\s*!\[/.test(l)) continue;
    for (const s of l.split(/(?<=[.?!])\s+/)) if ((s.match(/\]\(/g) ?? []).length > 1) errs.push(`two links in one sentence: "${s.slice(0, 60)}..."`);
  }
  for (const w of ["click here", "read more", "here"]) if (new RegExp(`\\[${w}\\]\\(`, "i").test(body)) errs.push(`link text "${w}"`);

  // ---- images ---------------------------------------------------------
  const imgRe = /^!\[([^\]]*)\]\((\/[^\s)]+)(?:\s+"([^"]*)")?\)\s*$/gm;
  const imgs = [...body.matchAll(imgRe)].map((m) => ({ alt: m[1], src: m[2], title: m[3], index: m.index }));
  const anyImg = (body.match(/!\[/g) ?? []).length;
  if (anyImg !== imgs.length) errs.push("an image is not on its own line in the form ![alt](/path \"caption\")");
  if (imgs.length < 2) errs.push(`${imgs.length} images (want at least 2)`);
  if (imgs[0] && !imgs[0].src.endsWith(".svg")) errs.push("image one must be an authored SVG diagram");
  for (const im of imgs) {
    const file = path.join(PUBLIC, im.src);
    if (!fs.existsSync(file)) errs.push(`image file missing: public${im.src}`);
    if (!im.alt || im.alt.length > 125) errs.push(`alt text must be 1 to 125 chars: "${im.alt.slice(0, 40)}"`);
    if (/^(image|picture|photo|screenshot|graphic) (of|showing)/i.test(im.alt)) errs.push(`alt starts with a filler phrase: "${im.alt.slice(0, 40)}"`);
    if (!im.title) errs.push(`image has no caption (third argument): ${im.src}`);
    else if (im.title.trim().toLowerCase() === im.alt.trim().toLowerCase()) errs.push(`caption just repeats the alt: ${im.src}`);
    if (!(im.src.startsWith(`/blog/${slug}/`) || im.src.startsWith("/screenshots/"))) errs.push(`image must live in /blog/${slug}/ or be a /screenshots/ file: ${im.src}`);
    if (im.src.startsWith("/blog/")) {
      const base = path.basename(im.src).replace(/\.[a-z]+$/, "");
      const n = base.split("-").length;
      if (n < 3 || n > 6 || /^(image|img|figure|diagram|photo)-?\d*$/.test(base)) errs.push(`image filename should be 3 to 6 descriptive words: ${base}`);
    }
    if (im.src.endsWith(".svg") && fs.existsSync(file)) {
      const svg = fs.readFileSync(file, "utf8");
      if (!/role="img"/.test(svg) || !/aria-label="[^"]+"/.test(svg)) errs.push(`svg needs role="img" and an aria-label: ${im.src}`);
      if (!/viewBox="0 0 1200 630"/.test(svg)) warns.push(`svg viewBox is not 0 0 1200 630: ${im.src}`);
      if (/—|–/.test(svg)) errs.push(`dash in svg text: ${im.src}`);
      if (/=" [^"]*"|="[^"]* "/.test(svg.replace(/aria-label="[^"]*"/g, "").replace(/font-family="[^"]*"/g, ""))) warns.push(`svg has an attribute value with stray whitespace: ${im.src}`);
    }
  }
  if (imgs.length >= 2) {
    const afterOpening = body.indexOf(opening) + opening.length;
    const between = body.slice(afterOpening, imgs[0].index).trim();
    if (between.length > 0) errs.push("image one must come directly after the opening paragraph");
    const sep = body.slice(imgs[0].index, imgs[1].index);
    if (sep.length < 400) errs.push("images are too close together; put image two in the middle third");
    const last = imgs[imgs.length - 1];
    const tail = body.slice(last.index).split(/\n{2,}/).slice(1).join(" ");
    if (words(tail) < 120) errs.push("an image sits too close to the closing call to action");
  }
  return { errs, warns };
}

function main() {
  const args = process.argv.slice(2);
  const styleOnly = args.includes("--style-only");
  let files = args.filter((a) => !a.startsWith("--"));
  if (args.includes("--queue")) {
    files = fs.existsSync(QUEUE) ? fs.readdirSync(QUEUE).filter((f) => f.endsWith(".mdx")).map((f) => path.join(QUEUE, f)) : [];
  }
  if (!files.length) {
    console.error("Usage: node scripts/blog-lint.mjs --queue | [--style-only] <files...>");
    process.exit(2);
  }
  let failed = false;
  for (const f of files) {
    const { errs, warns } = check(path.resolve(f), { styleOnly });
    console.log(`${errs.length ? "FAIL" : "ok  "}  ${path.relative(ROOT, path.resolve(f))}`);
    for (const e of errs) console.log(`      error: ${e}`);
    for (const w of warns) console.log(`      warn:  ${w}`);
    failed ||= errs.length > 0;
  }
  process.exit(failed ? 1 : 0);
}

main();
