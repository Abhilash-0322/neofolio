import {
  achievements,
  certifications,
  codingProfiles,
  education,
  experience,
  skills,
} from "@/lib/portfolio";
import { MdButton } from "@/components/ui/MdButton";
import { RippleHost } from "@/components/ui/RippleHost";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="scroll-mt-20"
      aria-labelledby="experience-heading"
    >
      <h2 id="experience-heading" className="md-headline-small text-md-on-surface">
        Experience & skills
      </h2>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        <RippleHost as="div" className="md-filled-card p-6 lg:col-span-1">
          <h3 className="md-title-medium text-md-on-surface">Roles</h3>
          <ul className="mt-4 space-y-6">
            {experience.map((job) => (
              <li key={job.role}>
                <p className="md-title-medium">{job.role}</p>
                <p className="md-body-medium text-md-primary">{job.org}</p>
                <p className="mt-1 md-body-medium text-md-on-surface-variant">
                  {job.period}
                </p>
                <p className="mt-2 md-body-medium">{job.detail}</p>
              </li>
            ))}
          </ul>
        </RippleHost>

        <RippleHost as="div" className="md-filled-card p-6 lg:col-span-1">
          <h3 className="md-title-medium text-md-on-surface">Education</h3>
          <p className="mt-4 md-title-medium">{education.degree}</p>
          <p className="md-body-medium text-md-on-surface-variant">
            {education.school}
          </p>
          <p className="mt-1 md-body-medium">{education.year}</p>
          <ul className="mt-6 space-y-2 md-body-medium">
            {certifications.map((cert) => (
              <li key={cert} className="flex gap-2">
                <span className="text-md-primary" aria-hidden>
                  ✓
                </span>
                {cert}
              </li>
            ))}
          </ul>
        </RippleHost>

        <RippleHost as="div" className="md-filled-card p-6 lg:col-span-1">
          <h3 className="md-title-medium text-md-on-surface">Stack</h3>
          <dl className="mt-4 space-y-4 md-body-medium">
            {(
              Object.entries(skills) as [keyof typeof skills, string][]
            ).map(([key, value]) => (
              <div key={key}>
                <dt className="md-label-large capitalize text-md-on-surface-variant">
                  {key}
                </dt>
                <dd className="mt-1 text-md-on-surface">{value}</dd>
              </div>
            ))}
          </dl>
        </RippleHost>
      </div>

      <div className="mt-8 md-elevated-card p-6">
        <h3 className="md-title-medium text-md-on-surface">Recognition</h3>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {achievements.map((item) => (
            <li
              key={item}
              className="md-body-medium text-md-on-surface-variant before:mr-2 before:text-md-primary before:content-['•']"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ConnectSection() {
  return (
    <section
      id="connect"
      className="scroll-mt-20"
      aria-labelledby="connect-heading"
    >
      <div className="md-elevated-card bg-md-primary-container p-6 md:p-8">
        <h2
          id="connect-heading"
          className="md-headline-small text-md-on-primary-container"
        >
          Connect
        </h2>
        <p className="mt-2 max-w-xl md-body-large text-md-on-primary-container/90">
          Coding profiles and social links—tap for ripple feedback on every
          surface.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {codingProfiles.map((cp) => (
            <li key={cp.name}>
              <MdButton
                href={cp.href}
                variant="filled"
                external
                className="w-full !bg-md-primary !text-md-on-primary"
              >
                {cp.name} · {cp.handle}
              </MdButton>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
