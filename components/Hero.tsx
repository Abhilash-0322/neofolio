import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-4 pt-24 sm:px-6"
      aria-labelledby="hero-heading"
    >
      <div className="hero-vignette absolute inset-0 z-0">
        <div
          className="absolute bottom-0 left-[-20%] right-[-20%] h-[45vh] grid-floor opacity-30"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <p className="mb-4 font-mono text-xs uppercase tracking-[0.35em] text-teal-glow/80">
          Delhi NCR · Open to cloud & AI roles
        </p>
        <h1
          id="hero-heading"
          className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
        >
          <span className="text-gradient">{profile.name}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl">
          {profile.titles.join(" · ")}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
          {profile.bio}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-sm bg-teal-dim/20 px-6 py-3 font-mono text-sm uppercase tracking-wider text-teal-glow border border-teal-glow/40 transition-all hover:bg-teal-glow/10 hover:shadow-teal-glow"
          >
            View shipped work
          </a>
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm border border-magenta-dim/50 px-6 py-3 font-mono text-sm uppercase tracking-wider text-magenta-glow transition-all hover:border-magenta-glow hover:shadow-magenta-glow"
          >
            Download resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-sm px-6 py-3 font-mono text-sm uppercase tracking-wider text-slate-400 link-glow"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-16 flex flex-wrap gap-6 font-mono text-xs text-slate-600">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-glow" />
            Systems in production
          </span>
          <span>FastAPI · Next.js · AWS · Azure</span>
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-0 top-1/3 h-64 w-64 rounded-full bg-magenta-glow/10 blur-[100px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-1/4 left-0 h-48 w-48 rounded-full bg-teal-glow/10 blur-[80px]"
        aria-hidden
      />
    </section>
  );
}
