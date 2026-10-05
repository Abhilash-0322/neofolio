import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-lab-border px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="03"
          title="Shipped systems"
          subtitle="Selected builds — multi-agent workflows, RAG, and cloud-deployed APIs."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.name}>
              <article className="card-lab group flex h-full flex-col p-6 hover:-translate-y-0.5">
                <h3 className="text-lg font-medium text-lab-ink transition-colors group-hover:text-lab-accent">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-lab-sub">
                  {project.description}
                </p>
                <p className="mt-4 font-mono text-[10px] text-lab-sub/80">
                  {project.stack}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-lab"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lab-synapse hover:opacity-80"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
