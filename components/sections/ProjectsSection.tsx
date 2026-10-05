import { projects } from "@/data/content";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsSection() {
  return (
    <section id="projects" data-story-section className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="story-kicker text-cyan">02 / Selected systems</p>
          <h2 data-parallax className="mt-1 text-3xl font-semibold tracking-tight sm:text-4xl">
            Shipped work, not just ideas
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            A sample of backend, AI, and infrastructure work. Each card shows the problem, the architecture, and the trade-offs behind the implementation.
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
