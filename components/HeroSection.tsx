import { MdButton } from "@/components/ui/MdButton";
import { MdChip } from "@/components/ui/MdChip";
import { profile } from "@/lib/portfolio";

export function HeroSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20"
      aria-labelledby="hero-heading"
    >
      <div className="md-elevated-card overflow-hidden p-6 md:p-10">
        <p className="md-label-large text-md-primary">
          Backend · Cloud · AI systems
        </p>
        <h1
          id="hero-heading"
          className="mt-3 md-headline-medium text-md-on-surface md:text-[2.25rem] md:leading-[2.75rem]"
        >
          Shipped systems for cloud, APIs, and production-minded AI.
        </h1>
        <p className="mt-4 max-w-3xl md-body-large text-md-on-surface-variant">
          {profile.bio}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {profile.titles.map((title) => (
            <MdChip key={title}>{title}</MdChip>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <MdButton href={`mailto:${profile.email}`} variant="filled">
            Email me
          </MdButton>
          <MdButton href={profile.links.github} variant="outlined" external>
            GitHub
          </MdButton>
          <MdButton href={profile.links.linkedin} variant="text" external>
            LinkedIn
          </MdButton>
        </div>
        <p className="mt-6 md-body-medium text-md-on-surface-variant">
          {profile.location} · {profile.phone}
        </p>
      </div>
    </section>
  );
}
