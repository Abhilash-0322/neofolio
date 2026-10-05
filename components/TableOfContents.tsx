import { navSections } from "@/data/content";

export function TableOfContents() {
  return (
    <nav
      className="mt-10 rounded-md border border-readme-border bg-readme-bg/60 p-4 md:p-5"
      aria-label="Table of contents"
    >
      <p className="font-mono text-sm text-readme-heading">
        <span className="text-readme-muted">##</span> Table of contents
      </p>
      <ul className="mt-3 space-y-1.5 font-mono text-sm">
        {navSections.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className="readme-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
