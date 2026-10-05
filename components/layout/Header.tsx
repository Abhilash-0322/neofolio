import Link from "next/link";
import { navLinks, profile } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-[#0a0614]/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-display text-lg font-semibold tracking-tight">
          <span className="text-gradient">{profile.name.split(" ")[0]}</span>
          <span className="text-muted">.dev</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={`mailto:${profile.email}`}
          className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-sm font-medium text-white shadow-glow transition hover:opacity-90"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
