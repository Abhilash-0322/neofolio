import { DecoDivider } from "@/components/DecoDivider";
import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-gold/40 bg-navy-900/50">
      <div className="mx-auto max-w-grid px-6 py-10 md:px-10">
        <DecoDivider />
        <div className="mt-6 flex flex-col gap-3 text-center text-xs uppercase tracking-[0.2em] text-cream-muted md:flex-row md:items-center md:justify-between md:text-left">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p className="text-gold-dim">Backend & AI Systems</p>
        </div>
      </div>
    </footer>
  );
}
