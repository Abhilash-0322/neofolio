import { links, site } from "@/data/content";
import { Enso, InkStroke } from "@/components/zen/InkStroke";

export function Hero() {
  return (
    <section className="flex min-h-[88vh] flex-col justify-center px-8 pb-20 pt-32 md:px-10">
      <div className="mx-auto w-full max-w-zen">
        <Enso className="mb-12" />
        <p className="mb-6 text-xs tracking-zen text-sumi-faint">
          {site.location}
        </p>
        <h1 className="font-serif text-4xl font-normal leading-tight text-sumi md:text-5xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-md font-serif text-lg text-sumi-muted md:text-xl">
          {site.headline}
        </p>
        <InkStroke className="my-10" />
        <p className="max-w-lg text-sm leading-relaxed text-sumi-muted">
          {site.bio}
        </p>
        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 text-xs tracking-zen">
          <a
            href={site.resumePath}
            className="border-b border-sumi/20 pb-0.5 text-sumi transition-colors hover:border-moss hover:text-moss"
          >
            Resume
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sumi-faint transition-colors hover:text-sumi"
          >
            GitHub
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sumi-faint transition-colors hover:text-sumi"
          >
            LinkedIn
          </a>
          <a
            href={links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sumi-faint transition-colors hover:text-sumi"
          >
            X
          </a>
        </div>
      </div>
    </section>
  );
}
