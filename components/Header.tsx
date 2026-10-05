import Link from "next/link";
import { profile } from "@/lib/data";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-rule bg-canvas/90 backdrop-blur-sm sticky top-0 z-50">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="text-sm font-medium tracking-wide text-ink hover:text-muted transition-colors"
        >
          {profile.name.split(" ")[0]} Maurya
        </Link>
        <nav className="flex gap-6" aria-label="Primary">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
