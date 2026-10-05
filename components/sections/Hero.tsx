import { links, site } from "@/data/content";

export function Hero() {
  return (
    <section className="border-b border-sol-border">
      <div className="mx-auto max-w-grid px-6 py-20 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-x-4 gap-y-8">
          <p className="col-span-12 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-sol-yellow md:col-span-2">
            Portfolio
          </p>
          <div className="col-span-12 md:col-span-10">
            <h1 className="max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight text-sol-emphasis md:text-6xl md:leading-[1.05]">
              {site.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sol-fg md:text-xl">
              {site.title}
            </p>
            <p className="mt-4 font-mono text-sm text-sol-muted">{site.location}</p>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-sol-border pt-8">
              <a href={`mailto:${site.email}`} className="sol-link text-sm">
                Email
              </a>
              <a
                href={site.resumePath}
                className="sol-link text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume (PDF)
              </a>
              <a
                href={links.github}
                className="sol-link text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={links.linkedin}
                className="sol-link text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={links.x}
                className="sol-link text-sm"
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
