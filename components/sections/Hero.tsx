import { links, site } from "@/data/content";

export function Hero() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-grid px-6 py-20 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-y-8 gap-x-4">
          <p className="col-span-12 md:col-span-2 text-[11px] font-medium uppercase tracking-[0.2em] text-ink-faint">
            Portfolio
          </p>
          <div className="col-span-12 md:col-span-10">
            <h1 className="max-w-4xl text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-6xl md:leading-[1.05]">
              {site.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
              {site.title}
            </p>
            <p className="mt-4 text-sm text-ink-faint">{site.location}</p>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-8">
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-ink underline-offset-4 hover:underline"
              >
                Email
              </a>
              <a
                href={site.resumePath}
                className="text-sm text-ink underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume (PDF)
              </a>
              <a
                href={links.github}
                className="text-sm text-ink underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={links.linkedin}
                className="text-sm text-ink underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={links.x}
                className="text-sm text-ink underline-offset-4 hover:underline"
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
