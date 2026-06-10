"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-indigo-600">SplitRE</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/features" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Features</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Pricing</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Blog</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 font-medium text-sm">About</Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="https://app.splitre.com/login" className="text-gray-600 hover:text-gray-900 font-medium text-sm">Sign in</Link>
            <Link href="https://app.splitre.com/signup" className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors">Start free trial</Link>
          </div>

          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-2">
            <Link href="/features" className="block py-2 text-gray-700 font-medium">Features</Link>
            <Link href="/pricing" className="block py-2 text-gray-700 font-medium">Pricing</Link>
            <Link href="/blog" className="block py-2 text-gray-700 font-medium">Blog</Link>
            <Link href="/about" className="block py-2 text-gray-700 font-medium">About</Link>
            <div className="pt-2 flex flex-col gap-2">
              <Link href="https://app.splitre.com/login" className="block py-2 text-gray-700 font-medium">Sign in</Link>
              <Link href="https://app.splitre.com/signup" className="bg-indigo-600 text-white text-sm font-semibold px-4 py-2 rounded-lg text-center">Start free trial</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
