import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section className="bg-stage-black py-20 md:py-28">
      <div className="mx-auto max-w-stage px-6">
        <SectionHeading
          id="projects"
          eyebrow="Backstage demos"
          title="SHIPPED PROJECTS"
          subtitle="Systems behind the talks—production deployments and open repos."
        />

        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li
              key={project.name}
              className="flex flex-col rounded-lg border border-white/10 bg-stage-floor/50 p-6"
            >
              <div>
                <h3 className="font-display text-2xl tracking-wide text-white">
                  {project.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-stage-amber">
                  {project.subtitle}
                </p>
                <p className="mt-3 text-sm text-neutral-400">
                  {project.description}
                </p>
                <p className="mt-2 text-xs text-neutral-600">{project.stack}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-stage-gold hover:underline"
                >
                  GitHub
                </a>
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-neutral-400 hover:text-white hover:underline"
                  >
                    Live demo
                  </a>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
