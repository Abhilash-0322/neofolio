import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-forest-border">
      <div className="mx-auto flex max-w-grid flex-col gap-3 px-6 py-10 text-sm text-ink-faint md:flex-row md:items-center md:justify-between md:px-10">
        <p className="font-serif text-parchment/80">
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-xs uppercase tracking-[0.25em] text-wine-light/80">
          Scholar of systems &amp; code
        </p>
      </div>
    </footer>
  );
}
