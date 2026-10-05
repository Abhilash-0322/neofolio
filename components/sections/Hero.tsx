import { links, site } from "@/data/content";

export function Hero() {
  return (
    <section className="border-b border-noir-rule bg-noir-card shadow-marquee">
      <div className="mx-auto max-w-brief px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-12 gap-y-8 gap-x-6">
          <div className="col-span-12 lg:col-span-4">
            <p className="label-caps text-noir-accent">Opening credits</p>
            <p className="mt-4 font-serif text-sm leading-relaxed text-noir-muted">
              A high-contrast dossier of shipped backends, cloud deployments, and
              production AI—presented like evidence under a silver screen, or
              testimony in a rain-soaked alley.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-noir-faint">
              Starring
            </p>
            <h1 className="mt-2 font-serif text-4xl font-medium leading-[1.08] tracking-tight text-noir-ink md:text-5xl lg:text-[3.35rem]">
              {site.name}
            </h1>
            <p className="mt-4 text-lg text-noir-muted md:text-xl">{site.title}</p>
            <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-noir-faint">
              {site.location}
            </p>
            <div className="mt-10 grid gap-px border border-noir-rule bg-noir-rule sm:grid-cols-2 lg:grid-cols-3">
              {[
                { label: "Email", href: `mailto:${site.email}` },
                { label: "Resume (PDF)", href: site.resumePath, external: true },
                { label: "GitHub", href: links.github, external: true },
                { label: "LinkedIn", href: links.linkedin, external: true },
                { label: "X", href: links.x, external: true },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between bg-noir-card px-4 py-3 text-sm text-noir-ink transition-colors hover:bg-noir-wash"
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  <span>{item.label}</span>
                  <span className="text-noir-accent" aria-hidden>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
