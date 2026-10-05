import { profile } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-surface-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center text-xs text-ink-faint sm:flex-row sm:px-6 sm:text-left">
        <p>
          © {new Date().getFullYear()} {profile.name}. Midnight Emerald portfolio.
        </p>
        <p>Built with Next.js · TypeScript · Tailwind</p>
      </div>
    </footer>
  );
}
