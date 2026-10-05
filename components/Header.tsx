import { navSections } from "@/data/content";
import { TitleBlock } from "@/components/TitleBlock";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-blueprint-line/35 bg-blueprint-deep/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-grid items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a
          href="#"
          className="font-mono text-xs font-medium tracking-widest text-blueprint-accent"
        >
          AM<span className="text-blueprint-line/50">_SYS</span>
        </a>
        <nav className="hidden gap-6 md:flex" aria-label="Primary">
          {navSections.map((item, i) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-mono text-[10px] uppercase tracking-[0.2em] text-blueprint-ink transition-colors hover:text-blueprint-chalk"
            >
              <span className="text-blueprint-line/50">{String(i + 1).padStart(2, "0")}</span>
              {" "}
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <TitleBlock compact />
        </div>
      </div>
    </header>
  );
}
