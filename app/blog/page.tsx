import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Real estate brokerage accounting, commission calculations, QuickBooks Online guides, and best practices for independent brokerages.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="bg-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">The SplitRE Blog</h1>
          <p className="text-xl text-gray-600">Commission calculations, QuickBooks guides, and brokerage back-office tips from the team at SplitRE.</p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto grid gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-md hover:border-indigo-200 transition-all group">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-3">{post.title}</h2>
              <p className="text-gray-600 leading-relaxed">{post.excerpt}</p>
              <div className="mt-4 text-indigo-600 font-semibold text-sm">Read more →</div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
