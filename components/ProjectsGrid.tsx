import { MdButton } from "@/components/ui/MdButton";
import { MdChip } from "@/components/ui/MdChip";
import { RippleHost } from "@/components/ui/RippleHost";
import { projects, type Project } from "@/lib/portfolio";

function ProjectCard({ project }: { project: Project }) {
  return (
    <RippleHost as="div" className="md-elevated-card flex h-full flex-col p-5 md:p-6">
      <h3 className="md-title-large text-md-on-surface">{project.title}</h3>
      <p className="mt-1 md-body-medium text-md-on-surface-variant">
        {project.subtitle}
      </p>
      <p className="mt-4 flex-1 md-body-medium text-md-on-surface">
        {project.summary}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <MdChip key={tech}>{tech}</MdChip>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.github && (
          <MdButton href={project.github} variant="tonal" external className="!py-2 !text-sm">
            Code
          </MdButton>
        )}
        {project.live && (
          <MdButton href={project.live} variant="text" external className="!py-2 !text-sm">
            Live demo
          </MdButton>
        )}
      </div>
    </RippleHost>
  );
}

export function ProjectsGrid() {
  return (
    <section
      id="work"
      className="scroll-mt-20"
      aria-labelledby="work-heading"
    >
      <h2 id="work-heading" className="md-headline-small text-md-on-surface">
        Selected work
      </h2>
      <p className="mt-2 max-w-2xl md-body-large text-md-on-surface-variant">
        Elevated cards for systems I designed, deployed, and defended in review.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} className="list-none">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
