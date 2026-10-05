import { links, site } from "@/data/content";

const quickLinks = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "Resume", href: site.resumePath, external: true },
  { label: "GitHub", href: links.github, external: true },
  { label: "LinkedIn", href: links.linkedin, external: true },
  { label: "X", href: links.x, external: true },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-arena-border">
      <div className="mx-auto max-w-arena px-6 py-20 md:px-10 md:py-28">
        <p className="arena-label">Player card · Portfolio</p>
        <h1
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-arena-heading md:text-6xl md:leading-[1.02]"
        >
          <span className="bg-rgb-sweep bg-clip-text text-transparent">
            {site.name}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-xl font-medium text-arena-text md:text-2xl">
          {site.title}
        </p>
        <p className="mt-3 font-mono text-sm text-arena-muted">{site.location}</p>

        <div className="mt-12 arena-panel rgb-border-top p-6 md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neon-lime">
            Loadout · Quick connect
          </p>
          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {quickLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="neon-link text-sm font-semibold"
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
