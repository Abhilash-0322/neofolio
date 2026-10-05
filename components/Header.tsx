import { ThemeToggle } from "@/components/ThemeToggle";
import { navSections } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-grid items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="text-sm font-medium tracking-tight text-ink"
        >
          AM
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden gap-8 md:flex" aria-label="Primary">
            {navSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink-muted transition-colors hover:text-ink"
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
