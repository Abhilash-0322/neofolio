import { links, site } from "@/data/content";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-grid px-6 py-20 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-y-8 gap-x-4">
          <p className="col-span-12 font-display text-xs font-medium uppercase tracking-[0.35em] text-gold md:col-span-2">
            Portfolio
          </p>
          <div className="col-span-12 md:col-span-10">
            <h1 className="max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-6xl">
              {site.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              {site.title}
            </p>
            <p className="mt-4 text-sm text-muted/90">{site.location}</p>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8">
              <a href={`mailto:${site.email}`} className="link-luxe text-sm">
                Email
              </a>
              <a
                href={site.resumePath}
                className="link-luxe text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume (PDF)
              </a>
              <a
                href={links.github}
                className="link-luxe text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={links.linkedin}
                className="link-luxe text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={links.x}
                className="link-luxe text-sm"
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
