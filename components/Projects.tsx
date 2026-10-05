import { projects } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section
      id="projects"
      className="relative border-t border-line/60 px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="03"
          title="Selected projects"
          subtitle="Production-minded builds — APIs, agents, and deployments beyond demos."
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.name}>
              <article
                className="group flex h-full flex-col rounded-lg border-glow bg-panel/60 p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-medium text-slate-100 group-hover:text-teal-glow transition-colors">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
                <p className="mt-4 font-mono text-[11px] text-slate-600">
                  {project.stack}
                </p>
                <div className="mt-4 flex flex-wrap gap-4 font-mono text-xs">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-dim link-glow"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-magenta-dim link-glow"
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
