import { drawingMeta, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-blueprint-line/30 bg-blueprint-deep/80">
      <div className="mx-auto flex max-w-grid flex-col gap-3 px-4 py-6 font-mono text-[10px] uppercase tracking-[0.15em] text-blueprint-line/70 md:flex-row md:items-center md:justify-between md:px-8">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p>
          {drawingMeta.sheet} · REV {drawingMeta.rev} · {drawingMeta.discipline}
        </p>
        <p className="text-blueprint-ink">End of drawing</p>
      </div>
    </footer>
  );
}
