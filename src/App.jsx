import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BookOpenText,
  Download,
  FileQuestion,
  Mail,
  Menu,
  MessageSquareText,
  Share2,
  X,
} from 'lucide-react'

const base = import.meta.env.BASE_URL
const email = 'ahmadrao17@gmail.com'
const resume = `${base}Muhammad_Ahmad_Resume.pdf`

const projects = [
  {
    name: 'GWG Platform',
    domain: 'Compliance technology',
    description: 'Role-specific review queues, KYC dossiers, screening workflows, and auditable forms for a multi-tenant Swiss AML platform.',
    focus: ['Django', 'DRF', 'React', 'TypeScript'],
    url: 'https://www.gwg-plattform.ch/en/home-2/',
    image: 'projects/gwg-dashboard.png',
    size: [1916, 753],
    imageAlt: 'GWG Platform dashboard showing a contracting party form and review actions',
  },
  {
    name: 'SpexBot',
    domain: 'Healthcare automation',
    description: 'Claims, eligibility, inventory, and order automation across optical practice systems, EHRs, and insurers.',
    focus: ['Django', 'Selenium', 'Celery', 'React'],
    url: 'https://spexbot.com/',
    image: 'projects/spexbot.jpg',
    size: [1440, 680],
    imageAlt: 'SpexBot website describing eyecare administration automation',
  },
  {
    name: 'ATTDE',
    domain: 'Events and community',
    description: 'Onboarding and organization-owned content workflows, with improvements to Stripe checkout and webhooks.',
    focus: ['Django', 'Celery', 'PostgreSQL', 'Stripe'],
    url: 'https://www.allthethingstodoeverywhere.com/home',
    image: 'projects/attde.jpg',
    size: [740, 760],
    imageAlt: 'ATTDE onboarding screen with event interest choices',
  },
  {
    name: 'Gaggle App',
    domain: 'Mobile application',
    description: 'Provider discovery with location, age, rating, and provider filters, plus favorites, follows, reviews, and Firebase features.',
    focus: ['Flutter', 'Firebase', 'Firestore'],
    url: 'https://play.google.com/store/apps/details?id=com.flock.team.app',
    image: 'projects/gaggle.jpg',
    size: [940, 360],
    imageAlt: 'Gaggle App store screenshots',
  },
  {
    name: 'Audio Quran',
    domain: 'Mobile audio application',
    description: 'A cross-platform recitation player with downloads, favorites, repeat playback, and in-app purchases.',
    focus: ['Flutter', 'Firebase', 'In-app purchases'],
    url: 'https://play.google.com/store/apps/details?id=com.ahsan.audioquran&hl=en',
    image: 'projects/audio-quran.jpg',
    size: [940, 360],
    imageAlt: 'Audio Quran app store screenshots',
  },
  {
    name: 'Bayan ul Quran',
    domain: 'Mobile reference application',
    description: 'A Flutter reference app with recitation, Ayat search, multilingual content, and Tafseer lectures.',
    focus: ['Flutter', 'Dart', 'Mobile'],
    url: 'https://play.google.com/store/apps/details?id=com.app.drisrar&hl=en',
    image: 'projects/bayan-ul-quran.jpg',
    size: [940, 360],
    imageAlt: 'Bayan ul Quran app store screenshots',
  },
  {
    name: 'AI Voice and Chat Support Agent',
    domain: 'Customer support automation',
    description: 'A voice and chat agent for product questions, with Flask and Odoo integrations for knowledge updates and lead creation.',
    focus: ['OpenAI API', 'ElevenLabs', 'Flask', 'Odoo'],
    icon: AudioLines,
  },
  {
    name: 'AI Chat Assistant — Nurtureful Psychology',
    domain: 'Website guidance',
    description: 'A website assistant using a structured company profile and retrieval-augmented responses to guide visitors.',
    focus: ['OpenAI API', 'RAG', 'Chatbot'],
    icon: MessageSquareText,
  },
  {
    name: 'AI Course Test Generator',
    domain: 'Education automation',
    description: 'A Flask API that turns uploaded course material into multiple-choice tests and returns formatted Excel files.',
    focus: ['Python', 'Flask', 'OpenAI API'],
    icon: FileQuestion,
  },
  {
    name: 'AI Support Assistant',
    domain: 'Knowledge-based support',
    description: 'Reusable scripts for assistant setup, knowledge-file ingestion, instruction updates, and support-conversation tests.',
    focus: ['Python', 'OpenAI API', 'Vector stores'],
    icon: BookOpenText,
  },
  {
    name: 'Backend Social Feed API',
    domain: 'Content platform API',
    description: 'A social feed backend structured around users, content, permissions, serializers, and REST endpoints.',
    focus: ['Django', 'DRF', 'django-filter'],
    icon: Share2,
  },
]

const toolkit = [
  { name: 'Backend', skills: ['Python', 'Django', 'Django REST Framework', 'Flask', 'PostgreSQL'] },
  { name: 'Automation', skills: ['Celery', 'Redis', 'Selenium', 'Webhooks', 'Third-party APIs'] },
  { name: 'Product', skills: ['React', 'TypeScript', 'Flutter', 'Firebase', 'Stripe'] },
]

function ProjectName({ project }) {
  if (!project.url) return project.name
  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-name-link">
      {project.name}<ArrowUpRight size={20} strokeWidth={1.7} aria-hidden="true" />
    </a>
  )
}

function ProjectImage({ project, className = '' }) {
  return (
    <img
      className={className}
      src={`${base}${project.image}`}
      width={project.size[0]}
      height={project.size[1]}
      alt={project.imageAlt}
      loading="lazy"
      decoding="async"
    />
  )
}

function SkillList({ skills }) {
  return <ul className="skill-list" aria-label="Technologies">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
}

function FeaturedProject({ project, position }) {
  return (
    <article className={`featured-project featured-project-${position}`}>
      <a className="featured-media" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} website`}>
        <div className="media-browser-bar" aria-hidden="true"><span /><span /><span /></div>
        <ProjectImage project={project} />
      </a>
      <div className="featured-copy">
        <p className="project-domain">{project.domain}</p>
        <h3><ProjectName project={project} /></h3>
        <p className="project-description">{project.description}</p>
        <SkillList skills={project.focus} />
        <a className="visit-link" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name} public site`}>View public site <ArrowUpRight size={18} aria-hidden="true" /></a>
      </div>
    </article>
  )
}

function IndexProject({ project }) {
  const Icon = project.icon
  return (
    <article className="index-project">
      <div className={`index-visual ${project.image ? 'index-visual-image' : 'index-visual-icon'}`} aria-hidden={!project.image}>
        {project.image ? <ProjectImage project={project} /> : <Icon size={30} strokeWidth={1.5} aria-hidden="true" />}
      </div>
      <div className="index-copy">
        <p className="project-domain">{project.domain}</p>
        <h4><ProjectName project={project} /></h4>
        <p>{project.description}</p>
        <SkillList skills={project.focus} />
      </div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header" id="top">
        <div className="header-inner page-width">
          <a className="brand" href="#top" onClick={closeMenu} aria-label="Muhammad Ahmad, back to top"><img className="brand-mark" src={`${base}logo-mark.svg`} width="46" height="46" alt="" /><span className="brand-name">Muhammad Ahmad</span></a>
          <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} id="main-nav" aria-label="Main navigation">
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#stack" onClick={closeMenu}>Stack</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-resume" href={resume} download="Muhammad_Ahmad_Resume.pdf" onClick={closeMenu}>Download résumé <Download size={17} aria-hidden="true" /></a>
          </nav>
          <a className="header-resume" href={resume} download="Muhammad_Ahmad_Resume.pdf">Résumé <Download size={17} aria-hidden="true" /></a>
          <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="page-width hero-grid">
            <div className="hero-copy">
              <p className="hero-identity">Software engineer in Lahore, Pakistan</p>
              <h1 id="hero-title">Muhammad<br />Ahmad<span>.</span></h1>
              <p className="hero-statement">I turn complex workflows into dependable software.</p>
              <p className="hero-detail">Python, Django, and practical product engineering across compliance, healthcare, events, and automation.</p>
              <div className="hero-actions">
                <a className="button-primary" href="#work">See selected work <ArrowRight size={19} aria-hidden="true" /></a>
                <a className="button-secondary" href={resume} download="Muhammad_Ahmad_Resume.pdf">Download résumé <Download size={18} aria-hidden="true" /></a>
              </div>
            </div>
            <div className="hero-showcase" aria-hidden="true">
              <div className="showcase-main">
                <div className="showcase-label"><span>GWG Platform</span><span>Compliance workflows</span></div>
                <img src={`${base}projects/gwg-dashboard.png`} width="1916" height="753" alt="" fetchPriority="high" decoding="async" />
              </div>
              <div className="showcase-pair">
                <div><span>SpexBot</span><img src={`${base}projects/spexbot.jpg`} width="1440" height="680" alt="" decoding="async" /></div>
                <div><span>ATTDE</span><img src={`${base}projects/attde.jpg`} width="740" height="760" alt="" decoding="async" /></div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <div className="page-width about-grid">
            <h2 id="about-title">Engineering, with the product in mind.</h2>
            <div className="about-copy">
              <p>I work across backend systems, integrations, and automation. My experience spans compliance technology, events platforms, healthcare workflows, and AI support tools.</p>
              <p>I talk with clients to understand their needs, help shape solutions, and lead features through delivery. I care about the details that keep software useful after launch.</p>
              <div className="about-disciplines" aria-label="Areas of work"><span>Backend systems</span><span>Automation</span><span>Product delivery</span><span>Client collaboration</span></div>
            </div>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="page-width">
            <div className="section-heading">
              <h2 id="work-title">Selected work</h2>
              <p>Three platforms where I build product workflows, integrations, and automation.</p>
            </div>
            <div className="featured-list">{projects.slice(0, 3).map((project, index) => <FeaturedProject key={project.name} project={project} position={index + 1} />)}</div>
            <div className="more-heading"><h3>More projects</h3><p>Mobile apps, AI tools, and APIs from earlier work.</p></div>
            <div className="project-index">{projects.slice(3).map((project) => <IndexProject key={project.name} project={project} />)}</div>
          </div>
        </section>

        <section className="experience-section" id="experience" aria-labelledby="experience-title">
          <div className="page-width experience-grid">
            <div className="experience-heading"><h2 id="experience-title">Experience</h2><p>From mobile applications and support tools to production Python platforms.</p></div>
            <div className="timeline">
              <article><p className="timeline-years">2025 – Present</p><div><h3>Software Engineer</h3><p className="timeline-company">BarqDev</p><p>Backend engineering, product workflows, integrations, and automation across GWG Platform, SpexBot, and ATTDE.</p></div></article>
              <article><p className="timeline-years">2023 – 2025</p><div><h3>Associate Software Engineer</h3><p className="timeline-company">Visiomate</p><p>APIs, business automation, AI support tools, and cross-platform application development.</p></div></article>
              <article><p className="timeline-years">2020 – 2024</p><div><h3>BS Computer Science</h3><p className="timeline-company">UET Lahore</p><p>Software engineering, databases, algorithms, and applied computing.</p></div></article>
            </div>
          </div>
        </section>

        <section className="stack-section" id="stack" aria-labelledby="stack-title">
          <div className="page-width stack-grid"><div><h2 id="stack-title">Tools I use</h2><p>Technologies I have used across the work above.</p></div><div className="stack-list">{toolkit.map((group) => <div className="stack-row" key={group.name}><h3>{group.name}</h3><ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul></div>)}</div></div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="page-width contact-grid"><div><h2 id="contact-title">Talk through your next build.</h2><p>Backend engineering, useful automation, or a product idea that needs a practical plan.</p></div><div className="contact-actions"><a className="contact-email" href={`mailto:${email}`}>{email}<ArrowUpRight size={25} aria-hidden="true" /></a><div className="contact-socials"><a href="https://github.com/ahmadrao17" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight size={17} aria-hidden="true" /></a><a href="https://www.linkedin.com/in/ahmadrao17" target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a></div></div></div>
        </section>
      </main>
      <footer className="site-footer"><div className="page-width footer-inner"><span>Muhammad Ahmad · Software Engineer</span><a href={`mailto:${email}`}><Mail size={16} aria-hidden="true" /> Email</a><span>Lahore, Pakistan</span></div></footer>
    </>
  )
}

export default App
