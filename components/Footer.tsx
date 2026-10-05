import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-slate-panel bg-slate-ink text-slate-400">
      <div className="mx-auto flex max-w-brief flex-col gap-3 px-6 py-10 text-xs md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="uppercase tracking-[0.2em] text-slate-500">
          Backend · AI systems · Fintech interest
        </p>
      </div>
    </footer>
  );
}
