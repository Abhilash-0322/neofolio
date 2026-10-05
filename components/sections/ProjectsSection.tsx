import { projects } from "@/data/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="mb-12 scroll-mt-20" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-label">Selected projects</h2>
      <ul className="mt-4 space-y-5">
        {projects.map((project) => (
          <li key={project.name} className="journal-card p-5">
            <div className="flex flex-wrap items-start justify-between gap-2">
              <h3 className="text-xl font-semibold text-ink">{project.name}</h3>
              <div className="flex gap-3 font-mono text-xs">
                <a href={project.href} className="ink-link" target="_blank" rel="noreferrer">
                  Code
                </a>
                {project.live ? (
                  <a href={project.live} className="ink-link" target="_blank" rel="noreferrer">
                    Live
                  </a>
                ) : null}
              </div>
            </div>
            <p className="mt-1 text-muted">{project.tagline}</p>
            <p className="mt-2 font-mono text-xs text-muted/90">{project.stack.join(" · ")}</p>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-muted">
        Also active on open source (OpenClaw, Gemini CLI), agent tooling, finance-tracker, and a Tauri/Rust Minecraft launcher—see GitHub for more.
      </p>
    </section>
  );
}
