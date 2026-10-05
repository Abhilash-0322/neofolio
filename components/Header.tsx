import { navSections, site } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-[60] border-b border-noir-rule/30 bg-noir-bar text-noir-bar-text">
      <div className="mx-auto flex max-w-brief items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="#"
          className="flex flex-col gap-0.5 border-l-2 border-noir-accent pl-3"
        >
          <span className="font-serif text-sm font-medium tracking-tight">
            {site.name}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-noir-bar-text/70">
            Case file · Backend & AI
          </span>
        </a>
        <div className="flex items-center gap-4">
          <nav className="hidden gap-5 lg:flex" aria-label="Primary">
            {navSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-noir-bar-text/80 transition-colors hover:text-noir-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
