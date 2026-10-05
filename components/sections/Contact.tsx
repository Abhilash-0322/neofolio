import { Section } from "@/components/Section";
import { links, site } from "@/data/content";

const codingProfiles = [
  { label: "LeetCode", href: links.leetcode },
  { label: "Codeforces", href: links.codeforces },
  { label: "GeeksForGeeks", href: links.geeksforgeeks },
  { label: "HackerRank", href: links.hackerrank },
];

export function Contact() {
  return (
    <Section id="contact" index="VI" label="Contact" variant="slate">
      <div className="grid grid-cols-12 gap-x-6 gap-y-10">
        <div className="col-span-12 lg:col-span-6">
          <p className="font-serif text-2xl leading-snug text-noir-ink md:text-3xl">
            Open to cloud, AI systems, and backend roles—including fintech and
            regulated technology teams—and to client engagements on APIs and
            production AI.
          </p>
          <dl className="mt-10 space-y-4 text-sm">
            <div>
              <dt className="label-caps">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="text-noir-ink underline-offset-4 hover:text-noir-accent hover:underline"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="label-caps">Phone</dt>
              <dd className="mt-1 text-noir-muted">{site.phone}</dd>
            </div>
            <div>
              <dt className="label-caps">Location</dt>
              <dd className="mt-1 text-noir-muted">{site.location}</dd>
            </div>
          </dl>
        </div>
        <div className="col-span-12 lg:col-span-6">
          <div className="dossier-card p-6 md:p-8">
            <p className="label-caps">Professional profiles</p>
            <ul className="mt-6 divide-y divide-noir-rule">
              {[
                { label: "GitHub", href: links.github },
                { label: "LinkedIn", href: links.linkedin },
                { label: "X", href: links.x },
                ...codingProfiles,
              ].map((item) => (
                <li key={item.label} className="py-3 first:pt-0 last:pb-0">
                  <a
                    href={item.href}
                    className="flex items-center justify-between text-sm text-noir-ink hover:text-noir-accent"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.label}
                    <span aria-hidden>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
