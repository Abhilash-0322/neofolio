import { achievements, codingProfiles } from "@/data/content";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-spacing">
      <div className="container-shell grid gap-8 lg:grid-cols-2">
        <div>
          <header className="mb-6">
            <p className="kicker">Section D · milestones</p>
            <h2 className="mt-2 font-display text-3xl font-bold">Signals passed</h2>
          </header>
          <ul className="timetable-card rounded-sm divide-y divide-dashed divide-rail/40 p-2">
            {achievements.map((item) => (
              <li key={item} className="flex gap-3 px-4 py-3 text-sm leading-relaxed">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-signal" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <header className="mb-6">
            <p className="kicker">Section E · practice yards</p>
            <h2 className="mt-2 font-display text-3xl font-bold">Coding profiles</h2>
          </header>
          <ul className="space-y-3">
            {codingProfiles.map((profile) => (
              <li key={profile.name}>
                <a
                  href={profile.href}
                  target="_blank"
                  rel="noreferrer"
                  className="timetable-card flex items-center justify-between rounded-sm px-5 py-4 font-mono text-sm transition hover:text-accent"
                >
                  {profile.name}
                  <span className="text-accent">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
