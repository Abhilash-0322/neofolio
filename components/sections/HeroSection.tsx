import { profile } from "@/data/content";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl px-4 pb-16 pt-8 md:px-6 md:pb-24 md:pt-12"
    >
      <div className="relative overflow-hidden rounded-[2.5rem] border border-white/60 bg-white/70 p-8 shadow-card backdrop-blur-sm md:p-14">
        <div
          aria-hidden
          className="absolute -right-16 -top-16 h-48 w-48 animate-blob bg-gradient-to-br from-sky/80 to-lavender/80 opacity-80 blur-2xl"
        />
        <div
          aria-hidden
          className="absolute -bottom-10 left-10 h-32 w-32 animate-blob-slow rounded-full bg-gradient-to-tr from-peach to-blush opacity-70 blur-xl"
        />

        <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-mint/40 px-4 py-1.5 text-sm font-medium text-ink">
          <span className="h-2 w-2 rounded-full bg-mint" />
          {profile.location}
        </p>

        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-ink md:text-6xl">
          Hey, I&apos;m{" "}
          <span className="bg-gradient-to-r from-lavender via-sky to-peach bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
          {profile.headline} Friendly with FastAPI, cloud deploys, and agent
          workflows—built for employers, fintech teams, and clients who need
          production-ready systems.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {profile.titles.map((title) => (
            <span
              key={title}
              className="rounded-full border border-lavender/30 bg-blush/20 px-3 py-1 text-sm font-medium text-ink"
            >
              {title}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="rounded-full bg-gradient-to-r from-lavender to-sky px-6 py-3 text-sm font-semibold text-ink shadow-soft transition hover:opacity-90"
          >
            See shipped work
          </Link>
          <Link
            href="#contact"
            className="rounded-full border-2 border-ink/10 bg-white px-6 py-3 text-sm font-semibold text-ink transition hover:border-lavender/50"
          >
            Let&apos;s collaborate
          </Link>
        </div>
      </div>
    </section>
  );
}
