import { projects } from "@/data/content";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-shell">
        <Reveal>
          <p className="plaque-label">Main hall</p>
          <h2 className="headline-serif mt-2 text-3xl sm:text-4xl">Featured exhibits</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Shipped systems across hiring AI, Solana agents, security tooling, RAG, and full-stack products—each framed for production impact.
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
