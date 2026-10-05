import { projects } from "@/data/content";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-spacing">
      <div className="container-shell">
        <header className="mb-8">
          <p className="kicker">03 / selected work</p>
          <h2 className="mt-2 font-display text-3xl font-bold">Proof, not promises</h2>
          <p className="mt-2 max-w-2xl text-muted">
            Shipped systems across hiring AI, Solana agents, security tooling, RAG, and full-stack products.
          </p>
        </header>

        <div className="space-y-0 border-2 border-rail/50 bg-panel">
          <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b-2 border-rail/50 bg-surface px-4 py-2 font-mono text-[0.65rem] uppercase tracking-widest text-muted sm:grid-cols-[8rem_1fr_auto_auto]">
            <span className="hidden sm:inline">Project</span>
            <span>What it does</span>
            <span>Repo</span>
            <span>Live</span>
          </div>
          {projects.map((project, index) => (
            <article
              key={project.name}
              className="grid grid-cols-1 gap-2 border-b border-dashed border-rail/40 px-4 py-4 font-mono text-sm last:border-b-0 sm:grid-cols-[8rem_1fr_auto_auto] sm:items-center"
            >
              <p className="font-display text-base font-semibold text-ink">{project.name}</p>
              <div>
                <p className="text-xs text-accent">{project.line}</p>
                <p className="mt-1 text-[0.78rem] leading-relaxed text-muted">{project.description}</p>
              </div>
              <a className="cta-btn text-[0.65rem] py-1" href={project.href} target="_blank" rel="noreferrer">
                GitHub
              </a>
              {project.live ? (
                <a className="cta-btn cta-btn-primary text-[0.65rem] py-1" href={project.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              ) : (
                <span className="text-xs text-muted px-2">—</span>
              )}
              <span className="sr-only">Row {index + 1}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
