import { ThemeToggle } from "@/components/ThemeToggle";
import { navSections } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-arena-border bg-arena-bg backdrop-blur-md rgb-border-top [background-color:color-mix(in_srgb,var(--arena-bg)_88%,transparent)]">
      <div className="mx-auto flex max-w-arena items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="#"
          className="font-display text-sm font-bold tracking-[0.25em] text-arena-heading"
        >
          <span className="text-neon-cyan">A</span>
          <span className="text-neon-magenta">M</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-arena-muted transition-colors hover:text-neon-lime"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
