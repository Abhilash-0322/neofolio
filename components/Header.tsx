import { navSections } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-studio-border/80 bg-studio-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-grid items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="group flex items-center gap-2 font-mono text-xs tracking-widest text-studio-text"
        >
          <span
            className="inline-block h-2 w-2 rounded-full bg-studio-accent shadow-[0_0_8px_rgba(110,231,214,0.6)]"
            aria-hidden
          />
          AM
          <span className="text-studio-muted transition-colors group-hover:text-studio-dim">
            / dev
          </span>
        </a>
        <nav className="hidden gap-8 md:flex" aria-label="Primary">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-studio-muted transition-colors hover:text-studio-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="h-px w-full spectrum-gradient opacity-40" />
    </header>
  );
}
