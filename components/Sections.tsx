import {
  achievements,
  certifications,
  codingProfiles,
  education,
  profile,
  projects,
  skills,
} from "@/lib/portfolio";
import { BrutalBox, BrutalLink, SectionLabel, Tag } from "./ui";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b-4 border-brutal-black bg-brutal-black py-16 text-brutal-paper sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionLabel id="projects" index={2}>
          Selected work
        </SectionLabel>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, i) => (
            <BrutalBox
              key={p.name}
              variant={i % 3 === 0 ? "lime" : "paper"}
              className={`flex flex-col p-5 ${i === 0 ? "sm:col-span-2 xl:col-span-2" : ""}`}
            >
              <h3 className="font-display text-2xl font-black uppercase text-brutal-black">
                {p.name}
              </h3>
              <p className="mt-2 flex-1 font-body text-sm leading-relaxed text-brutal-black/85">
                {p.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <Tag key={s}>{s}</Tag>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xs font-bold uppercase underline decoration-4 underline-offset-4"
                  >
                    Code
                  </a>
                )}
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display text-xs font-bold uppercase underline decoration-4 underline-offset-4"
                  >
                    Live
                  </a>
                )}
              </div>
            </BrutalBox>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="mb-2 font-display text-sm font-black uppercase">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b-4 border-brutal-black bg-brutal-yellow py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionLabel id="skills" index={3}>
              Stack
            </SectionLabel>
            <div className="space-y-6">
              <SkillGroup title="Languages" items={skills.languages} />
              <SkillGroup title="Backend" items={skills.backend} />
              <SkillGroup title="Frontend" items={skills.frontend} />
              <SkillGroup title="Data" items={skills.data} />
              <SkillGroup title="Platform" items={skills.platform} />
            </div>
          </div>
          <div className="space-y-6 lg:col-span-7">
            <BrutalBox className="p-6 sm:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-widest">
                Education
              </p>
              <p className="mt-2 font-display text-xl font-black uppercase">
                {education.degree}
              </p>
              <p className="font-body font-medium">{education.school}</p>
              <p className="font-body text-sm">{education.year}</p>
              <p className="mt-3 font-body text-sm text-brutal-muted">
                {education.secondary}
              </p>
            </BrutalBox>
            <BrutalBox variant="black" className="p-6 sm:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-widest text-brutal-lime">
                Certifications
              </p>
              <ul className="mt-3 space-y-2 font-body text-brutal-paper">
                {certifications.map((c) => (
                  <li key={c} className="border-l-4 border-brutal-lime pl-3">
                    {c}
                  </li>
                ))}
              </ul>
            </BrutalBox>
            <BrutalBox variant="lime" className="p-6 sm:p-8">
              <p className="font-display text-xs font-bold uppercase tracking-widest">
                Recognition
              </p>
              <ul className="mt-3 list-inside list-square space-y-2 font-body text-sm sm:text-base">
                {achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </BrutalBox>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  const links = [
    { label: "Email", href: `mailto:${profile.contact.email}` },
    { label: "GitHub", href: profile.contact.github },
    { label: "LinkedIn", href: profile.contact.linkedin },
    { label: "X", href: profile.contact.x },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-brutal-paper py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <SectionLabel id="contact" index={4}>
              Let&apos;s build
            </SectionLabel>
            <p className="max-w-md font-body text-lg leading-relaxed">
              Open to cloud, backend, and AI systems roles — and freelance work on
              APIs, deployments, and production AI.
            </p>
            <p className="mt-4 font-display text-2xl font-black uppercase">
              {profile.contact.phone}
            </p>
            <p className="font-body font-medium">{profile.contact.email}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {links.map((l) => (
                <BrutalLink key={l.label} href={l.href}>
                  {l.label}
                </BrutalLink>
              ))}
            </div>
            <div className="mt-6">
              <BrutalLink href={profile.resumePath} external={false}>
                Download resume (PDF)
              </BrutalLink>
            </div>
          </div>
          <BrutalBox variant="yellow" className="p-6 sm:p-8">
            <p className="font-display text-sm font-black uppercase">
              Coding profiles
            </p>
            <ul className="mt-4 space-y-3">
              {codingProfiles.map((cp) => (
                <li key={cp.label}>
                  <a
                    href={cp.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between border-b-2 border-brutal-black pb-2 font-display text-lg font-bold uppercase"
                  >
                    {cp.label}
                    <span className="text-2xl transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </BrutalBox>
        </div>
        <footer className="mt-16 border-t-4 border-brutal-black pt-6 font-display text-xs font-bold uppercase tracking-widest text-brutal-muted">
          © {new Date().getFullYear()} {profile.name} · Neo-brutalist portfolio
        </footer>
      </div>
    </section>
  );
}
