"use client";

import { useCallback, useState } from "react";
import {
  achievements,
  certifications,
  codingProfiles,
  education,
  experience,
  profile,
  projects,
  sections,
  skillGroups,
  type SectionId,
} from "@/lib/content";
import { AccordionPanel } from "./AccordionPanel";
import { CompactNav } from "./CompactNav";

const defaultOpen = new Set<SectionId>(["about"]);

export function PortfolioAccordion() {
  const [openSections, setOpenSections] = useState<Set<SectionId>>(defaultOpen);

  const toggle = useCallback((id: SectionId) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const navigate = useCallback((id: SectionId) => {
    setOpenSections((prev) => new Set(prev).add(id));
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  const isOpen = (id: SectionId) => openSections.has(id);

  return (
    <>
      <header className="border-b border-surface-border bg-surface px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-widest text-accent">
            Portfolio
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm text-zinc-400 sm:text-base">
            {profile.titles.slice(0, 2).join(" · ")}
          </p>
          <p className="mt-1 text-sm text-zinc-500">{profile.location}</p>
        </div>
      </header>

      <CompactNav openSections={openSections} onNavigate={navigate} />

      <main className="mx-auto max-w-3xl">
        <AccordionPanel
          id="about"
          title="About"
          summary={profile.bio.slice(0, 120) + "…"}
          isOpen={isOpen("about")}
          onToggle={() => toggle("about")}
        >
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
            {profile.bio}
          </p>
          <p className="mt-4 text-sm text-zinc-500">
            Focus: cloud infrastructure, backend & APIs, systems engineering, AI
            agents & RAG. Open to cloud, AI systems, and fintech-oriented roles,
            plus freelance API and deployment work.
          </p>
        </AccordionPanel>

        <AccordionPanel
          id="experience"
          title="Work experience"
          summary="Spearmint Technologies · Innogeeks Club, KIET"
          isOpen={isOpen("experience")}
          onToggle={() => toggle("experience")}
        >
          <ul className="space-y-6">
            {experience.map((job) => (
              <li key={job.org + job.role}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-semibold text-zinc-100">{job.role}</h3>
                  <span className="text-xs text-zinc-500">{job.meta}</span>
                </div>
                <p className="text-sm text-accent-muted">{job.org}</p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-zinc-400">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </AccordionPanel>

        <AccordionPanel
          id="education"
          title="Education & certifications"
          summary="B.Tech IT at KIET · AWS CCP"
          isOpen={isOpen("education")}
          onToggle={() => toggle("education")}
        >
          <ul className="space-y-4">
            {education.map((e) => (
              <li key={e.degree}>
                <h3 className="font-medium text-zinc-100">{e.degree}</h3>
                <p className="text-sm text-zinc-400">{e.school}</p>
                {e.meta && (
                  <p className="text-xs text-zinc-500">{e.meta}</p>
                )}
              </li>
            ))}
          </ul>
          <h3 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Certifications
          </h3>
          <ul className="list-inside list-disc text-sm text-zinc-400">
            {certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </AccordionPanel>

        <AccordionPanel
          id="skills"
          title="Technical skills"
          summary="Python, FastAPI, Next.js, AWS, RAG…"
          isOpen={isOpen("skills")}
          onToggle={() => toggle("skills")}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.name}>
                <h3 className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                  {g.name}
                </h3>
                <p className="mt-1.5 text-sm text-zinc-300">
                  {g.items.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </AccordionPanel>

        <AccordionPanel
          id="projects"
          title="Selected projects"
          summary="TalentInfra, SolSniff, ChainSentinel, RAG, and more"
          isOpen={isOpen("projects")}
          onToggle={() => toggle("projects")}
        >
          <ul className="space-y-5">
            {projects.map((p) => (
              <li
                key={p.name}
                className="rounded-lg border border-surface-border bg-surface-raised/50 p-4"
              >
                <h3 className="font-semibold text-zinc-100">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-400">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-sm">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    GitHub
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      Live demo
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </AccordionPanel>

        <AccordionPanel
          id="achievements"
          title="Achievements & coding profiles"
          summary="Hackathon wins, patent, open source"
          isOpen={isOpen("achievements")}
          onToggle={() => toggle("achievements")}
        >
          <ul className="list-inside list-disc space-y-2 text-sm text-zinc-400">
            {achievements.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <h3 className="mb-2 mt-6 text-sm font-semibold uppercase tracking-wide text-zinc-500">
            Coding profiles
          </h3>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {codingProfiles.map((c) => (
              <li key={c.label}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </AccordionPanel>

        <AccordionPanel
          id="contact"
          title="Contact"
          summary={profile.email}
          isOpen={isOpen("contact")}
          onToggle={() => toggle("contact")}
        >
          <dl className="grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-zinc-500">Email</dt>
              <dd>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-accent hover:underline"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">Phone</dt>
              <dd className="text-zinc-300">{profile.phone}</dd>
            </div>
            <div>
              <dt className="text-zinc-500">GitHub</dt>
              <dd>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  @Abhilash-0322
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">LinkedIn</dt>
              <dd>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Profile
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-zinc-500">X</dt>
              <dd>
                <a
                  href={profile.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  @abhilash_glitch
                </a>
              </dd>
            </div>
          </dl>
        </AccordionPanel>
      </main>

      <footer className="mx-auto max-w-3xl px-4 py-8 text-center text-xs text-zinc-600 sm:px-6">
        {sections.length} sections · expand or collapse any panel ·{" "}
        {profile.name}
      </footer>
    </>
  );
}
