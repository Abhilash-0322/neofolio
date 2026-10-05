import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-noir-rule/40 bg-noir-bar text-noir-bar-text/75">
      <div className="mx-auto flex max-w-brief flex-col gap-3 px-6 py-10 font-mono text-[10px] uppercase tracking-[0.18em] md:flex-row md:items-center md:justify-between md:px-10">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="text-noir-bar-text/55">
          Backend · AI systems · Cloud · Fintech interest
        </p>
      </div>
    </footer>
  );
}
