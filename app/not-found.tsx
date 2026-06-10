import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center py-40 px-4 text-center">
      <div className="text-8xl font-extrabold text-indigo-100 mb-4">404</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Page not found</h1>
      <p className="text-gray-600 max-w-md mb-8">
        This page doesn&apos;t exist or may have moved. Try heading back to the homepage or checking our blog.
      </p>
      <div className="flex gap-4">
        <Link href="/" className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-indigo-700 transition-colors">
          Go home
        </Link>
        <Link href="/blog" className="border border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-gray-400 transition-colors">
          Read the blog
        </Link>
      </div>
    </section>
  );
}
