import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-grid flex-col gap-3 px-6 py-10 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="font-display uppercase tracking-[0.25em] text-gold/80">
          Precision in systems
        </p>
      </div>
    </footer>
  );
}
