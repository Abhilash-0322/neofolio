import { MdButton } from "@/components/ui/MdButton";
import { navSections, profile } from "@/lib/portfolio";

export function TopAppBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-md-outline-variant/40 bg-md-surface/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center gap-4 px-4 py-3 md:px-6">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md-full bg-md-primary-container md-title-medium text-md-on-primary-container"
            aria-hidden
          >
            AM
          </span>
          <div className="min-w-0">
            <p className="truncate md-title-medium text-md-on-surface">
              {profile.name}
            </p>
            <p className="truncate md-body-medium text-md-on-surface-variant">
              Backend · AI systems · Cloud
            </p>
          </div>
        </div>
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {navSections.map((item) => (
            <MdButton
              key={item.id}
              href={`#${item.id}`}
              variant="text"
              className="!px-3 !py-2"
            >
              {item.label}
            </MdButton>
          ))}
        </nav>
        <MdButton href={profile.links.resume} variant="tonal" className="shrink-0">
          Résumé
        </MdButton>
      </div>
    </header>
  );
}
