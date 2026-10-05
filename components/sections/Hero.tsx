import { links, site } from "@/data/content";

export function Hero() {
  return (
    <section className="border-b-2 border-[rgb(var(--border))]">
      <div className="mx-auto max-w-grid px-6 py-16 md:px-10 md:py-28">
        <p className="label-stencil">Street code · Portfolio 5053</p>
        <h1 className="mt-4 font-display text-[clamp(3.5rem,12vw,7rem)] leading-[0.95] tracking-wide text-[rgb(var(--text))]">
          Abhilash{" "}
          <span className="text-[rgb(var(--accent))]">Maurya</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-[rgb(var(--text-muted))] md:text-xl">
          {site.title}
        </p>
        <p className="mt-3 text-sm uppercase tracking-[0.15em] text-[rgb(var(--text-muted))]">
          {site.location}
        </p>
        <div className="mt-12 flex flex-wrap gap-3 border-t-2 border-[rgb(var(--border))] pt-8">
          {[
            { label: "Email", href: `mailto:${site.email}` },
            { label: "Resume", href: site.resumePath, external: true },
            { label: "GitHub", href: links.github, external: true },
            { label: "LinkedIn", href: links.linkedin, external: true },
            { label: "X", href: links.x, external: true },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="surface sticker-tilt px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] shadow-sticker link-tag no-underline hover:text-[rgb(var(--text))]"
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
