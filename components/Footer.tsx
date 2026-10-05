import { site } from "@/data/content";

export function Footer() {
  return (
    <footer className="mt-8">
      <div className="sketch-divider opacity-50" aria-hidden="true" />
      <div className="mx-auto flex max-w-grid flex-col gap-2 px-6 py-8 font-sketch text-lg text-ink-faint md:flex-row md:items-center md:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <p className="text-sketch-sage">Backend & AI Systems ✎</p>
      </div>
    </footer>
  );
}
