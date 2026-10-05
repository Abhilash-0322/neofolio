import { Section } from "@/components/Section";
import { fintechAlignment, projects } from "@/data/content";

const highlighted = projects.filter((p) => p.fintechRelevant);

export function Fintech() {
  return (
    <Section id="fintech" index="IV" label="Fintech alignment" variant="slate">
      <p className="max-w-3xl font-serif text-lg leading-relaxed text-slate-700 md:text-xl">
        {fintechAlignment.headline}
      </p>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {fintechAlignment.pillars.map((pillar, i) => (
          <article key={pillar.title} className="dossier-card flex flex-col p-6">
            <p className="font-serif text-sm text-trust-gold tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-3 font-serif text-base font-medium text-slate-ink">
              {pillar.title}
            </h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
              {pillar.body}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-10 border border-slate-rule bg-white p-6 md:p-8">
        <p className="label-caps">Exhibits — relevant work</p>
        <ul className="mt-6 divide-y divide-slate-rule">
          {highlighted.map((project) => (
            <li
              key={project.name}
              className="flex flex-col gap-2 py-4 first:pt-0 last:pb-0 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-serif text-sm font-medium text-slate-ink">
                  {project.name}
                </p>
                <p className="text-xs text-slate-500">{project.subtitle}</p>
              </div>
              <a
                href={project.github}
                className="text-sm text-trust-gold underline-offset-4 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View repository
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
