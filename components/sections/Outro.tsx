import { profile } from "@/data/content";

export function Outro() {
  return (
    <footer id="contact" data-story-section className="section-spacing pb-16">
      <div className="container-shell">
        <section className="glass rounded-[2rem] p-7 sm:p-10">
          <p className="story-kicker text-cyan">The Story Continues</p>
          <h2 className="mt-2 max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">
            Every great system begins with a conversation.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
            Whether it&apos;s architecting a platform, deploying intelligence at scale, or securing the next frontier of decentralized systems &mdash; the next chapter starts when you reach out.
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
            Delhi, India · Designed as a narrative-driven system portfolio · Every orbit tells a story
          </p>
        </section>
      </div>
    </footer>
  );
}
