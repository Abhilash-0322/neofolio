import { contact } from "@/lib/data";

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#why", label: "Why fintech / cloud" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur-sm">
      <div className="section-shell flex h-16 items-center justify-between gap-4">
        <a href="#" className="font-display text-lg font-semibold tracking-tight text-navy">
          {contact.name.split(" ")[0]}
          <span className="text-gold">.</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm font-medium text-navy/80 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-gold-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${contact.email}`}
          className="rounded-md border border-gold/40 bg-navy px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-cream transition hover:bg-navy-light sm:text-sm"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
