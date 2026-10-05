import { skillGroups } from "@/data/content";

export function SkillsSection() {
  return (
    <section id="skills" className="section-spacing">
      <div className="container-shell">
        <header className="mb-8">
          <p className="kicker">02 / toolkit</p>
          <h2 className="mt-2 font-display text-3xl font-bold">The working stack</h2>
        </header>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.label} className="timetable-card rounded-sm p-5">
              <p className="font-mono text-xs uppercase tracking-widest text-accent">{group.label}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm bg-surface px-2 py-1 font-mono text-[0.72rem] border border-rail/30"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
