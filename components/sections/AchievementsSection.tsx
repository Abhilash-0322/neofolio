import { achievements, codingProfiles } from "@/data/content";

export function AchievementsSection() {
  return (
    <section className="mb-12" aria-labelledby="achievements-heading">
      <h2 id="achievements-heading" className="section-label">Recognition</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-ink">
        {achievements.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="mt-8 font-hand text-xl text-accent">Coding profiles</h3>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm">
        {codingProfiles.map((profile) => (
          <li key={profile.name}>
            <a href={profile.href} className="ink-link" target="_blank" rel="noreferrer">
              {profile.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
