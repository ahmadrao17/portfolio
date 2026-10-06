import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
} from 'lucide-react'

const email = 'ahmadrao17@gmail.com'

const projects = [
  {
    number: '01',
    name: 'GWG Platform',
    domain: 'Compliance technology',
    description:
      'Helping teams manage complex compliance work through clearer review flows, dependable backend behavior, and practical product improvements.',
    focus: ['Python', 'Django', 'Workflow design'],
  },
  {
    number: '02',
    name: 'ATTDE',
    domain: 'Events and community',
    description:
      'Building backend features for an events platform, with attention to onboarding, content flows, integrations, and production reliability.',
    focus: ['Django', 'APIs', 'Integrations'],
  },
  {
    number: '03',
    name: 'SpexBot',
    domain: 'Healthcare automation',
    description:
      'Creating automation that connects day-to-day healthcare operations with external practice systems, reducing repetitive work for teams.',
    focus: ['Python', 'Selenium', 'Automation'],
  },
  {
    number: '04',
    name: 'AI Voice and Chat Support Agent',
    domain: 'Customer support automation',
    description:
      'Built a voice and chat assistant that answers product questions and helps turn customer conversations into actionable leads.',
    focus: ['OpenAI API', 'Flask', 'Odoo API'],
  },
  {
    number: '05',
    name: 'AI Support Assistant',
    domain: 'Knowledge-based support',
    description:
      'Created a reusable assistant workflow for ingesting knowledge files, updating responses, and testing support conversations.',
    focus: ['Python', 'OpenAI API', 'Vector stores'],
  },
  {
    number: '06',
    name: 'Backend Social Feed API',
    domain: 'Content platform API',
    description:
      'Structured a social feed backend around users, content, permissions, and clear REST endpoints for future product features.',
    focus: ['Django', 'DRF', 'REST APIs'],
  },
  {
    number: '07',
    name: 'AI Course Test Generator',
    domain: 'Education automation',
    description:
      'Turned course material into multiple-choice assessments with an API workflow and ready-to-use spreadsheet output.',
    focus: ['Python', 'Flask', 'OpenAI API'],
  },
  {
    number: '08',
    name: 'Flutter / Firebase Mobile App',
    domain: 'Mobile application',
    description:
      'Developed mobile screens and supporting Firebase features, including notifications and cloud functions.',
    focus: ['Flutter', 'Dart', 'Firebase'],
  },
]

const capabilities = [
  {
    title: 'Backend engineering',
    items: 'Python, Django, Django REST Framework, Flask, REST APIs, PostgreSQL',
  },
  {
    title: 'Automation and integrations',
    items: 'Celery, Redis, Selenium, webhooks, third-party APIs, AI-assisted workflows',
  },
  {
    title: 'Product delivery',
    items: 'React, Flutter, debugging, testing, collaboration, production support',
  },
]

function SocialLink({ href, label, children }) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
      {children}
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <div className="header-inner">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Muhammad Ahmad, back to top">
            <span className="brand-mark">MA<span className="brand-dot">.</span></span>
            <span className="brand-name">Muhammad Ahmad</span>
          </a>

          <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation" id="main-nav">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a className="header-contact" href={`mailto:${email}`}>
            Let's talk <ArrowUpRight size={16} strokeWidth={1.8} aria-hidden="true" />
          </a>
          <button
            className="menu-button"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            title={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-image">
            <img src="/portrait-professional.png" alt="Portrait of Muhammad Ahmad" />
          </div>
          <div className="hero-inner page-width">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> Software engineer / Lahore</p>
              <h1 id="hero-title">Muhammad<br />Ahmad<span className="hero-period">.</span></h1>
              <p className="hero-lead">I build dependable backend systems and practical automation.</p>
              <p className="hero-description">Python and Django engineer turning complex workflows into clear, reliable software.</p>
              <div className="hero-actions">
                <a className="button button-light" href="#work">Explore my work <ArrowDownRight size={19} aria-hidden="true" /></a>
                <a className="text-link hero-text-link" href={`mailto:${email}`}>Get in touch <ArrowUpRight size={18} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-band" id="about" aria-labelledby="intro-title">
          <div className="page-width intro-grid">
            <p className="eyebrow section-kicker"><span className="eyebrow-line" /> About me</p>
            <div>
              <h2 id="intro-title">Good software makes difficult work feel simpler.</h2>
              <p>I work across backend systems, integrations, and automation. My experience spans compliance technology, events platforms, healthcare workflows, and AI-powered support tools. I care about reliable implementation, clear product thinking, and the details that keep software useful after launch.</p>
            </div>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-kicker"><span className="eyebrow-line" /> Project work</p>
                <h2 id="work-title">Built for real-world use.</h2>
              </div>
              <p>Platforms, APIs, and automation across business, healthcare, education, and mobile products.</p>
            </div>
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-row" key={project.name}>
                  <span className="project-number">{project.number}</span>
                  <div className="project-main">
                    <p className="project-domain">{project.domain}</p>
                    <h3>{project.name}</h3>
                    <p className="project-description">{project.description}</p>
                  </div>
                  <div className="project-side">
                    <p>{project.focus.join(' / ')}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title">
          <div className="page-width experience-grid">
            <div className="experience-intro">
              <p className="eyebrow section-kicker"><span className="eyebrow-line" /> Experience</p>
              <h2 id="experience-title">A practical range of work.</h2>
              <p>From early full-stack delivery to production Python platforms and automation.</p>
              <a className="text-link dark-link" href="https://github.com/ahmadrao17" target="_blank" rel="noreferrer">See my GitHub <ArrowUpRight size={18} aria-hidden="true" /></a>
            </div>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-years">2025 — Present</div>
                <div><h3>Software Engineer</h3><p className="timeline-company">BarqDev</p><p>Backend engineering, product workflows, integrations, and automation across three active platforms.</p></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-years">2023 — 2025</div>
                <div><h3>Associate Software Engineer</h3><p className="timeline-company">Visiomate</p><p>APIs, business automation, AI support tools, and cross-platform application development.</p></div>
              </div>
              <div className="timeline-item">
                <div className="timeline-years">2020 — 2024</div>
                <div><h3>BS Computer Science</h3><p className="timeline-company">UET Lahore</p><p>Foundations in software engineering, databases, algorithms, and applied computing.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="capabilities-section" aria-labelledby="capabilities-title">
          <div className="page-width">
            <p className="eyebrow section-kicker"><span className="eyebrow-line" /> Capabilities</p>
            <h2 id="capabilities-title">Core toolkit.</h2>
            <div className="capabilities-grid">
              {capabilities.map((capability, index) => (
                <div className="capability" key={capability.title}>
                  <span className="capability-number">0{index + 1}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-width contact-inner">
            <div>
              <p className="eyebrow contact-kicker"><span className="eyebrow-line" /> Contact</p>
              <h2 id="contact-title">Have a problem worth solving?</h2>
              <p>I'm always glad to talk about thoughtful products, backend engineering, and useful automation.</p>
              <a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight size={27} strokeWidth={1.5} aria-hidden="true" /></a>
            </div>
            <ArrowRight className="contact-arrow" size={110} strokeWidth={0.8} aria-hidden="true" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <span>Muhammad Ahmad <span className="footer-separator">/</span> Software Engineer</span>
          <div className="footer-socials">
            <SocialLink href={`mailto:${email}`} label="Email Muhammad Ahmad"><Mail size={18} strokeWidth={1.8} aria-hidden="true" /> Email</SocialLink>
            <SocialLink href="https://github.com/ahmadrao17" label="GitHub profile">GitHub <ArrowUpRight size={15} aria-hidden="true" /></SocialLink>
            <SocialLink href="https://www.linkedin.com/in/ahmadrao17" label="LinkedIn profile">LinkedIn <ArrowUpRight size={15} aria-hidden="true" /></SocialLink>
          </div>
          <span>Based in Lahore, Pakistan</span>
        </div>
      </footer>
    </>
  )
}

export default App
