import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-neutral-200">
      <div className="mx-auto flex max-w-grid flex-col gap-2 px-6 py-8 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="uppercase tracking-[0.15em]">Backend & AI Systems</p>
      </div>
    </footer>
  );
}
