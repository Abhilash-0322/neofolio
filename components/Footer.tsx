import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t-2 border-[rgb(var(--border))]">
      <div className="mx-auto flex max-w-grid flex-col gap-2 px-6 py-8 text-xs text-[rgb(var(--text-muted))] md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="font-display text-sm uppercase tracking-[0.2em] text-[rgb(var(--accent))]">
          Dual theme · 5053
        </p>
      </div>
    </footer>
  );
}
