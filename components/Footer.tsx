import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-lab-border px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="font-mono text-[10px] uppercase tracking-widest text-lab-sub">
          © {new Date().getFullYear()} {profile.name} · AI Research Lab Portfolio
        </p>
        <p className="text-xs text-lab-sub">
          Built with Next.js 14 · Tailwind · next-themes
        </p>
      </div>
    </footer>
  );
}
