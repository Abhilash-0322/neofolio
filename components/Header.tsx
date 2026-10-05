import { navSections } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/40 bg-navy-950/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-grid items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="font-display text-xl tracking-[0.2em] text-gold"
          aria-label="Home"
        >
          AM
        </a>
        <nav className="hidden gap-8 md:flex" aria-label="Primary">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-sans text-[10px] font-medium uppercase tracking-[0.25em] text-cream-muted transition-colors hover:text-gold-light"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
