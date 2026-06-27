import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllSlugs, getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

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
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const allPosts = getAllPosts().filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    publisher: {
      "@type": "Organization",
      name: "SplitRE",
      url: "https://splitre.app",
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
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8 leading-tight">{post.title}</h1>

          <div className="prose prose-lg prose-gray max-w-none">
            <MDXRemote source={post.content} />
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
