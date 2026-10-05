import { achievements, codingProfiles, skillGroups } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative border-t border-lab-border px-4 py-24 sm:px-6"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="04"
          title="Capabilities & recognition"
          subtitle="Stack depth across backend, data, and platform — plus competitive and open-source track record."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label} className="card-lab p-5">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-lab-accent">
                  {group.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-lab-border px-2 py-1 text-xs text-lab-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="card-lab p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-lab-sub">
                Achievements
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-lab-sub">
                {achievements.map((a) => (
                  <li key={a} className="flex gap-2">
                    <span className="text-lab-synapse" aria-hidden>◆</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-lab p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-lab-sub">
                Coding profiles
              </h3>
              <ul className="mt-4 flex flex-wrap gap-3">
                {codingProfiles.map((p) => (
                  <li key={p.label}>
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-lab-border px-3 py-2 font-mono text-xs text-lab-ink transition-colors hover:border-lab-accent hover:text-lab-accent"
                    >
                      {p.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
