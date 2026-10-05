import { features } from "@/data/content";
import { FeatureIcon } from "@/components/ui/FeatureIcon";

export function FeatureGrid() {
  return (
    <section id="features" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
            Everything you need to{" "}
            <span className="text-gradient">ship in production</span>
          </h2>
          <p className="mt-4 text-muted">
            Backend, AI, and cloud — one engineering practice focused on systems that work beyond the demo.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-border bg-surface p-6 transition hover:border-violet-500/40 hover:shadow-card"
            >
              <FeatureIcon name={feature.icon} />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
