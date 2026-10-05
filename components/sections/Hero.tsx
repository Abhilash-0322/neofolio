import { links, site } from "@/data/content";

const quickLinks = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Résumé", href: site.resumePath, external: true },
  { label: "GitHub", href: links.github, external: true },
  { label: "LinkedIn", href: links.linkedin, external: true },
  { label: "X", href: links.x, external: true },
];

export function Hero() {
  return (
    <section className="border-b border-forest-border">
      <div className="mx-auto max-w-grid px-6 py-20 md:px-10 md:py-28">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-wine-light">
          Portfolio · MMXXVI
        </p>
        <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] text-parchment md:text-7xl lg:text-8xl">
          {site.name}
        </h1>
        <div className="mt-6 max-w-prose">
          <p className="font-serif text-2xl italic text-wine-glow/90 md:text-3xl">
            {site.title}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted md:text-base">
            {site.location}
          </p>
        </div>
        <div className="ornament-line my-10 max-w-md" />
        <p className="max-w-prose text-base leading-relaxed text-ink md:text-lg">
          {site.bio}
        </p>
        <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3">
          {quickLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="link-scholar text-sm font-medium"
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
