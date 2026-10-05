import { navSections } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm">
      <div className="sketch-divider" aria-hidden="true" />
      <div className="mx-auto flex max-w-grid items-center justify-between px-6 py-4 md:px-10">
        <a href="#" className="sketch-pill font-sketch text-lg text-ink">
          AM ✎
        </a>
        <nav className="hidden gap-6 md:flex" aria-label="Primary">
          {navSections.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="sketch-nav-link">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="sketch-divider opacity-60" aria-hidden="true" />
    </header>
  );
}
