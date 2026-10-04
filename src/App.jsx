import './App.css'
import Projects from './project.jsx'

const skills = ['HTML & CSS', 'JavaScript', 'React', 'Git & GitHub', 'Responsive UI']

function App() {
  return (
    <main>
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Addor-Nyuienyo Kofi home"><span className="brand-mark">ANK</span><span>Addor-Nyuienyo Kofi</span></a>
        <div className="nav-links"><a className="active" href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
        <a className="contact-button" href="#contact">Get in touch <span aria-hidden="true">→</span></a>
      </nav>
      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="status"><span className="status-dot" aria-hidden="true" /> Available for internships &amp; junior roles</p>
          <p className="hello">Hello, I&apos;m <span>Addor-Nyuienyo Kofi</span></p>
          <h1>Front-End <span className="name-accent">Developer<span className="name-period">.</span></span></h1>
          <p className="hero-intro">I design and build clean, responsive web experiences. I&apos;m looking for a team where I can contribute, learn quickly, and grow.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">View my work <span aria-hidden="true">↗</span></a>
            <a className="secondary-button" href="#contact">Let&apos;s connect</a>
          </div>
        </div>
      </section>
      <section className="info-grid">
        <article id="about"><span className="card-icon violet">◎</span><p className="card-label">FOR RECRUITERS</p><h2>A curious, reliable teammate.</h2><p>I&apos;m developing strong web fundamentals and looking for an entry-level role where I can contribute, learn quickly, and grow with a supportive team.</p></article>
        <article id="skills"><span className="card-icon pink">⌘</span><p className="card-label">SKILLS</p><h2>My growing toolkit.</h2><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>
        <article><span className="card-icon orange">✦</span><p className="card-label">WHAT I BRING</p><h2>Thoughtful foundations.</h2><ul><li>Responsive interface building</li><li>Clear, maintainable code</li><li>A genuine learning mindset</li></ul></article>
        <article className="quote-card"><span className="card-icon yellow">“</span><p className="card-label">CURRENTLY</p><blockquote>Building locally, learning daily, and preparing for my first professional opportunity.</blockquote></article>
      </section>
      <Projects />
      <footer className="site-footer">
        <section className="footer-cta" id="contact" aria-labelledby="footer-title">
          <p className="footer-eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2 id="footer-title">Let&apos;s connect and craft something impactful.</h2>
          <p className="footer-message">I am always excited for the new adventures ahead.</p>
          <a className="footer-conversation" href="mailto:addornyuienyokofi9@gmail.com">
            Start a conversation <span aria-hidden="true">→</span>
          </a>
          <div className="footer-socials" aria-label="Contact and project links">
            <a
              className="footer-social-link"
              href="https://github.com/Unrhuly/my-portfolio"
              aria-label="View the portfolio on GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.1-1.5 6.1-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6s-1.2-.4-3.8 1.4a13 13 0 0 0-6.9 0C5.4 1.1 4.2 1.5 4.2 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.1 6.4 6.1 6.7a3.4 3.4 0 0 0-.9 2.7V22" />
              </svg>
            </a>
            <a
              className="footer-social-link"
              href="mailto:addornyuienyokofi9@gmail.com"
              aria-label="Email Addor-Nyuienyo Kofi"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m4 7 8 6 8-6" />
              </svg>
            </a>
          </div>
        </section>
        <div className="copyright-bar">
          <small>© {new Date().getFullYear()} Addor-Nyuienyo Kofi. Built with curiosity.</small>
        </div>
      </footer>
    </main>
  )
}

export default App
