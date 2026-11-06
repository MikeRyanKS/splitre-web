import fs from "fs";
import path from "path";
import { imageSize } from "image-size";

/**
 * Blog images.
 *
 * Posts only ever contain Markdown: `![alt](/blog/slug/file.svg "Caption")`.
 * This rehype plugin supplies what Markdown cannot:
 *
 * - intrinsic width/height read off the real file, so nothing shifts while
 *   the image loads
 * - loading hints: the first image in a post is the likely LCP element, so it
 *   loads eagerly at high priority and the rest are lazy
 * - a paragraph that contains nothing but an image becomes a <figure>, and the
 *   Markdown image title becomes its <figcaption>. The title is then removed
 *   from the <img> so the caption is not also a hover tooltip.
 */

const PUBLIC_DIR = path.join(process.cwd(), "public");

interface HastNode {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: HastNode[];
  value?: string;
}

const sizeCache = new Map<string, { width: number; height: number } | null>();

function intrinsicSize(src: string): { width: number; height: number } | null {
  const cached = sizeCache.get(src);
  if (cached !== undefined) return cached;

  let size: { width: number; height: number } | null = null;
  try {
    const file = path.join(PUBLIC_DIR, src.replace(/^\/+/, ""));
    if (fs.existsSync(file)) {
      const { width, height } = imageSize(fs.readFileSync(file));
      if (width && height) size = { width, height };
    }
  } catch {
    size = null;
  }
  sizeCache.set(src, size);
  return size;
}

function isImage(node: HastNode): boolean {
  return node.type === "element" && node.tagName === "img";
}

function isBlankText(node: HastNode): boolean {
  return node.type === "text" && !String(node.value ?? "").trim();
}

/** Sets SEO/performance attributes and returns the caption text, if any. */
function decorateImage(img: HastNode, index: number): string {
  const props = (img.properties ??= {});

  const src = typeof props.src === "string" ? props.src : "";
  if (src.startsWith("/")) {
    const size = intrinsicSize(src);
    if (size) {
      props.width = size.width;
      props.height = size.height;
    }
  }

  props.decoding = "async";
  if (index === 0) {
    props.loading = "eager";
    props.fetchPriority = "high";
  } else {
    props.loading = "lazy";
  }

  const title = typeof props.title === "string" ? props.title.trim() : "";
  if (title) delete props.title;
  return title;
}

export function rehypeBlogFigures() {
  return (tree: unknown) => {
    let seen = 0;

    const walk = (node: HastNode): void => {
      const children = node.children;
      if (!children) return;

      for (let i = 0; i < children.length; i += 1) {
        const child = children[i];

        if (child.type === "element" && child.tagName === "p") {
          const content = (child.children ?? []).filter((c) => !isBlankText(c));
          if (content.length === 1 && isImage(content[0])) {
            const img = content[0];
            const caption = decorateImage(img, seen);
            seen += 1;
            children[i] = {
              type: "element",
              tagName: "figure",
              properties: { className: ["blog-figure"] },
              children: caption
                ? [
                    img,
                    {
                      type: "element",
                      tagName: "figcaption",
                      properties: {},
                      children: [{ type: "text", value: caption }],
                    },
                  ]
                : [img],
            };
            continue;
          }
        }

        if (isImage(child)) {
          decorateImage(child, seen);
          seen += 1;
        }
        walk(child);
      }
    };

    walk(tree as HastNode);
  };
}
