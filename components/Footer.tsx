import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-arena-border rgb-border-top">
      <div className="mx-auto flex max-w-arena flex-col gap-2 px-6 py-8 font-mono text-[10px] uppercase tracking-[0.2em] text-arena-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="text-neon-violet">Esports arena · RGB systems</p>
      </div>
    </footer>
  );
}
