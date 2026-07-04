"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavCategory } from "@/lib/docs";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-3.5 h-3.5 shrink-0 transition-transform duration-150 ${open ? "rotate-90" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}

function SidebarTree({ tree, activeSlug, onNavigate }: { tree: NavCategory[]; activeSlug: string | null; onNavigate?: () => void }) {
  const activeCategory = useMemo(
    () => tree.find((c) => c.articles.some((a) => a.slug === activeSlug))?.category ?? null,
    [tree, activeSlug]
  );

  const [openCategories, setOpenCategories] = useState<Set<string>>(() => new Set(tree.map((c) => c.category)));
  const [openArticles, setOpenArticles] = useState<Set<string>>(() => new Set(activeSlug ? [activeSlug] : []));

  function toggleCategory(category: string) {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });
  }

  function toggleArticle(slug: string) {
    setOpenArticles((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  return (
    <nav className="text-sm">
      {tree.map((cat) => {
        const categoryOpen = openCategories.has(cat.category);
        return (
          <div key={cat.category} className="mb-1">
            <button
              onClick={() => toggleCategory(cat.category)}
              className={`w-full flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wide transition-colors ${
                cat.category === activeCategory ? "text-indigo-600" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              <Chevron open={categoryOpen} />
              {cat.category}
            </button>

            {categoryOpen && (
              <ul className="mt-0.5 ml-1 space-y-0.5">
                {cat.articles.map((article) => {
                  const isActive = article.slug === activeSlug;
                  const articleOpen = openArticles.has(article.slug);
                  const hasHeadings = article.headings.length > 0;

                  return (
                    <li key={article.slug}>
                      <div className="flex items-center gap-1">
                        <Link
                          href={`/docs/${article.slug}`}
                          onClick={onNavigate}
                          className={`flex-1 min-w-0 px-2 py-1.5 rounded-md truncate transition-colors ${
                            isActive ? "bg-indigo-50 text-indigo-700 font-medium" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                          }`}
                        >
                          {article.title}
                        </Link>
                        {hasHeadings && (
                          <button
                            onClick={() => toggleArticle(article.slug)}
                            aria-label={`Toggle sections for ${article.title}`}
                            className="p-1 text-gray-300 hover:text-gray-500 shrink-0"
                          >
                            <Chevron open={articleOpen} />
                          </button>
                        )}
                      </div>

                      {hasHeadings && articleOpen && (
                        <ul className="ml-4 mt-0.5 mb-1 space-y-0.5 border-l border-gray-100 pl-3">
                          {article.headings.map((h) => (
                            <li key={h.slug}>
                              <Link
                                href={`/docs/${article.slug}#${h.slug}`}
                                onClick={onNavigate}
                                className="block px-2 py-1 rounded-md text-xs text-gray-500 hover:text-indigo-600 hover:bg-gray-50 truncate"
                              >
                                {h.text}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default function DocsSidebar({ tree }: { tree: NavCategory[] }) {
  const pathname = usePathname();
  const activeSlug = pathname?.startsWith("/docs/") ? pathname.replace("/docs/", "") : null;
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden sticky top-16 z-20 bg-white border-b border-gray-100 px-4 py-2.5">
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="flex items-center gap-2 text-sm font-medium text-gray-700"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Docs menu
        </button>
        {mobileOpen && (
          <div className="mt-3 pb-2 max-h-[60vh] overflow-y-auto">
            <SidebarTree tree={tree} activeSlug={activeSlug} onNavigate={() => setMobileOpen(false)} />
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <aside className="hidden lg:block w-64 shrink-0 border-r border-gray-100 px-3 py-8 sticky top-16 self-start max-h-[calc(100vh-4rem)] overflow-y-auto">
        <SidebarTree tree={tree} activeSlug={activeSlug} />
      </aside>
    </>
  );
}
