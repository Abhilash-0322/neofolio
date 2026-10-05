import { links, site } from "@/data/content";

export function StageHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 spotlight-gradient" aria-hidden />
      <div className="absolute inset-0 curtain-edge" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[70vh] w-[min(100%,48rem)] -translate-x-1/2 shadow-spotlight"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-stage flex-col justify-end px-6 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-red-300">
            <span className="h-2 w-2 animate-pulse-slow rounded-full bg-red-400" />
            On stage
          </span>
          <span className="text-xs uppercase tracking-widest text-neutral-500">
            Keynote portfolio · {site.location}
          </span>
        </div>

        <h1 className="max-w-5xl font-display text-[clamp(3.5rem,12vw,9rem)] leading-[0.92] tracking-wide text-stage-spotlight">
          {site.name.toUpperCase()}
        </h1>

        <p className="mt-6 max-w-3xl text-xl font-medium text-neutral-300 md:text-2xl">
          {site.title}
        </p>
        <p className="mt-3 max-w-2xl text-base text-neutral-500 md:text-lg">
          {site.tagline}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#talks"
            className="rounded-sm bg-stage-gold px-8 py-4 font-display text-xl tracking-wide text-stage-black transition hover:bg-stage-amber"
          >
            VIEW SESSIONS
          </a>
          <a
            href="#timeline"
            className="rounded-sm border border-white/20 px-8 py-4 font-display text-xl tracking-wide text-white transition hover:border-stage-gold hover:text-stage-gold"
          >
            HACKATHON WINS
          </a>
          <a
            href={site.resumePath}
            className="rounded-sm px-8 py-4 text-sm font-semibold uppercase tracking-widest text-neutral-400 underline-offset-4 hover:text-stage-gold hover:underline"
          >
            Resume
          </a>
        </div>

        <div className="mt-16 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
          {[
            { label: "Talks & workshops", value: "5+" },
            { label: "Hackathon podiums", value: "7+" },
            { label: "AI MVPs led", value: "5+" },
          ].map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-4xl text-stage-gold md:text-5xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs uppercase tracking-widest text-neutral-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-neutral-500">
          <a href={links.github} className="hover:text-stage-gold">GitHub</a>
          <span aria-hidden>·</span>
          <a href={links.linkedin} className="hover:text-stage-gold">LinkedIn</a>
          <span aria-hidden>·</span>
          <a href={links.x} className="hover:text-stage-gold">X</a>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stage-black to-transparent"
        aria-hidden
      />
    </section>
  );
}
