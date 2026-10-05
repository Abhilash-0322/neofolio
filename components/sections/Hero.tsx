import { links, site } from "@/data/content";

export function Hero() {
  return (
    <section className="border-b border-rule">
      <div className="mx-auto max-w-editorial px-6 py-16 md:px-10 md:py-28">
        <div className="grid grid-cols-12 gap-y-8 gap-x-4">
          <p className="col-span-12 md:col-span-2 font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">
            Issue 5038
          </p>
          <div className="col-span-12 md:col-span-10">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-ink-faint">
              Portfolio · Editorial
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink md:text-7xl">
              {site.name}
            </h1>
            <p className="mt-6 max-w-2xl font-display text-xl italic leading-relaxed text-ink-muted md:text-2xl">
              {site.title}
            </p>
            <p className="mt-4 font-sans text-sm text-ink-faint">{site.location}</p>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-rule pt-8">
              <a
                href={`mailto:${site.email}`}
                className="font-sans text-sm text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Email
              </a>
              <a
                href={site.resumePath}
                className="font-sans text-sm text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume (PDF)
              </a>
              <a
                href={links.github}
                className="font-sans text-sm text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={links.linkedin}
                className="font-sans text-sm text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={links.x}
                className="font-sans text-sm text-ink underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                X
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
