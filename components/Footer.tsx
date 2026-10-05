import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-surface">
      <div className="mx-auto flex max-w-editorial flex-col gap-2 px-6 py-8 font-sans text-xs text-ink-faint md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="uppercase tracking-[0.2em]">Charcoal & Cream · Port 5038</p>
      </div>
    </footer>
  );
}
