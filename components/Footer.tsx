import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-studio-border/80">
      <div className="h-px w-full spectrum-gradient opacity-30" />
      <div className="mx-auto flex max-w-grid flex-col gap-3 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.2em] text-studio-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="text-studio-dim">Signal · Systems · Ship</p>
      </div>
    </footer>
  );
}
