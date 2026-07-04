import DocsSidebar from "@/components/DocsSidebar";
import { getDocsNavTree } from "@/lib/docs";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const tree = getDocsNavTree();

  return (
    <div className="max-w-7xl mx-auto lg:flex">
      <DocsSidebar tree={tree} />
      <div className="flex-1 min-w-0">{children}</div>
    </div>
  );
}
