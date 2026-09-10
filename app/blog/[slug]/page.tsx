import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { HTMLAttributes } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import { getAllSlugs, getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

const DEFAULT_OG_IMAGE = "/screenshots/splitre-real-estate-brokerage-dashboard.png";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
    alternates: { canonical: `https://splitre.app/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      url: `https://splitre.app/blog/${slug}`,
      images: [{ url: DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

// Offsets the anchor jump so the sticky top nav doesn't cover the heading.
// Matches the docs page's same fix, needed now that posts are deep-linkable.
function Heading2({ children, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className="scroll-mt-24" {...props}>
      {children}
    </h2>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  // Hand-picked via frontmatter `related` rather than "most recent 2". With
  // only 5 posts, recency has nothing to do with topical relevance, and a
  // curated pairing (e.g. the two calculation-heavy posts, the two accounting
  // posts) is far more likely to keep a reader on a related topic than
  // whichever post happened to publish most recently.
  const otherPosts = getAllPosts().filter((p) => p.slug !== slug);
  const allPosts = post.related.length > 0
    ? post.related.map((s) => otherPosts.find((p) => p.slug === s)).filter((p): p is NonNullable<typeof p> => Boolean(p))
    : otherPosts.slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://splitre.app${DEFAULT_OG_IMAGE}`,
    datePublished: post.date,
    dateModified: post.date,
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
      "@id": `https://splitre.app/blog/${slug}`,
    },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium text-sm mb-8">
            ← Back to blog
          </Link>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
            <span>·</span>
            <span>
              By <Link href="/about" className="text-indigo-600 hover:underline">the SplitRE team</Link>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">{post.title}</h1>

          <div className="prose prose-lg prose-gray max-w-none prose-a:text-indigo-600 prose-a:font-semibold">
            <MDXRemote
              source={post.content}
              components={{ h2: Heading2 }}
              options={{ mdxOptions: { rehypePlugins: [rehypeSlug] } }}
            />
          </div>

          {/* Share */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-sm font-semibold text-gray-900 mb-4">Share this article</p>
            <div className="flex gap-3">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://splitre.app/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Share on X
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://splitre.app/blog/${post.slug}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Share on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {allPosts.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Keep reading</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {allPosts.map((related) => (
                <Link key={related.slug} href={`/blog/${related.slug}`} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md hover:border-indigo-200 transition-all group">
                  <div className="text-xs text-gray-500 mb-2">{related.readTime}</div>
                  <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">{related.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{related.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
