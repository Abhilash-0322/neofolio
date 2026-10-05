"use client";

import { ChapterSection } from "@/components/ChapterSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { profile } from "@/data/profile";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="pb-32 pt-28">
      {/* Opening */}
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted">
            Portfolio · {profile.location}
          </p>
          <h1 className="font-display text-5xl font-medium leading-[1.1] tracking-tight text-ink md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-2xl font-display text-2xl text-ink/70 md:text-3xl">
            {profile.titles[2]}
            <span className="text-muted"> · </span>
            {profile.titles[0]}
          </p>
          <p className="mt-10 max-w-2xl prose-narrative text-muted md:text-lg">
            Four chapters on how I learned to build systems that leave the
            notebook—and ship on real infrastructure.
          </p>
        </motion.div>
      </div>

      {/* Chapter 01 — Genesis */}
      <ChapterSection number="01" title="Genesis" id="genesis">
        <ScrollReveal>
          <p className="prose-narrative">
            Every backend has an origin story. Mine started in{" "}
            <strong>{profile.education[1].school}</strong>, moved through{" "}
            <strong>{profile.education[0].school}</strong> (
            {profile.education[0].detail}), and settled into a rhythm:
            understand the problem, model the data, then let the API do the
            talking.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="prose-narrative">
            {profile.bio.split(".")[0]}.
            {profile.bio.slice(profile.bio.indexOf(".") + 1)}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="rounded-lg border border-ink/10 bg-chapter/5 p-6 md:p-8">
            <h3 className="font-display text-xl text-ink">Focus</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {profile.focus.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-ink/15 px-3 py-1 text-sm text-ink/80"
                >
                  {f}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Certifications: {profile.certifications.join(" · ")}
            </p>
          </div>
        </ScrollReveal>
      </ChapterSection>

      {/* Chapter 02 — Builder */}
      <ChapterSection number="02" title="Builder" id="builder">
        <ScrollReveal>
          <p className="prose-narrative">
            Building is not a single stack—it is a sequence of contracts between
            services, databases, and people. At{" "}
            <strong>{profile.experience[1].company}</strong> (
            {profile.experience[1].period}), I{" "}
            {profile.experience[1].bullets![0].toLowerCase()}.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ul className="space-y-3 border-l-2 border-accent/30 pl-6 text-ink/85">
            {profile.experience[1].bullets!.slice(1).map((b) => (
              <li key={b} className="prose-narrative text-base md:text-lg">
                {b}
              </li>
            ))}
          </ul>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <p className="prose-narrative">
            More recently, as <strong>{profile.experience[0].role}</strong> at{" "}
            <strong>{profile.experience[0].company}</strong> (
            {profile.experience[0].modality}), I worked on{" "}
            {profile.experience[0].summary}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(profile.skills).map(([group, items]) => (
              <div
                key={group}
                className="rounded-lg border border-ink/10 p-5"
              >
                <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {group}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">
                  {items.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </ChapterSection>

      {/* Chapter 03 — Intelligence */}
      <ChapterSection number="03" title="Intelligence" id="intelligence">
        <ScrollReveal>
          <p className="prose-narrative">
            Intelligence, in production, means retrieval that respects context,
            agents that stay within guardrails, and models wired to{" "}
            <strong>FastAPI</strong> and <strong>Next.js</strong> fronts—not
            slides. These projects are where that definition became concrete.
          </p>
        </ScrollReveal>
        {profile.projects.map((project, i) => (
          <ScrollReveal key={project.name} delay={0.05 * (i % 4)}>
            <article className="group border-b border-ink/10 py-8 last:border-0">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-2xl text-ink group-hover:text-accent transition-colors">
                  {project.name}
                  {project.context && (
                    <span className="ml-2 text-base font-body text-muted">
                      ({project.context})
                    </span>
                  )}
                </h3>
              </div>
              <p className="mt-3 prose-narrative text-base md:text-lg">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-4 text-sm font-medium">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline-offset-4 hover:underline"
                >
                  Source
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/70 underline-offset-4 hover:underline"
                  >
                    Live
                  </a>
                )}
              </div>
            </article>
          </ScrollReveal>
        ))}
      </ChapterSection>

      {/* Chapter 04 — Impact */}
      <ChapterSection number="04" title="Impact" id="impact">
        <ScrollReveal>
          <p className="prose-narrative">
            Impact shows up in hackathon results, patents, and merged pull
            requests—the proof that systems and teams moved forward. I am drawn
            to {profile.interests.join(", ").replace(/,([^,]*)$/, ", and$1")}.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ol className="space-y-4">
            {profile.achievements.map((a, i) => (
              <li
                key={a}
                className="flex gap-4 prose-narrative text-base md:text-lg"
              >
                <span className="font-display text-xl text-accent/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ol>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <footer className="mt-16 rounded-xl bg-chapter px-8 py-10 text-parchment md:px-12">
            <p className="font-display text-3xl">Let&apos;s write the next chapter.</p>
            <p className="mt-4 text-parchment/80">
              {profile.email} · {profile.phone}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a
                href={profile.links.github}
                className="underline-offset-4 hover:underline"
              >
                GitHub
              </a>
              <a
                href={profile.links.linkedin}
                className="underline-offset-4 hover:underline"
              >
                LinkedIn
              </a>
              <a
                href={profile.links.x}
                className="underline-offset-4 hover:underline"
              >
                X
              </a>
              <a
                href={profile.links.leetcode}
                className="underline-offset-4 hover:underline"
              >
                LeetCode
              </a>
              <a
                href={profile.links.codeforces}
                className="underline-offset-4 hover:underline"
              >
                Codeforces
              </a>
            </div>
          </footer>
        </ScrollReveal>
      </ChapterSection>
    </main>
  );
}
