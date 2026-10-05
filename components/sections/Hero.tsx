import { WaveformStrip } from "@/components/effects/WaveformStrip";
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
    <section className="border-b border-studio-border/80">
      <div className="mx-auto max-w-grid px-6 py-20 md:px-10 md:py-32">
        <div className="grid grid-cols-12 gap-y-8 gap-x-4">
          <p className="col-span-12 font-mono text-[10px] uppercase tracking-[0.3em] text-studio-muted md:col-span-2">
            Ch.01 · Portfolio
          </p>
          <div className="col-span-12 md:col-span-10">
            <WaveformStrip className="mb-8 h-8 w-full max-w-md opacity-70" />
            <h1 className="max-w-4xl text-4xl font-medium leading-[1.08] tracking-tight text-studio-text md:text-6xl md:leading-[1.05]">
              {site.name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-studio-dim md:text-xl">
              <span className="text-spectrum">{site.title}</span>
            </p>
            <p className="mt-4 font-mono text-xs text-studio-muted">
              {site.location}
            </p>
            <div className="mt-12 flex flex-wrap gap-3 border-t border-studio-border/80 pt-8">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="rounded border border-studio-border bg-studio-surface/60 px-4 py-2 font-mono text-[11px] uppercase tracking-wider text-studio-text transition-colors hover:border-studio-accent/50 hover:text-studio-accent"
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
      </div>
    </section>
  );
}
