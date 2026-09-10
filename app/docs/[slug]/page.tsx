import type { Metadata } from "next";
import type { AnchorHTMLAttributes, HTMLAttributes } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { getAllDocSlugs, getAllDocs, getDoc, getFaqEntries, slugifyCategory } from "@/lib/docs";
import Breadcrumb from "@/components/Breadcrumb";

export async function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.excerpt,
    keywords: doc.keywords,
    alternates: { canonical: `https://splitre.app/docs/${slug}` },
    openGraph: {
      type: "article",
      title: doc.title,
      description: doc.excerpt,
      url: `https://splitre.app/docs/${slug}`,
    },
  };
}

// Any link pointing into the live app opens in a new tab so readers never lose their place in the guide.
function DocLink({ href = "", children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isAppLink = href.startsWith("https://app.splitre.app");
  return (
    <a href={href} target={isAppLink ? "_blank" : undefined} rel={isAppLink ? "noopener noreferrer" : undefined} {...props}>
      {children}
    </a>
  );
}

// Offsets the anchor jump so the sticky top nav doesn't cover the heading.
function Heading2({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className="scroll-mt-24" {...props}>
      {children}
    </h2>
  );
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) notFound();

  const related = getAllDocs()
    .filter((d) => d.category === doc.category && d.slug !== slug)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    // Article, not TechArticle. Google's structured-data docs don't list
    // TechArticle as eligible for rich results, so it was earning nothing.
    "@type": "Article",
    headline: doc.title,
    description: doc.excerpt,
    author: {
      "@type": "Organization",
      name: "SplitRE",
      url: "https://splitre.app",
    },
    publisher: {
      "@type": "Organization",
      name: "SplitRE",
      url: "https://splitre.app",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://splitre.app/docs/${slug}`,
    },
    keywords: doc.keywords.join(", "),
  };

  // The FAQ doc's Q&As are the highest-leverage schema gap on the site.
  // FAQPage is eligible for rich results and /features + the calculator page
  // already have it. Entries are parsed straight from doc.content so the
  // schema can never drift from what MDXRemote actually renders below.
  const faqEntries = slug === "faq" ? getFaqEntries(doc.content) : [];
  const faqJsonLd =
    faqEntries.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqEntries.map((entry) => ({
            "@type": "Question",
            name: entry.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: entry.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: "Help Documentation", href: "/docs" },
              { label: doc.category, href: `/docs#${slugifyCategory(doc.category)}` },
              { label: doc.title },
            ]}
          />

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>{doc.category}</span>
            <span>·</span>
            <span>{doc.readTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">{doc.title}</h1>

          <div className="prose prose-lg prose-gray max-w-none prose-a:text-indigo-600 prose-a:font-semibold">
            <MDXRemote
              source={doc.content}
              components={{ a: DocLink, h2: Heading2 }}
              options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
            />
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related guides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {related.map((r) => (
                <Link key={r.slug} href={`/docs/${r.slug}`} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md hover:border-indigo-200 transition-all group">
                  <div className="text-xs text-gray-500 mb-2">{r.readTime}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
