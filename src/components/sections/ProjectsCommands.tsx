import { projects, otherGithub } from "@/data/portfolio";
import { ShellPrompt } from "@/components/ShellPrompt";

export function ProjectsCommands() {
  return (
    <section id="projects" className="px-4 py-16 border-t border-term-border/50">
      <div className="mx-auto max-w-5xl">
        <ShellPrompt path="~/projects" command="ls -la && help" className="mb-2" />
        <p className="term-dim text-xs md:text-sm mb-6 ml-0 md:ml-4">
          Run: <span className="text-term-cyan">./&lt;command&gt;</span> — available commands below
        </p>
        <div className="space-y-4">
          {projects.map((p) => (
            <div key={p.cmd} className="term-window p-4 md:p-5 group hover:border-term-cyan/40 transition-colors">
              <ShellPrompt path={`~/projects/${p.cmd}`} command={`./${p.cmd} --info`} className="mb-3 text-xs md:text-sm" />
              <h3 className="text-term-green text-lg">{p.name}</h3>
              <p className="mt-1">{p.desc}</p>
              {p.stack && (
                <p className="mt-2 text-sm term-dim">
                  stack: <span className="text-term-text">{p.stack}</span>
                </p>
              )}
              <div className="mt-3 flex flex-wrap gap-4 text-sm">
                <a href={p.github} className="term-link" target="_blank" rel="noopener noreferrer">
                  git clone → GitHub
                </a>
                {p.live && (
                  <a href={p.live} className="term-link" target="_blank" rel="noopener noreferrer">
                    curl live → deploy
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 term-dim text-sm border-l-2 border-term-muted/50 pl-4">
          Other GitHub activity: {otherGithub}
        </p>
      </div>
    </section>
  );
}
