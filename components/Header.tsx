import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { navSections } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-grid items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="#"
          className="font-display text-lg font-semibold tracking-wide text-ink"
        >
          Abhilash
        </a>
        <nav className="hidden flex-1 justify-center gap-8 md:flex" aria-label="Primary">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-gold"
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
