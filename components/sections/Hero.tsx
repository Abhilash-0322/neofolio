import { TitleBlock } from "@/components/TitleBlock";
import { links, site } from "@/data/content";

const quickLinks = [
  { label: "EMAIL", href: `mailto:${site.email}` },
  { label: "RESUME", href: site.resumePath, external: true },
  { label: "GITHUB", href: links.github, external: true },
  { label: "LINKEDIN", href: links.linkedin, external: true },
  { label: "X", href: links.x, external: true },
];

export function Hero() {
  return (
    <section className="arch-surface border-b border-arch-line/30">
      <div className="relative px-4 py-16 md:px-8 md:py-24">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <p className="dim-line">General arrangement — 00</p>
            <h1 className="mt-4 max-w-4xl font-mono text-3xl font-medium leading-tight tracking-tight text-arch-chalk md:text-5xl lg:text-6xl">
              {site.name}
            </h1>
            <p className="mt-2 font-mono text-sm text-arch-accent md:text-base">
              {site.title}
            </p>
            <div className="mt-6 flex items-center gap-3 font-mono text-[11px] text-arch-ink">
              <span className="inline-block h-px w-8 bg-arch-line" />
              <span>{site.location}</span>
              <span className="text-arch-line/40">LOC</span>
            </div>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-arch-ink md:text-base">
              {site.bio}
            </p>
            <div className="mt-12 flex flex-wrap gap-2 border-t border-dashed border-arch-line/30 pt-8">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="draw-corners border border-arch-line/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-arch-chalk transition-colors hover:border-arch-accent hover:text-arch-accent"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 lg:pt-2">
            <TitleBlock />
            <div className="mt-6 border border-arch-line/25 p-4 font-mono text-[10px] text-arch-line/80">
              <p className="text-arch-line/50">NOTES</p>
              <ul className="mt-2 space-y-1 text-arch-ink">
                <li>— Shipped FastAPI + cloud deployments</li>
                <li>— Multi-agent & RAG systems</li>
                <li>— AWS CCP · Azure · Docker CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
