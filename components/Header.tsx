import { ThemeToggle } from "@/components/ThemeToggle";
import { navSections } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-rule bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-editorial items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="#"
          className="font-display text-lg font-medium tracking-tight text-ink"
        >
          Abhilash Maurya
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden gap-6 md:flex" aria-label="Primary">
            {navSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted transition-colors hover:text-accent"
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
