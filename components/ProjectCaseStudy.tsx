import type { Project } from "@/lib/portfolio";

type ProjectCaseStudyProps = {
  project: Project;
  index: number;
};

export function ProjectCaseStudy({ project, index }: ProjectCaseStudyProps) {
  const issue = String(index + 1).padStart(2, "0");

  return (
    <article
      id={project.slug}
      className="scroll-mt-24 border-t border-rule pt-14 first:border-t-0 first:pt-0 md:pt-20"
    >
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <header className="lg:col-span-4">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-accent">
            Case study {issue}
          </p>
          <h2 className="mt-3 font-display text-4xl leading-tight md:text-5xl">
            {project.title}
          </h2>
          <p className="mt-4 font-sans text-sm uppercase tracking-wide text-ink/70">
            {project.subtitle}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 font-sans text-xs uppercase tracking-wide">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="border border-rule px-2 py-1 text-ink/80"
              >
                {tech}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-2 font-sans text-sm">
            {project.github && (
              <a
                href={project.github}
                className="underline decoration-rule underline-offset-4 hover:text-accent"
              >
                Source repository
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                className="underline decoration-rule underline-offset-4 hover:text-accent"
              >
                Live deployment
              </a>
            )}
          </div>
        </header>
        <div className="lg:col-span-8">
          <div className="columns-body space-y-0">
            {project.blurb.map((paragraph, i) => (
              <p
                key={i}
                className={`mb-5 break-inside-avoid ${i === 0 ? "drop-cap" : ""}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
