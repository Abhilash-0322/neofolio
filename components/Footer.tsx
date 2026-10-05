import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line/60 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="font-mono text-xs text-slate-600">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-700">
          Built with Next.js · Refined cyber aesthetic
        </p>
      </div>
    </footer>
  );
}
