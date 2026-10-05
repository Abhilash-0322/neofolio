import { profile } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule mt-24">
      <div className="mx-auto max-w-3xl px-6 py-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-muted">
        <p>© {year} {profile.name}</p>
        <p className="text-xs tracking-wide uppercase">Built with Next.js</p>
      </div>
    </footer>
  );
}
