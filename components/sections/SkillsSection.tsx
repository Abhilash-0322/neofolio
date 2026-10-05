import { codingProfiles, skills } from "@/data/content";
import { Reveal } from "@/components/ui/Reveal";

const groups: { key: keyof typeof skills; label: string }[] = [
  { key: "languages", label: "Languages" },
  { key: "backend", label: "Backend" },
  { key: "frontend", label: "Frontend" },
  { key: "data", label: "Data" },
  { key: "platform", label: "Platform" },
];

export function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.3em] text-coffee-caramel">Toolkit</p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-coffee-ink md:text-5xl">
            Technical skills
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.key} delay={i * 0.05}>
              <div className="cafe-card h-full p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-coffee-muted">
                  {g.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {skills[g.key].map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-coffee-roast/10 bg-coffee-foam/40 px-3 py-1 text-xs text-coffee-muted dark:border-white/10 dark:bg-white/5"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="cafe-card p-6">
            <h3 className="font-display text-xl font-semibold text-coffee-ink">Coding profiles</h3>
            <div className="mt-4 flex flex-wrap gap-4">
              {codingProfiles.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-coffee-accent transition hover:text-coffee-caramel"
                >
                  {p.name} ↗
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
