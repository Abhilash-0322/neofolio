import { projects, site } from "@/data/content";
import { ZenSection } from "@/components/zen/ZenSection";

export function Works() {
  return (
    <ZenSection id="works" kana="作" title="Selected works">
      <div className="space-y-16">
        {projects.map((project) => (
          <article
            key={project.name}
            className="border-b border-sumi/5 pb-16 last:border-0 last:pb-0"
          >
            <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h3 className="font-serif text-xl text-sumi">{project.name}</h3>
              <span className="text-xs text-sumi-faint">{project.subtitle}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-sumi-muted">
              {project.description}
            </p>
            <p className="mt-3 text-xs text-sumi-faint">{project.stack}</p>
            <div className="mt-5 flex gap-6 text-xs tracking-zen">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sumi-muted transition-colors hover:text-moss"
              >
                Source
              </a>
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sumi-muted transition-colors hover:text-moss"
                >
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <p className="mt-20 text-xs leading-relaxed text-sumi-faint">
        {site.otherActivity}
      </p>
    </ZenSection>
  );
}
