import { profile } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-6">
          <a href={profile.github} className="hover:text-accent" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={profile.linkedin} className="hover:text-accent" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={profile.x} className="hover:text-accent" target="_blank" rel="noreferrer">
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
