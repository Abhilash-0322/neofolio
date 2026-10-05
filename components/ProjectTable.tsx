import { Project, projects } from "@/lib/data";

function StatusBadge({ status }: { status: Project["status"] }) {
  const styles = {
    Live: "bg-emerald-500/15 text-emerald-400 ring-emerald-500/30",
    "In progress": "bg-amber-500/15 text-amber-400 ring-amber-500/30",
    Archived: "bg-slate-500/15 text-slate-400 ring-slate-500/30",
  };
  return (
    <span
      className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 ring-inset ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export function ProjectTable() {
  return (
    <section className="rounded-xl border border-panel-border bg-panel-raised">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-panel-border px-5 py-4">
        <div>
          <h2 className="text-sm font-medium text-slate-200">Projects</h2>
          <p className="text-xs text-slate-500">Portfolio systems & repos</p>
        </div>
        <span className="font-mono text-xs text-slate-500">
          {projects.length} rows
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-panel-border text-xs uppercase tracking-wide text-slate-500">
              <th className="px-5 py-3 font-medium">Name</th>
              <th className="px-5 py-3 font-medium">Stack</th>
              <th className="px-5 py-3 font-medium">Status</th>
              <th className="px-5 py-3 font-medium text-right">Commits</th>
              <th className="px-5 py-3 font-medium">Last deploy</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panel-border">
            {projects.map((p) => (
              <tr
                key={p.id}
                className="transition-colors hover:bg-panel/80"
              >
                <td className="px-5 py-3 font-medium text-white">
                  {p.url ? (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent-glow hover:underline"
                    >
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </td>
                <td className="px-5 py-3 text-slate-400">{p.stack}</td>
                <td className="px-5 py-3">
                  <StatusBadge status={p.status} />
                </td>
                <td className="px-5 py-3 text-right font-mono text-slate-300">
                  {p.commits}
                </td>
                <td className="px-5 py-3 font-mono text-xs text-slate-500">
                  {p.lastDeploy}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
