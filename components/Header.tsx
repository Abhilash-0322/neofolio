import { navSections } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-forest-border bg-forest-deep/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-grid items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="font-serif text-xl font-semibold tracking-wide text-parchment"
        >
          A<span className="text-wine-glow">.</span>M
        </a>
        <nav className="hidden gap-8 md:flex" aria-label="Primary">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-medium uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-parchment"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
