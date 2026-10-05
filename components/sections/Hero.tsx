import { links, site } from "@/data/content";

export function Hero() {
  return (
    <section className="border-b border-slate-rule bg-white">
      <div className="mx-auto max-w-brief px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-12 gap-y-8 gap-x-6">
          <div className="col-span-12 lg:col-span-4">
            <p className="label-caps text-trust-gold">Counsel of record</p>
            <p className="mt-4 font-serif text-sm leading-relaxed text-slate-600">
              A conservative, audit-friendly presentation of engineering
              credentials—with emphasis on systems suited to finance and
              regulated technology.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h1 className="font-serif text-4xl font-medium leading-[1.12] tracking-tight text-slate-ink md:text-5xl lg:text-[3.25rem]">
              {site.name}
            </h1>
            <p className="mt-4 text-lg text-slate-600 md:text-xl">
              {site.title}
            </p>
            <p className="mt-2 text-sm text-slate-500">{site.location}</p>
            <div className="mt-10 grid gap-px border border-slate-rule bg-slate-rule sm:grid-cols-2 lg:grid-cols-3">
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
                  className="flex items-center justify-between bg-white px-4 py-3 text-sm text-slate-ink transition-colors hover:bg-slate-wash"
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  <span>{item.label}</span>
                  <span className="text-trust-gold" aria-hidden>→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
