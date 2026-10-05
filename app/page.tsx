import ThemeToggle from "@/components/ThemeToggle";
import WorkGrid from "@/components/WorkGrid";

const skills = [
  "Python",
  "FastAPI",
  "TypeScript",
  "Next.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Azure",
  "RAG",
  "AI agents",
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav shell">
        <a className="wordmark" href="#top" aria-label="Abhilash Maurya home">
          AM<span>.</span>
        </a>
        <div className="nav-links">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-actions">
          <span className="nav-date">DELHI NCR · 2026</span>
          <ThemeToggle />
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero__eyebrow">
          <span className="status-dot" />
          <span>Open to work</span>
          <span className="eyebrow-line" />
          <span>Backend · AI · Cloud</span>
        </div>
        <div className="hero__content">
          <p className="hero__kicker">Field notes from a builder</p>
          <h1>
            Software with
            <br />
            <em>some soil</em> under
            <br />
            its fingernails.
          </h1>
          <div className="hero__aside">
            <p>
              I&apos;m Abhilash — a backend and AI systems developer making
              useful things survive contact with the real world.
            </p>
            <a className="arrow-link" href="#work">
              See what I&apos;ve shipped <span>↓</span>
            </a>
          </div>
        </div>
        <div className="hero__bottom">
          <span className="scribble">No vaporware, please.</span>
          <span className="hero__index">01 <i /> 04</span>
        </div>
      </section>

      <section className="marquee-band" aria-label="Areas of practice">
        <div className="marquee-track">
          <span>APIs that hold up</span><b>✳</b>
          <span>Agents with a job to do</span><b>✳</b>
          <span>Cloud without the fog</span><b>✳</b>
          <span>APIs that hold up</span><b>✳</b>
          <span>Agents with a job to do</span><b>✳</b>
          <span>Cloud without the fog</span><b>✳</b>
        </div>
      </section>

      <section className="section shell work-section" id="work">
        <div className="section-heading">
          <div>
            <span className="section-number">02 / Work log</span>
            <h2>Things I&apos;ve<br /><em>put in the world.</em></h2>
          </div>
          <p className="section-intro">
            A few systems, products, and experiments. Some won. Some taught
            me something expensive. All of them shipped.
          </p>
        </div>
        <WorkGrid />
      </section>

      <section className="statement-section">
        <div className="shell statement-grid">
          <span className="section-number">03 / Working principle</span>
          <div>
            <p className="statement">
              The interesting bit isn&apos;t the demo. It&apos;s the <em>boring
              middle</em> where an idea becomes dependable.
            </p>
            <p className="statement-detail">
              Clear APIs. Sensible data models. Logs you can actually read.
              AI that knows when it doesn&apos;t know. I care about the
              connective tissue that makes ambitious software usable.
            </p>
          </div>
        </div>
      </section>

      <section className="section shell about-section" id="about">
        <div className="section-heading">
          <div>
            <span className="section-number">04 / The person</span>
            <h2>A little<br /><em>context.</em></h2>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <p className="lead">
              I&apos;m currently studying Information Technology at KIET,
              where I also coordinate the AI/ML club.
            </p>
            <p>
              In between classes, hackathons, and the occasional rabbit hole,
              I build backend services, agent workflows, and cloud deployments.
              I&apos;ve led small teams, mentored developers, and learned that
              the best technical decision is often the one the next person can
              understand.
            </p>
            <a className="text-link" href="/abhilash_python.pdf" download>
              Download my resume <span>↓</span>
            </a>
          </div>
          <div className="about-notes">
            <div className="note-card note-card--yellow">
              <span>Currently learning</span>
              <strong>How to make AI<br />feel less magical.</strong>
              <small>and more accountable.</small>
            </div>
            <div className="note-card note-card--blue">
              <span>Credentials</span>
              <strong>AWS Cloud<br />Practitioner</strong>
              <small>Google AI Essentials</small>
            </div>
          </div>
        </div>
        <div className="skills-strip">
          <span className="skills-label">Tools I reach for</span>
          <div className="skills-list">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="shell contact-inner">
          <span className="section-number">05 / Say hello</span>
          <h2>Have a good<br /><em>problem?</em></h2>
          <p>
            I&apos;m looking for backend, AI systems, and cloud engineering
            opportunities — or a knotty project with a real user on the other
            end.
          </p>
          <a className="contact-email" href="mailto:abhilash.m.git@gmail.com">
            abhilash.m.git@gmail.com <span>↗</span>
          </a>
          <div className="contact-meta">
            <span>Available for conversations</span>
            <span>Ghaziabad, India · IST</span>
          </div>
        </div>
      </section>

      <footer className="site-footer shell">
        <span>© 2026 Abhilash Maurya</span>
        <div>
          <a href="https://github.com/Abhilash-0322" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/abhilash-maurya-b615b9277/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://x.com/abhilash_glitch" target="_blank" rel="noreferrer">X / Twitter</a>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
