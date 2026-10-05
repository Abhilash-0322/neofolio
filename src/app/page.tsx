import { BentoCard } from "@/components/BentoCard";
import { ProjectCell } from "@/components/ProjectCell";
import { SkillTile } from "@/components/SkillTile";
import {
  achievements,
  certifications,
  codingProfiles,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/lib/data";

const featured = projects.filter((p) => p.featured);
const other = projects.filter((p) => !p.featured);

export default function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Portfolio
          </p>
          <h1 className="mt-1 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm text-text-secondary">
            {profile.titles.join(" · ")}
          </p>
        </div>
        <p className="text-xs text-text-tertiary">{profile.location}</p>
      </header>

      <div className="grid auto-rows-min grid-cols-1 gap-3 sm:grid-cols-6 sm:gap-4">
        {/* Hero — wide */}
        <BentoCard className="sm:col-span-4 sm:row-span-2 sm:p-6">
          <p className="text-xs font-medium text-accent">Available for cloud & AI roles</p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-text-secondary sm:text-base">
            {profile.bio}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <BentoCard
              as="a"
              href={`mailto:${profile.email}`}
              className="!rounded-xl !p-3 !shadow-none hover:!shadow-none"
            >
              <span className="block text-[10px] uppercase text-text-tertiary">Email</span>
              <span className="text-xs text-text-primary">{profile.email}</span>
            </BentoCard>
            <BentoCard
              as="a"
              href={profile.github}
              className="!rounded-xl !p-3 !shadow-none hover:!shadow-none"
            >
              <span className="block text-[10px] uppercase text-text-tertiary">GitHub</span>
              <span className="text-xs text-text-primary">Abhilash-0322</span>
            </BentoCard>
            <BentoCard
              as="a"
              href={profile.linkedin}
              className="!rounded-xl !p-3 !shadow-none hover:!shadow-none"
            >
              <span className="block text-[10px] uppercase text-text-tertiary">LinkedIn</span>
              <span className="text-xs text-text-primary">Connect</span>
            </BentoCard>
          </div>
        </BentoCard>

        {/* Status stack */}
        <BentoCard className="sm:col-span-2" interactive={false}>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
            Education
          </h2>
          <p className="mt-2 text-sm font-medium text-text-primary">{education.degree}</p>
          <p className="text-xs text-text-secondary">{education.school}</p>
          <p className="mt-1 text-xs text-text-tertiary">{education.year}</p>
        </BentoCard>

        <BentoCard className="sm:col-span-2" interactive={false}>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
            Certifications
          </h2>
          <ul className="mt-2 space-y-1.5">
            {certifications.map((c) => (
              <li key={c} className="text-xs text-text-secondary">{c}</li>
            ))}
          </ul>
        </BentoCard>

        {/* Skills mosaic */}
        <BentoCard className="sm:col-span-6" interactive={false}>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {skillGroups.map((s) => (
              <SkillTile key={s.label} label={s.label} />
            ))}
          </div>
        </BentoCard>

        {/* Featured projects — large cells */}
        <div className="sm:col-span-6">
          <h2 className="mb-3 px-1 text-xs font-semibold uppercase tracking-wider text-text-tertiary">
            Selected work
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-6 sm:gap-4">
            {featured.map((project, i) => (
              <div
                key={project.name}
                className={
                  i === 0
                    ? "sm:col-span-4"
                    : i === 1
                      ? "sm:col-span-2"
                      : "sm:col-span-3"
                }
              >
                <ProjectCell project={project} large={i < 2} />
              </div>
            ))}
          </div>
        </div>

        {/* More projects */}
        <div className="grid grid-cols-1 gap-3 sm:col-span-6 sm:grid-cols-3 sm:gap-4">
          {other.map((project) => (
            <ProjectCell key={project.name} project={project} />
          ))}
        </div>

        {/* Experience */}
        <BentoCard className="sm:col-span-4" interactive={false}>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
            Experience
          </h2>
          <ul className="mt-3 space-y-4">
            {experience.map((job) => (
              <li key={job.role}>
                <p className="text-sm font-medium text-text-primary">
                  {job.role}
                  <span className="font-normal text-text-secondary"> — {job.org}</span>
                </p>
                <p className="text-xs text-text-tertiary">{job.period}</p>
                <p className="mt-1 text-xs leading-relaxed text-text-secondary">{job.detail}</p>
              </li>
            ))}
          </ul>
        </BentoCard>

        <BentoCard className="sm:col-span-2" interactive={false}>
          <h2 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
            Highlights
          </h2>
          <ul className="mt-3 space-y-2">
            {achievements.map((a) => (
              <li key={a} className="text-xs leading-snug text-text-secondary">
                {a}
              </li>
            ))}
          </ul>
        </BentoCard>

        {/* Coding profiles */}
        <BentoCard className="sm:col-span-6 sm:flex sm:items-center sm:justify-between" interactive={false}>
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
              Coding profiles
            </h2>
            <p className="mt-1 text-xs text-text-secondary">
              Competitive programming & practice
            </p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 sm:mt-0">
            {codingProfiles.map((cp) => (
              <a
                key={cp.label}
                href={cp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-surface-border bg-surface-raised px-3 py-1.5 text-xs text-text-secondary transition hover:-translate-y-0.5 hover:border-accent/40 hover:text-text-primary"
              >
                {cp.label}
              </a>
            ))}
          </div>
        </BentoCard>
      </div>

      <footer className="mt-10 border-t border-surface-border pt-6 text-center text-xs text-text-tertiary">
        <a href={profile.x} className="hover:text-text-secondary" target="_blank" rel="noopener noreferrer">
          @abhilash_glitch
        </a>
        <span className="mx-2">·</span>
        <span>{profile.phone}</span>
      </footer>
    </main>
  );
}
