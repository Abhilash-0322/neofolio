import { projects } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import clsx from "clsx";

const accentMap: Record<string, string> = {
  lavender: "from-lavender/40 to-blush/30 border-lavender/30",
  sky: "from-sky/40 to-mint/25 border-sky/30",
  mint: "from-mint/40 to-sky/20 border-mint/40",
  peach: "from-peach/40 to-blush/30 border-peach/40",
  blush: "from-blush/40 to-lavender/20 border-blush/40"
};

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-16 md:px-6">
      <SectionHeading
        eyebrow="Projects"
        title="Things you can click and try"
        description="Hackathon winners, bounty builds, and side projects—each with a live or repo link when available."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.name}
            className={clsx(
              "flex flex-col rounded-3xl border bg-gradient-to-br p-6 shadow-soft",
              accentMap[project.accent] ?? accentMap.lavender
            )}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              {project.tag}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold text-ink">
              {project.name}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
              {project.blurb}
            </p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full bg-white/70 px-2 py-0.5 text-xs font-medium text-ink"
                >
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink underline decoration-lavender/60 underline-offset-4 hover:decoration-ink"
              >
                GitHub
              </a>
              {"live" in project && project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-ink px-3 py-1 text-cream"
                >
                  Live demo
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
