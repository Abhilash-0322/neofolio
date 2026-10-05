import { navSections } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-grid items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="text-sm font-medium tracking-tight text-neutral-900"
        >
          AM
        </a>
        <nav className="hidden gap-8 md:flex" aria-label="Primary">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-600 transition-colors hover:text-neutral-900"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
