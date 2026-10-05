import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-deck flex-col gap-2 px-6 py-8 text-xs text-muted md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="uppercase tracking-[0.15em]">
          <span className="dark:hidden">Pitch deck · Light</span>
          <span className="hidden dark:inline">Keynote · Stage</span>
        </p>
      </div>
    </footer>
  );
}
