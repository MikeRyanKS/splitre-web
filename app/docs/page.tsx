import type { Metadata } from "next";
import Link from "next/link";
import { getDocsByCategory, slugifyCategory } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Help Documentation",
  description: "Step-by-step guides for setting up your brokerage, managing agents and deals, and getting the most out of SplitRE.",
  alternates: { canonical: "https://splitre.app/docs" },
};

export default function DocsPage() {
  const groups = getDocsByCategory();

  return (
    <>
      <section className="bg-white py-24 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Help Documentation</h1>
          <p className="text-xl text-gray-600">Step-by-step guides for setting up your brokerage and getting the most out of SplitRE.</p>
        </div>
      </section>

      <section className="pb-24 px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          {groups.map((group) => (
            <div key={group.category}>
              <h2 id={slugifyCategory(group.category)} className="text-2xl font-bold text-gray-900 mb-6 scroll-mt-24">
                {group.category}
              </h2>
              <div className="grid gap-6">
                {group.docs.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className="block bg-white border border-gray-200 rounded-2xl p-5 md:p-8 hover:shadow-md hover:border-indigo-200 transition-all group"
                  >
                    <div className="text-sm text-gray-500 mb-3">{doc.readTime}</div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors mb-3">{doc.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{doc.excerpt}</p>
                    <div className="mt-4 text-indigo-600 font-semibold text-sm">Read guide →</div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
