import { links, site } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-readme-border bg-readme-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-readme items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a
          href="#"
          className="font-mono text-sm text-readme-heading hover:text-readme-link"
        >
          <span className="text-readme-muted">{site.repoSlug}</span>
          <span className="text-readme-muted"> / </span>
          <span>README</span>
        </a>
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="readme-badge readme-link border-readme-border no-underline hover:border-readme-link"
        >
          View on GitHub
        </a>
      </div>
    </header>
  );
}
