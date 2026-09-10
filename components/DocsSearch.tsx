"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { DocSearchEntry } from "@/lib/docs";

type Hit = {
  entry: DocSearchEntry;
  score: number;
  snippet: string;
  /** heading anchor to jump to, if the best match was a heading */
  anchor?: string;
};

// Builds a ~160-char window of body text around the earliest matching term,
// so the result shows *why* it matched, not just the article's opening line.
function makeSnippet(body: string, terms: string[]): string {
  const lower = body.toLowerCase();
  let hit = -1;
  let hitLen = 0;
  for (const t of terms) {
    const i = lower.indexOf(t);
    if (i !== -1 && (hit === -1 || i < hit)) {
      hit = i;
      hitLen = t.length;
    }
  }
  if (hit === -1) return body.slice(0, 160) + (body.length > 160 ? "…" : "");
  const start = Math.max(0, hit - 60);
  const end = Math.min(body.length, hit + hitLen + 110);
  return (start > 0 ? "…" : "") + body.slice(start, end).trim() + (end < body.length ? "…" : "");
}

function scoreEntry(e: DocSearchEntry, terms: string[]): { score: number; anchor?: string } {
  const title = e.title.toLowerCase();
  const headingText = e.headings.map((h) => h.text.toLowerCase());
  const keywords = e.keywords.map((k) => k.toLowerCase());
  const excerpt = e.excerpt.toLowerCase();
  const body = e.body.toLowerCase();

  let score = 0;
  let anchor: string | undefined;
  let termsMatched = 0;

  for (const t of terms) {
    let hitThisTerm = false;
    if (title.includes(t)) { score += 12; hitThisTerm = true; }
    const hIdx = headingText.findIndex((h) => h.includes(t));
    if (hIdx !== -1) {
      score += 8;
      hitThisTerm = true;
      if (!anchor) anchor = e.headings[hIdx].slug;
    }
    if (keywords.some((k) => k.includes(t))) { score += 6; hitThisTerm = true; }
    if (excerpt.includes(t)) { score += 4; hitThisTerm = true; }
    if (body.includes(t)) { score += 2; hitThisTerm = true; }
    if (hitThisTerm) termsMatched++;
  }

  if (termsMatched === 0) return { score: 0 };
  // Big bonus for covering more of the query: an article matching every word
  // of "co-agent deal export" should clearly beat one that only matched "deal".
  score += termsMatched === terms.length ? 20 : (termsMatched - 1) * 6;
  return { score, anchor };
}

export default function DocsSearch({ index }: { index: DocSearchEntry[] }) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const hits: Hit[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) return [];
    const terms = q.split(/\s+/).filter(Boolean);
    const scored = index
      .map((entry) => {
        const { score, anchor } = scoreEntry(entry, terms);
        return { entry, score, anchor, snippet: makeSnippet(entry.body, terms) };
      })
      .filter((h) => h.score > 0)
      .sort((a, b) => b.score - a.score);
    if (scored.length === 0) return [];
    // Drop the long tail of articles that only brushed a common word, but keep
    // anything genuinely relevant. Gentle ratio + low absolute floor.
    const cutoff = Math.max(5, scored[0].score * 0.2);
    return scored.filter((h) => h.score >= cutoff).slice(0, 6);
  }, [query, index]);

  useEffect(() => setActive(0), [query]);

  // Close the results panel on an outside click.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  function go(hit: Hit) {
    setOpen(false);
    setQuery("");
    router.push(hit.anchor ? `/docs/${hit.entry.slug}#${hit.anchor}` : `/docs/${hit.entry.slug}`);
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (!open || hits.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % hits.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + hits.length) % hits.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(hits[active]);
    } else if (e.key === "Escape") {
      setOpen(false);
    }
  }

  const showPanel = open && query.trim().length >= 2;

  return (
    <div ref={wrapRef} className="relative max-w-xl mx-auto">
      <div className="relative">
        <svg
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={onKeyDown}
          placeholder="Search the guides: caps, teams, QuickBooks export, co-agent deals"
          aria-label="Search help documentation"
          className="w-full rounded-2xl border border-gray-300 bg-white pl-12 pr-4 py-4 text-base text-gray-900 placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {showPanel && (
        <div className="absolute z-20 mt-2 w-full rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden text-left">
          {hits.length === 0 ? (
            <div className="px-5 py-6 text-sm text-gray-500">
              No guides match &ldquo;{query.trim()}&rdquo;. Try a different term, or browse the guides below.
            </div>
          ) : (
            <ul className="max-h-[26rem] overflow-y-auto divide-y divide-gray-100">
              {hits.map((hit, i) => (
                <li key={hit.entry.slug + (hit.anchor ?? "")}>
                  <Link
                    href={hit.anchor ? `/docs/${hit.entry.slug}#${hit.anchor}` : `/docs/${hit.entry.slug}`}
                    onClick={() => go(hit)}
                    onMouseEnter={() => setActive(i)}
                    className={`block px-5 py-3.5 ${i === active ? "bg-indigo-50" : "bg-white"}`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-900">{hit.entry.title}</span>
                      <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">{hit.entry.category}</span>
                    </div>
                    <p className="mt-1 text-xs text-gray-500 leading-relaxed line-clamp-2">{hit.snippet}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
