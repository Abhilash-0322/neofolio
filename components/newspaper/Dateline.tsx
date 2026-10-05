import { site } from "@/data/content";

function formatDateline(): string {
  const now = new Date();
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
  const month = now.toLocaleDateString("en-US", { month: "long" });
  const day = now.getDate();
  const year = now.getFullYear();
  const city = site.location.split(",")[0].trim().toUpperCase();
  return `${city} — ${weekday}, ${month} ${day}, ${year}`;
}

export function Dateline() {
  return (
    <p className="text-center text-xs font-semibold tracking-wide text-ink/80 md:text-sm">
      <span className="small-caps">{formatDateline()}</span>
      <span className="mx-2 text-ink/40">|</span>
      <span className="italic">Late Edition</span>
    </p>
  );
}
