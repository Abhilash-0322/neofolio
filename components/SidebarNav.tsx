import { links, navSections, site } from "@/data/content";

export function SidebarNav() {
  return (
    <aside
      className="flex min-h-screen flex-col border-b border-nav-border bg-nav text-neutral-200 lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-[min(100%,17.5rem)] lg:border-b-0 lg:border-r"
      aria-label="Site navigation"
    >
      <div className="flex flex-1 flex-col px-6 py-8 lg:px-7 lg:py-10">
        <a href="#overview" className="group block">
          <p className="font-display text-2xl tracking-tight text-white transition-colors group-hover:text-nav-accent">
            {site.name.split(" ")[0]}
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-nav-muted">
            {site.name.split(" ").slice(1).join(" ")}
          </p>
        </a>

        <p className="mt-6 text-sm leading-relaxed text-nav-muted">
          {site.title}
        </p>

        <nav className="mt-10 flex flex-1 flex-col gap-1" aria-label="Primary">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md border-l-2 border-transparent py-2 pl-3 text-sm text-nav-muted transition-colors hover:border-nav-accent hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-8 space-y-3 border-t border-nav-border pt-6 text-sm">
          <a
            href={`mailto:${site.email}`}
            className="block text-nav-muted transition-colors hover:text-nav-accent"
          >
            Email
          </a>
          <a
            href={site.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-nav-muted transition-colors hover:text-nav-accent"
          >
            Resume (PDF)
          </a>
          <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider text-nav-muted hover:text-white"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider text-nav-muted hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider text-nav-muted hover:text-white"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
