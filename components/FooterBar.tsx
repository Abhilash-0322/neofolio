import { profile } from "@/lib/portfolio";

export function FooterBar() {
  return (
    <footer className="mt-16 border-t border-md-outline-variant/50 bg-md-surface-container">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="md-body-medium text-md-on-surface-variant">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="md-body-medium text-md-on-surface-variant">
          Next.js 14 · Material Design 3 · Port 5018
        </p>
      </div>
    </footer>
  );
}
