import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[90vh] flex-col justify-center px-4 pt-24 sm:px-6"
      aria-labelledby="hero-heading"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-lab-border bg-lab-surface px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-lab-sub opacity-95">
          <span className="h-1.5 w-1.5 rounded-full bg-lab-synapse animate-pulse" />
          AI Research Lab · Portfolio
        </div>

        <h1
          id="hero-heading"
          className="mt-8 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-lab-gradient">{profile.name}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-lab-sub sm:text-xl">
          {profile.titles.slice(0, 3).join(" · ")}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-lab-sub/90">
          {profile.bio}
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-lg bg-lab-accent px-6 py-3 font-mono text-xs uppercase tracking-wider text-white shadow-lab transition-all hover:opacity-90 dark:text-lab-bg"
          >
            View experiments
          </a>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-lab-border bg-lab-surface px-6 py-3 font-mono text-xs uppercase tracking-wider text-lab-ink transition-all hover:border-lab-synapse hover:shadow-synapse"
          >
            Resume PDF
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg px-6 py-3 font-mono text-xs uppercase tracking-wider text-lab-sub link-lab"
          >
            Contact
          </a>
        </div>

        <dl className="mt-14 grid gap-6 border-t border-lab-border pt-8 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-lab-sub">
              Focus
            </dt>
            <dd className="mt-1 text-sm text-lab-ink">
              Cloud · APIs · RAG · Agents
            </dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-lab-sub">
              Location
            </dt>
            <dd className="mt-1 text-sm text-lab-ink">{profile.location}</dd>
          </div>
          <div>
            <dt className="font-mono text-[10px] uppercase tracking-widest text-lab-sub">
              Status
            </dt>
            <dd className="mt-1 text-sm text-lab-accent">
              Open to cloud & AI roles
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
