import { experience } from "@/lib/portfolio";
import { BrutalBox, SectionLabel, Tag } from "./ui";

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-20 border-b-4 border-brutal-black bg-brutal-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionLabel id="work" index={1}>
          Experience
        </SectionLabel>
        <div className="grid gap-6 lg:grid-cols-12">
          {experience.map((job, i) => (
            <BrutalBox
              key={job.role}
              variant={i === 0 ? "yellow" : "paper"}
              className={`p-6 sm:p-8 ${i === 0 ? "lg:col-span-7" : "lg:col-span-5 lg:row-start-2"}`}
            >
              <p className="font-display text-xs font-bold uppercase tracking-widest text-brutal-muted">
                {job.meta}
              </p>
              <h3 className="mt-2 font-display text-2xl font-black uppercase sm:text-3xl">
                {job.role}
              </h3>
              <p className="font-display text-lg font-bold">{job.org}</p>
              <ul className="mt-4 list-inside list-square space-y-2 font-body text-base leading-relaxed">
                {job.bullets.map((b) => (
                  <li key={b.slice(0, 40)}>{b}</li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </BrutalBox>
          ))}
          <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1">
            <BrutalBox variant="black" className="h-full p-6 sm:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-brutal-lime">
                Shipped systems
              </p>
              <p className="mt-4 font-body text-base leading-relaxed text-brutal-paper/90">
                Emphasis on cloud deployment, production APIs, and AI that works
                beyond demos — aligned with employer and freelance client needs.
              </p>
              <p className="mt-4 font-body text-sm text-brutal-paper/70">
                {profileSnippet()}
              </p>
            </BrutalBox>
          </div>
        </div>
      </div>
    </section>
  );
}

function profileSnippet() {
  return "Also suitable for freelance clients needing APIs, deployments, or production AI features.";
}
