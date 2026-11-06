import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  keywords: string[];
  related: string[];
  content: string;
}

const contentDir = path.join(process.cwd(), "content/blog");

export function getAllPosts(): Omit<BlogPost, "content">[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(contentDir, filename), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title as string,
      date: data.date as string,
      excerpt: data.excerpt as string,
      readTime: data.readTime as string,
      keywords: (data.keywords as string[]) || [],
      related: (data.related as string[]) || [],
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): BlogPost | null {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    readTime: data.readTime as string,
    keywords: (data.keywords as string[]) || [],
    related: (data.related as string[]) || [],
    content,
  };
}

/** Site-relative image paths referenced by a post, in document order. */
export function getPostImages(slug: string): string[] {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return [];
  const { content } = matter(fs.readFileSync(filePath, "utf-8"));
  const found: string[] = [];
  for (const match of content.matchAll(/!\[[^\]]*\]\(\s*(\/[^)\s]+)/g)) {
    if (!found.includes(match[1])) found.push(match[1]);
  }
  return found;
}

/** First screenshot-style (raster) image of a post, usable as an Open Graph image. SVG is not valid for OG. */
export function getPostOgImage(slug: string): string | null {
  return getPostImages(slug).find((src) => /\.(png|jpe?g|webp)$/i.test(src)) ?? null;
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(contentDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
