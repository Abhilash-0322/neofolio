import { links, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-stage-floor py-12">
      <div className="mx-auto flex max-w-stage flex-col items-center justify-between gap-6 px-6 md:flex-row">
        <p className="font-display text-xl tracking-wide text-neutral-500">
          {site.name}
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-neutral-400">
          <a href={links.github} className="hover:text-stage-gold">GitHub</a>
          <a href={links.linkedin} className="hover:text-stage-gold">LinkedIn</a>
          <a href={links.x} className="hover:text-stage-gold">X</a>
        </div>
        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} · {site.location}
        </p>
      </div>
    </footer>
  );
}
