import { links, site } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-stage px-6">
        <div className="rounded-2xl border border-stage-gold/30 bg-gradient-to-br from-stage-curtain to-stage-floor p-8 md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-stage-amber">
            Encore
          </p>
          <h2 className="mt-2 font-display text-5xl tracking-wide text-white md:text-6xl">
            BOOK A TALK
          </h2>
          <p className="mt-4 max-w-xl text-neutral-400">
            {site.bio}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center rounded-sm bg-stage-gold px-8 py-4 font-display text-xl tracking-wide text-stage-black hover:bg-stage-amber"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="text-sm text-neutral-400 hover:text-stage-gold"
            >
              {site.phone}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <a href={links.linkedin} className="text-neutral-400 hover:text-white">
              LinkedIn
            </a>
            <a href={links.github} className="text-neutral-400 hover:text-white">
              GitHub
            </a>
            <a href={links.leetcode} className="text-neutral-400 hover:text-white">
              LeetCode
            </a>
            <a href={links.codeforces} className="text-neutral-400 hover:text-white">
              Codeforces
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
