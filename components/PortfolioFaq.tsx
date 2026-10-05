"use client";

import { useState } from "react";
import {
  achievements,
  experience,
  profile,
  projects,
  questions,
  skillGroups,
  type QuestionId,
} from "@/lib/content";

function LinkArrow() {
  return <span aria-hidden="true" className="ml-1 inline-block transition-transform group-hover:translate-x-1">↗</span>;
}

export function PortfolioFaq() {
  const [open, setOpen] = useState<QuestionId>("about");

  const toggle = (id: QuestionId) => {
    setOpen((current) => (current === id ? "" as QuestionId : id));
  };

  return (
    <div className="paper-grid min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6 sm:px-8">
        <a href="#" className="font-mono text-sm font-medium tracking-tight text-ink">
          AM<span className="text-rust">.</span>
        </a>
        <div className="flex items-center gap-4 text-xs text-ink/60 sm:gap-6">
          <span className="hidden font-mono sm:inline">PORTFOLIO / 2026</span>
          <a className="transition-colors hover:text-rust" href={`mailto:${profile.email}`}>
            Say hello <LinkArrow />
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 pb-20 sm:px-8">
        <section className="grid gap-10 border-b border-line pb-14 pt-16 lg:grid-cols-[1fr_360px] lg:gap-20 lg:pb-20 lg:pt-24">
          <div>
            <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-rust">
              <span className="h-2 w-2 rounded-full bg-rust" />
              Available for interesting problems
            </p>
            <h1 className="max-w-3xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-ink sm:text-7xl lg:text-[6.5rem]">
              Build the useful
              <span className="block font-serif italic text-rust">layer.</span>
            </h1>
          </div>
          <div className="flex flex-col justify-end">
            <p className="max-w-sm text-lg leading-relaxed text-ink/70">
              Backend, AI systems, and cloud infrastructure for products that need to work beyond the demo.
            </p>
            <div className="mt-8 flex gap-5 font-mono text-xs uppercase tracking-wide text-ink/60">
              <a className="group hover:text-rust" href={profile.github} target="_blank" rel="noreferrer">
                GitHub <LinkArrow />
              </a>
              <a className="group hover:text-rust" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <LinkArrow />
              </a>
            </div>
          </div>
        </section>

        <nav className="flex gap-2 overflow-x-auto border-b border-line py-5" aria-label="Portfolio sections">
          {questions.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setOpen(item.id);
                document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className={`shrink-0 rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                open === item.id
                  ? "border-ink bg-ink text-paper"
                  : "border-line text-ink/60 hover:border-ink/50 hover:text-ink"
              }`}
            >
              {item.short}
            </button>
          ))}
        </nav>

        <section className="border-b border-line" aria-label="Frequently asked questions">
          {questions.map((item) => {
            const isOpen = open === item.id;
            return (
              <article id={item.id} key={item.id} className="scroll-mt-8 border-b border-line last:border-b-0">
                <h2>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`${item.id}-answer`}
                    onClick={() => toggle(item.id)}
                    className="group flex w-full items-center gap-5 py-7 text-left sm:py-9"
                  >
                    <span className="w-8 shrink-0 font-mono text-xs text-rust">{item.number}</span>
                    <span className={`flex-1 text-2xl font-medium tracking-[-0.03em] transition-colors sm:text-4xl ${isOpen ? "text-ink" : "text-ink/65 group-hover:text-ink"}`}>
                      {item.question}
                    </span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-2xl font-light leading-none transition-all ${isOpen ? "rotate-45 border-rust bg-rust text-paper" : "text-ink/50 group-hover:border-ink/50"}`}>
                      +
                    </span>
                  </button>
                </h2>
                {isOpen && (
                  <div id={`${item.id}-answer`} role="region" className="faq-answer pb-10 pl-12 pr-2 sm:pl-16 sm:pr-14">
                    <Answer id={item.id} />
                  </div>
                )}
              </article>
            );
          })}
        </section>

        <footer className="flex flex-col gap-5 pt-8 text-xs text-ink/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 {profile.name}. Built with care in Delhi NCR.</p>
          <p className="font-mono uppercase tracking-widest">Ask better questions.</p>
        </footer>
      </main>
    </div>
  );
}

function Answer({ id }: { id: QuestionId }) {
  if (id === "about") {
    return (
      <div className="grid gap-6 lg:grid-cols-[1fr_240px]">
        <p className="max-w-2xl text-xl leading-relaxed text-ink/75 sm:text-2xl">{profile.bio}</p>
        <div className="border-l border-line pl-5 text-sm leading-relaxed text-ink/55">
          <p className="font-mono text-[10px] uppercase tracking-widest text-rust">Currently</p>
          <p className="mt-2">B.Tech Information Technology at KIET, expected 2027.</p>
          <p className="mt-4">Based in {profile.location}.</p>
        </div>
      </div>
    );
  }

  if (id === "experience") {
    return (
      <div className="space-y-8">
        {experience.map((job) => (
          <div key={job.org} className="grid gap-2 sm:grid-cols-[180px_1fr] sm:gap-8">
            <div>
              <p className="font-mono text-xs text-rust">{job.date}</p>
              <p className="mt-1 text-sm text-ink/55">{job.org}</p>
            </div>
            <div>
              <h3 className="text-xl font-medium">{job.role}</h3>
              <ul className="mt-3 list-disc space-y-2 pl-4 text-sm leading-relaxed text-ink/65">
                {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (id === "projects") {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <div key={project.name} className="rounded-lg border border-line bg-cream/70 p-5 transition-colors hover:border-rust/60">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-medium">{project.name}</h3>
              <span className="font-mono text-[10px] uppercase text-rust">{project.tag}</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink/65">{project.description}</p>
            <p className="mt-4 font-mono text-[10px] leading-relaxed text-ink/45">{project.stack}</p>
            <div className="mt-5 flex gap-4 text-xs">
              <a className="group text-rust hover:underline" href={project.github} target="_blank" rel="noreferrer">Source <LinkArrow /></a>
              {project.live && <a className="group text-ink/60 hover:text-ink hover:underline" href={project.live} target="_blank" rel="noreferrer">Live <LinkArrow /></a>}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (id === "stack") {
    return (
      <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <h3 className="font-mono text-xs uppercase tracking-widest text-rust">{group.name}</h3>
            <p className="mt-2 text-lg leading-relaxed text-ink/70">{group.items}</p>
          </div>
        ))}
      </div>
    );
  }

  if (id === "proof") {
    return (
      <ul className="grid gap-4 sm:grid-cols-2">
        {achievements.map((achievement) => (
          <li key={achievement} className="border-l-2 border-olive pl-4 text-base leading-relaxed text-ink/70">{achievement}</li>
        ))}
      </ul>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
      <div>
        <p className="max-w-lg text-2xl leading-relaxed text-ink/75">Have a backend, AI, or cloud problem worth solving? Tell me what you&apos;re working on.</p>
        <a className="mt-5 inline-block text-lg text-rust underline decoration-rust/30 underline-offset-4 hover:decoration-rust" href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>
      <div className="space-y-2 text-sm text-ink/60">
        <a className="block hover:text-rust" href={profile.github} target="_blank" rel="noreferrer">GitHub <LinkArrow /></a>
        <a className="block hover:text-rust" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <LinkArrow /></a>
        <a className="block hover:text-rust" href={`tel:${profile.phone}`}>{profile.phone}</a>
      </div>
    </div>
  );
}
