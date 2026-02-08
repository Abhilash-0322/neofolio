import { projects } from "@/data/content";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsSection() {
  return (
    <section id="projects" data-story-section className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="story-kicker text-cyan">Artifacts From the Timeline</p>
          <h2 data-parallax className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
            Each Project, a Universe of Its Own
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            These aren&apos;t just repositories &mdash; they&apos;re living systems, each one a convergence of architecture, intelligence, and craft. Selected for recency, depth, and the story they tell about what&apos;s possible when engineering meets ambition.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.name} delay={idx * 0.06}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
