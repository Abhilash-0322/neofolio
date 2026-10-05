import { profile, experience, certifications } from "@/lib/data";

export function HeroDashboard() {
  return (
    <header className="panel overflow-hidden">
      <div className="panel-header">
        <span>Profile · live</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-metric" />
          available
        </span>
      </div>
      <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="font-mono text-xs text-accent">{profile.titles[0]}</p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 font-mono text-xs text-slate-500">{profile.location}</p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-400">
            {profile.bio}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.titles.slice(1).map((t) => (
              <span
                key={t}
                className="rounded border border-accent/30 bg-accent/5 px-2 py-1 font-mono text-[10px] text-accent"
              >
                {t}
              </span>
            ))}
          </div>
          <nav className="mt-6 flex flex-wrap gap-4 font-mono text-xs">
            <a href={`mailto:${profile.email}`} className="text-slate-300 hover:text-accent">
              Email
            </a>
            <a href={profile.github} className="text-slate-300 hover:text-accent" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={profile.linkedin} className="text-slate-300 hover:text-accent" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={profile.x} className="text-slate-300 hover:text-accent" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </nav>
        </div>
        <div className="space-y-4 border-t border-grid pt-4 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
          <div>
            <p className="font-mono text-[10px] uppercase text-slate-500">Timeline</p>
            <ul className="mt-2 space-y-3">
              {experience.map((e) => (
                <li key={e.org} className="relative border-l-2 border-accent2/50 pl-3">
                  <p className="text-sm font-medium text-slate-200">{e.role}</p>
                  <p className="font-mono text-[10px] text-slate-500">
                    {e.org} · {e.period}
                  </p>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {e.highlights.map((h) => (
                      <span key={h} className="text-[10px] text-slate-600">
                        {h}
                      </span>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase text-slate-500">Certs</p>
            <ul className="mt-2 space-y-1">
              {certifications.map((c) => (
                <li key={c} className="flex items-center gap-2 font-mono text-xs text-slate-400">
                  <span className="h-1 w-4 bg-metric" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
