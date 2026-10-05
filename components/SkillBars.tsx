import { skillBars } from "@/lib/data";

const groups = Array.from(new Set(skillBars.map((s) => s.group)));

export function SkillBars() {
  return (
    <section className="panel" aria-labelledby="skills-heading">
      <div className="panel-header">
        <span id="skills-heading">Skill distribution</span>
        <span className="text-accent">n={skillBars.length}</span>
      </div>
      <div className="space-y-6 p-4">
        {groups.map((group) => (
          <div key={group}>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent2">
              {group}
            </p>
            <ul className="space-y-3">
              {skillBars
                .filter((s) => s.group === group)
                .map((skill) => (
                  <li key={skill.label}>
                    <div className="mb-1 flex justify-between font-mono text-xs">
                      <span>{skill.label}</span>
                      <span className="tabular-nums text-slate-500">
                        {skill.value}%
                      </span>
                    </div>
                    <div className="skill-track" role="meter" aria-valuenow={skill.value} aria-valuemin={0} aria-valuemax={100}>
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.value}%` }}
                      />
                      <div
                        className="absolute inset-y-0 border-r border-accent/30"
                        style={{ left: "50%" }}
                        aria-hidden
                      />
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
