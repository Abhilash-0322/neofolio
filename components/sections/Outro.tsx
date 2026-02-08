import { profile } from "@/data/content";

export function Outro() {
  return (
    <footer id="contact" data-story-section className="section-spacing pb-16">
      <div className="container-shell">
        <section className="glass rounded-[2rem] p-7 sm:p-10">
          <p className="story-kicker">Final Frame</p>
          <h2 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Building products where speed, intelligence, and system integrity can coexist.
          </h2>

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

          <p className="mt-7 font-mono text-xs text-slate-400">Delhi, India · Designed as a narrative system portfolio</p>
        </section>
      </div>
    </footer>
  );
}
