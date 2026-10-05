import { profile } from "@/data/content";

export function Outro() {
  return (
    <footer id="contact" data-story-section className="section-spacing pb-16">
      <div className="container-shell">
        <section className="glass rounded-[2rem] p-7 sm:p-10">
          <p className="story-kicker text-cyan">05 / Contact</p>
          <h2 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Have a system that needs shipping?
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
            I&apos;m open to backend, AI systems, cloud, and platform engineering opportunities. Tell me what you&apos;re building and where the hard parts are.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="cta-btn bg-white/10" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="cta-btn" target="_blank" rel="noreferrer" href={profile.github}>
              GitHub
            </a>
            <a className="cta-btn" target="_blank" rel="noreferrer" href={profile.x}>
              X
            </a>
            <a className="cta-btn" target="_blank" rel="noreferrer" href={profile.linkedin}>
              LinkedIn
            </a>
          </div>

          <p className="mt-8 border-t border-white/10 pt-5 font-mono text-xs text-slate-400">
            Delhi NCR, India · Available for remote and hybrid work · © 2026 Abhilash Maurya
          </p>
        </section>
      </div>
    </footer>
  );
}
