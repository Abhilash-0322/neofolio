import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    name: "Runtime Platforms",
    detail: "React, Next.js, Express, FastAPI, real-time systems, auth boundaries, media pipelines."
  },
  {
    name: "Intelligence Workflows",
    detail: "Agentic patterns, sentiment analysis, retrieval pipelines, model-to-product integration."
  },
  {
    name: "Cloud & Infra",
    detail: "Dockerized delivery, Linux-native workflows, cloud deployment practices across modern providers."
  },
  {
    name: "Security Context",
    detail: "Contract scanning, risk grading, cross-chain monitoring, alert-oriented architecture."
  }
] as const;

export function CapabilitiesSection() {
  return (
    <section id="systems-core" data-story-section className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="story-kicker">Execution Stack</p>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">Systems, Intelligence, Infrastructure</h2>
        </Reveal>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.name} delay={0.04 * idx}>
              <article className="glass rounded-2xl p-5">
                <h3 className="font-mono text-sm text-green">{pillar.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{pillar.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
