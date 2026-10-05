import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-sol-border bg-sol-bg-alt/50">
      <div className="mx-auto flex max-w-grid flex-col gap-2 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.15em] text-sol-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="text-sol-cyan">Solarized · Backend & AI Systems</p>
      </div>
    </footer>
  );
}
