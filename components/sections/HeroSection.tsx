import { profile } from "@/data/content";

export function HeroSection() {
  return (
    <section className="mb-10 pt-4" aria-labelledby="hero-heading">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Entry · {profile.location}</p>
      <h1 id="hero-heading" className="mt-2 font-hand text-5xl font-semibold leading-tight text-ink md:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-3 max-w-xl text-lg text-muted">
        {profile.titles.join(" · ")}
      </p>
      <div className="mt-6 flex flex-wrap gap-3 text-sm">
        <a href={profile.github} className="ink-link font-mono" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} className="ink-link font-mono" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.x} className="ink-link font-mono" target="_blank" rel="noreferrer">
          X
        </a>
        <a href={profile.resume} className="ink-link font-mono" target="_blank" rel="noreferrer">
          Resume (PDF)
        </a>
      </div>
    </section>
  );
}
