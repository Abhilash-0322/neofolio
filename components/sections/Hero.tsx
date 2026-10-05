import { links, site } from "@/data/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-4 pt-6">
      <div className="mx-auto max-w-grid px-6 py-16 md:px-10 md:py-24">
        <div className="sketch-border-lg p-8 md:p-12">
          <p className="font-sketch text-2xl text-sketch-sage">Hey there — portfolio</p>
          <h1 className="sketch-title mt-4 max-w-4xl text-5xl leading-tight md:text-7xl">
            {site.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl">
            {site.title}
          </p>
          <p className="mt-3 font-sketch text-xl text-ink-faint">{site.location}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={`mailto:${site.email}`} className="sketch-pill sketch-link !text-base">
              Email
            </a>
            <a
              href={site.resumePath}
              className="sketch-pill sketch-link !text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
            <a
              href={links.github}
              className="sketch-pill sketch-link !text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={links.linkedin}
              className="sketch-pill sketch-link !text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={links.x}
              className="sketch-pill sketch-link !text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
          </div>
        </div>
      </div>
      <div className="sketch-divider opacity-50" aria-hidden="true" />
    </section>
  );
}
