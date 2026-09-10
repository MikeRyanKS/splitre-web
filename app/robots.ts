import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // All crawlers: full access
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Google's AI Overview / SGE crawler
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // OpenAI / ChatGPT
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // Anthropic / Claude
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      // Perplexity
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Meta AI
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      // Common Crawl (used to train many LLMs)
      {
        userAgent: "CCBot",
        allow: "/",
      },
      // Google's AI-only allowlist flag, separate from plain Googlebot above.
      // Controls use in Gemini / AI Overviews training and grounding, not
      // classic search indexing.
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Apple Intelligence / Siri: the AI-only counterpart to Applebot.
      {
        userAgent: "Applebot-Extended",
        allow: "/",
      },
      // ByteDance (TikTok) crawler, used for LLM training.
      {
        userAgent: "Bytespider",
        allow: "/",
      },
      // Bing / Copilot
      {
        userAgent: "bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: "https://splitre.app/sitemap.xml",
    host: "https://splitre.app",
  };
}
