import { navSections } from "@/data/content";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-sol-border bg-sol-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-grid items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight text-sol-emphasis"
        >
          <span className="text-sol-blue">~</span>/abhilash
        </a>
        <div className="flex items-center gap-4 md:gap-8">
          <nav className="hidden gap-6 md:flex" aria-label="Primary">
            {navSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-sol-muted transition-colors hover:text-sol-blue"
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
