import { profile } from "@/lib/portfolio";

export function Masthead() {
  return (
    <header className="border-b-4 border-ink">
      <div className="mx-auto max-w-spread px-6 py-10 md:px-10">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-ink/70">
          Portfolio · {profile.location}
        </p>
        <h1 className="mt-4 font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          {profile.name}
        </h1>
        <p className="mt-6 max-w-3xl font-sans text-sm uppercase tracking-widest text-accent md:text-base">
          {profile.titles.join(" · ")}
        </p>
        <nav
          className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-rule pt-6 font-sans text-sm uppercase tracking-wide"
          aria-label="Contact and profiles"
        >
          <a href={`mailto:${profile.email}`} className="hover:text-accent">
            Email
          </a>
          <a href={profile.links.github} className="hover:text-accent">
            GitHub
          </a>
          <a href={profile.links.linkedin} className="hover:text-accent">
            LinkedIn
          </a>
          <a href={profile.links.x} className="hover:text-accent">
            X
          </a>
          <a href={profile.links.resume} className="hover:text-accent">
            Résumé (PDF)
          </a>
        </nav>
      </div>
    </header>
  );
}
