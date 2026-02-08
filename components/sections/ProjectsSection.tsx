import { projects } from "@/data/content";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsSection() {
  return (
    <section id="projects" data-story-section className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="story-kicker text-cyan">Core Projects</p>
          <h2 className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
            Recent Builds With Strongest Impact Signals
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Selection is prioritized by recency, architecture depth, and operational relevance across full-stack delivery, AI systems, and security-critical workflows.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.name} delay={idx * 0.05}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
