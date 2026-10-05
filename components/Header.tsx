import { navSections, site } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-panel/20 bg-slate-ink text-slate-parchment">
      <div className="mx-auto flex max-w-brief items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#"
          className="flex flex-col gap-0.5 border-l-2 border-trust-gold pl-3"
        >
          <span className="font-serif text-sm font-medium tracking-tight">
            {site.name}
          </span>
          <span className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
            Professional record
          </span>
        </a>
        <nav className="hidden gap-6 lg:flex" aria-label="Primary">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
