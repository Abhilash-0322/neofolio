import { ThemeToggle } from "@/components/ThemeToggle";
import { navSections } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-[rgb(var(--border))] bg-[rgb(var(--bg))]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-grid items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="#"
          className="font-display text-2xl leading-none tracking-wide text-[rgb(var(--text))]"
        >
          AM<span className="text-[rgb(var(--accent))]">.</span>
        </a>
        <nav className="hidden flex-1 justify-center gap-6 md:flex" aria-label="Primary">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-[rgb(var(--text-muted))] transition-colors hover:text-[rgb(var(--accent))]"
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
