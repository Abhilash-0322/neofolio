import { Reveal } from "@/components/ui/Reveal";

const pillars = [
  {
    name: "Runtime Platforms",
    detail: "React, Next.js, Express, FastAPI \u2014 the living frameworks that power digital experiences. Real-time systems responding in milliseconds. Auth boundaries guarding like sentinels. Media pipelines transforming raw data into rich, interactive worlds.",
    skills: ["React", "Next.js", "Express", "FastAPI", "Socket.io"],
  },
  {
    name: "Intelligence Workflows",
    detail: "Agentic patterns that reason and adapt. Sentiment analysis that reads between the lines. RAG pipelines with surgical precision. Every AI workflow built for production deployment \u2014 not just proof-of-concept demonstrations.",
    skills: ["LangChain", "Python", "OpenAI", "RAG", "Agents"],
  },
  {
    name: "Cloud & Infrastructure",
    detail: "Dockerized deployments scaling on demand. Linux-native workflows forged at the command line. CI/CD pipelines shipping with unwavering confidence. Infrastructure treated as both code and craft.",
    skills: ["Docker", "AWS", "Linux", "CI/CD", "MongoDB"],
  },
  {
    name: "Security & Web3",
    detail: "Smart contract scanning across multiple chains. Risk algorithms quantifying danger before it strikes. Cross-chain monitoring that watches the decentralized frontier. Alert architectures that never sleep.",
    skills: ["Solidity", "Rust", "Move", "Security", "Auditing"],
  },
] as const;

export function CapabilitiesSection() {
  return (
    <section id="systems-core" data-story-section className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="story-kicker">The Arsenal</p>
          <h2 data-parallax className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">Systems, Intelligence, Infrastructure</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Four pillars of engineering mastery, each one a universe unto itself &mdash; yet all converging toward the same mission: building things that work, at scale, under pressure.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {pillars.map((pillar, idx) => (
            <Reveal key={pillar.name} delay={0.06 * idx}>
              <article className="glass group rounded-2xl p-6 transition-all duration-300 hover:border-white/30">
                <h3 className="font-mono text-sm text-green">{pillar.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{pillar.detail}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {pillar.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[0.65rem] text-slate-400">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
