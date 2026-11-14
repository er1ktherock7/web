import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Code2,
  Music2,
} from "lucide-react";
import { Navigation, CopyEmail, RhythmLab } from "@/components/interactions";
import { LineStudy, ProjectArt } from "@/components/artwork";
import { profile, projects, skills } from "@/content/portfolio";
export default function Home() {
  return (
    <>
      <Navigation />
      <main id="main">
        <section className="hero wrap">
          <div className="hero-top eyebrow">
            <span>
              <i className="status-dot" /> LUCAS HERICK · BASED IN BRAZIL
            </span>
            <span>DATA / SOFTWARE / CREATIVE TECHNOLOGY</span>
          </div>
          <div className="hero-composition">
            <div className="hero-copy">
              <h1>
                Logic meets
                <br />
                <span className="serif">a little rhythm.</span>
              </h1>
              <p>
                I turn complex data into clear systems
                <br className="desktop-break" /> and curious ideas into things
                that work.
              </p>
              <a href="#work" className="primary-button">
                Explore my work <ArrowDown size={17} />
              </a>
            </div>
            <div className="hero-art">
              <LineStudy />
              <div className="art-coordinate eyebrow">
                FIG. 01 — STRUCTURED CURIOSITY
              </div>
              <span className="cross cross-one">+</span>
              <span className="cross cross-two">+</span>
            </div>
          </div>
          <div className="hero-bottom">
            <p>
              Data engineer. Software developer.
              <br />
              <span>Mathematical mind. Creative at heart.</span>
            </p>
            <a href="#work" className="scroll-note eyebrow">
              SCROLL TO EXPLORE <ArrowDown size={15} />
            </a>
          </div>
        </section>
        <div className="expertise-strip">
          <div className="wrap">
            <span>DATA ENGINEERING</span>
            <i>✳</i>
            <span>SOFTWARE DEVELOPMENT</span>
            <i>✳</i>
            <span>ANALYTICAL THINKING</span>
            <i>✳</i>
            <span>CREATIVE CURIOSITY</span>
          </div>
        </div>
        <section id="work" className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-index">01 / SELECTED WORK</p>
              <h2>
                Ideas, made tangible<span className="accent">.</span>
              </h2>
            </div>
            <a href={profile.github} className="text-link">
              Explore GitHub <ArrowUpRight size={17} />
            </a>
          </div>
          <p className="section-intro">
            A selection of personal tools from my public repository.
            <br />
            Small experiments at the intersection of structure, utility, and
            play.
          </p>
          <div className="projects">
            {projects.map((p, i) => (
              <article
                className={`project-card ${i === 0 ? "featured" : ""}`}
                key={p.slug}
              >
                <Link
                  href={`/work/${p.slug}/`}
                  className="project-image-link"
                  aria-label={`Read about ${p.title}`}
                >
                  <ProjectArt type={p.type} />
                  <span className="project-arrow">
                    <ArrowUpRight />
                  </span>
                </Link>
                <div className="project-details">
                  <div className="project-category eyebrow">
                    {p.number} / {p.category}
                  </div>
                  <h3>
                    <Link href={`/work/${p.slug}/`}>{p.title}</Link>
                  </h3>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <Link
                    className="text-link project-more"
                    href={`/work/${p.slug}/`}
                  >
                    Explore the project <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="about" className="section about-section">
          <div className="wrap about-grid">
            <div>
              <p className="eyebrow section-index">
                02 / THE PERSON BEHIND THE CODE
              </p>
              <h2>
                Grounded in math.
                <br />
                Driven by <span className="serif">curiosity.</span>
              </h2>
              <div className="about-monogram" aria-hidden="true">
                h<span>↗</span>
                <div className="eyebrow">BRAZIL ↔ EVERYWHERE</div>
              </div>
            </div>
            <div className="about-content">
              <p className="lead">{profile.bio}</p>
              <p>
                I enjoy moving between disciplines. A data pipeline, a small web
                tool, a guitar arrangement — each is a chance to find a useful
                pattern and give it a form of its own.
              </p>
              <p>
                Beyond the screen, I’m drawn to guitar and instrumental music,
                languages, and international cultures. Learning something
                unfamiliar is usually where the next idea begins.
              </p>
              <div className="about-facts">
                <div>
                  <span className="eyebrow">FOUNDATION</span>
                  <strong>Mathematics</strong>
                </div>
                <div>
                  <span className="eyebrow">PERSPECTIVE</span>
                  <strong>Analytical + creative</strong>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="section wrap">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-index">03 / EXPERIENCE & TOOLKIT</p>
              <h2>Structure behind the work.</h2>
            </div>
          </div>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <article className="skill" key={s.title}>
                <span className="eyebrow accent">0{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="tags">
                  {s.items.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="timeline">
            <div className="timeline-label eyebrow">LEARNING FOUNDATIONS</div>
            <div>
              <article>
                <span className="eyebrow">2016 — 2021</span>
                <div>
                  <h3>Mathematics</h3>
                  <p>Fluminense Federal University · Brazil</p>
                </div>
              </article>
              <article>
                <span className="eyebrow">2022</span>
                <div>
                  <h3>Database modeling & administration</h3>
                  <p>COTI Technology · MySQL / PostgreSQL</p>
                </div>
              </article>
              <article>
                <span className="eyebrow">2022</span>
                <div>
                  <h3>Introduction to Korean Language</h3>
                  <p>Yonsei University · Online course</p>
                </div>
              </article>
            </div>
          </div>
        </section>
        <section id="play" className="section play-section">
          <div className="wrap play-grid">
            <div>
              <p className="eyebrow section-index">
                04 / A DIFFERENT FREQUENCY
              </p>
              <h2>
                There’s a rhythm
                <br />
                to <span className="serif">all of this.</span>
              </h2>
              <p>
                Music is another way I explore patterns. Guitar, instrumental
                performance, and a little experimentation keep the creative side
                of my brain in the conversation.
              </p>
              <div className="music-links">
                <a href={profile.spotify} className="text-link">
                  <Music2 size={17} /> Listen on Spotify{" "}
                  <ArrowUpRight size={16} />
                </a>
                <a href={profile.appleMusic} className="text-link">
                  Apple Music <ArrowUpRight size={16} />
                </a>
              </div>
              <p className="play-note">
                A tiny experiment for your inner drummer →
              </p>
            </div>
            <RhythmLab />
          </div>
        </section>
        <section id="contact" className="section wrap contact-section">
          <p className="eyebrow section-index">
            <i className="status-dot" /> 05 / START A CONVERSATION
          </p>
          <h2>
            Have something
            <br />
            in <span className="serif">mind?</span>
            <a
              href={`mailto:${profile.email}`}
              className="contact-arrow"
              aria-label="Email Lucas Herick"
            >
              <ArrowUpRight />
            </a>
          </h2>
          <div className="contact-row">
            <p>
              A data challenge, a creative idea, or a good conversation.
              <br />
              I’d like to hear about it.
            </p>
            <div className="email-row">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <CopyEmail email={profile.email} />
            </div>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <a className="brand" href="#">
          herick<span>✳</span>
        </a>
        <span>© {new Date().getFullYear()} Lucas Herick</span>
        <a href={profile.github}>
          <Code2 size={16} /> GitHub <ArrowUpRight size={14} />
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin}>
            LinkedIn <ArrowUpRight size={14} />
          </a>
        )}
        <a href="#main">Back to top ↑</a>
      </footer>
    </>
  );
}
