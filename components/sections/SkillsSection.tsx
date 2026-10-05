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
          <p className="text-sm uppercase tracking-[0.3em] text-luxury-copper dark:text-luxury-blush/80">
            Toolkit
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold text-luxury-ink md:text-5xl">
            Technical skills
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.key} delay={i * 0.05}>
              <div className="glass-luxury h-full rounded-2xl p-5">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-luxury-muted">
                  {g.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {skills[g.key].map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-luxury-border bg-black/[0.03] px-3 py-1 text-xs text-luxury-muted dark:bg-white/5"
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
          <div className="glass-luxury rounded-2xl p-6">
            <h3 className="font-display text-xl font-semibold text-luxury-ink">Coding profiles</h3>
            <div className="mt-4 flex flex-wrap gap-4">
              {codingProfiles.map((p) => (
                <a
                  key={p.name}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-luxury-copper transition hover:text-luxury-gold dark:text-luxury-gold dark:hover:text-luxury-champagne"
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
