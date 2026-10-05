import { DecoDivider } from "@/components/DecoDivider";
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
    <section className="border-b border-gold/30">
      <div className="mx-auto max-w-grid px-6 py-20 md:px-10 md:py-28">
        <div className="deco-frame deco-frame-inner mx-auto max-w-4xl text-center">
          <p className="deco-eyebrow">Portfolio</p>
          <h1 className="deco-title mt-6">{site.name}</h1>
          <DecoDivider />
          <p className="mt-6 font-display text-xl font-light tracking-wide text-gold-light md:text-2xl">
            {site.title}
          </p>
          <p className="mt-4 font-sans text-xs uppercase tracking-[0.3em] text-cream-muted">
            {site.location}
          </p>
          <nav
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 border-t border-gold/25 pt-8"
            aria-label="Quick links"
          >
            {quickLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="deco-link"
                {...(item.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </section>
  );
}
