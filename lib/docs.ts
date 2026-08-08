import fs from "fs";
import path from "path";
import matter from "gray-matter";
import GithubSlugger from "github-slugger";

export interface DocArticle {
  slug: string;
  title: string;
  category: string;
  order: number;
  excerpt: string;
  readTime: string;
  keywords: string[];
  content: string;
}

export const DOC_CATEGORY_ORDER = ["Getting Started", "Core How-Tos", "Concepts", "Billing & Account", "FAQ"];

// Used for both the /docs index section ids and the breadcrumb's category link, so they always match.
export function slugifyCategory(category: string): string {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const contentDir = path.join(process.cwd(), "content/docs");

function filenames(): string[] {
  return fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
}

export function getAllDocs(): Omit<DocArticle, "content">[] {
  const docs = filenames().map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title as string,
      category: data.category as string,
      order: (data.order as number) ?? 0,
      excerpt: data.excerpt as string,
      readTime: data.readTime as string,
      keywords: (data.keywords as string[]) || [],
    };
  });

  return docs.sort((a, b) => {
    const catDiff = DOC_CATEGORY_ORDER.indexOf(a.category) - DOC_CATEGORY_ORDER.indexOf(b.category);
    return catDiff !== 0 ? catDiff : a.order - b.order;
  });
}

export function getDocsByCategory(): { category: string; docs: Omit<DocArticle, "content">[] }[] {
  const docs = getAllDocs();
  return DOC_CATEGORY_ORDER.map((category) => ({
    category,
    docs: docs.filter((d) => d.category === category),
  })).filter((group) => group.docs.length > 0);
}

export function getDoc(slug: string): DocArticle | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    category: data.category as string,
    order: (data.order as number) ?? 0,
    excerpt: data.excerpt as string,
    readTime: data.readTime as string,
    keywords: (data.keywords as string[]) || [],
    content,
  };
}

export function getAllDocSlugs(): string[] {
  return filenames().map((f) => f.replace(/\.mdx$/, ""));
}

export interface DocHeading {
  text: string;
  slug: string;
}

// Matches the ids rehype-slug assigns to rendered ## headings, so sidebar anchors land correctly.
export function getDocHeadings(content: string): DocHeading[] {
  const slugger = new GithubSlugger();
  const headings: DocHeading[] = [];
  const regex = /^##\s+(.+)$/gm;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(content)) !== null) {
    const text = match[1].trim();
    headings.push({ text, slug: slugger.slug(text) });
  }
  return headings;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

// Schema.org Answer.text expects plain text, and it must match what
// MDXRemote actually renders visibly — so markdown link syntax is
// collapsed to its link text rather than kept as `[text](url)`.
function stripMarkdownLinks(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
}

// Extracts Q&A pairs from an MDX doc's ## headings for FAQPage JSON-LD.
// Only headings ending in "?" count as questions, so non-Q&A sections
// (e.g. "## Related") are skipped automatically.
export function getFaqEntries(content: string): FaqEntry[] {
  const sections = content.split(/^##\s+/m).slice(1);
  const entries: FaqEntry[] = [];
  for (const section of sections) {
    const newlineIndex = section.indexOf("\n");
    if (newlineIndex === -1) continue;
    const heading = section.slice(0, newlineIndex).trim();
    if (!heading.endsWith("?")) continue;
    const answer = stripMarkdownLinks(section.slice(newlineIndex + 1).trim()).replace(/\s+/g, " ");
    entries.push({ question: heading, answer });
  }
  return entries;
}

export interface NavArticle {
  slug: string;
  title: string;
  headings: DocHeading[];
}

export interface NavCategory {
  category: string;
  articles: NavArticle[];
}

export function getDocsNavTree(): NavCategory[] {
  return getDocsByCategory().map(({ category, docs }) => ({
    category,
    articles: docs.map((d) => {
      const full = getDoc(d.slug)!;
      return { slug: d.slug, title: d.title, headings: getDocHeadings(full.content) };
    }),
  }));
}
