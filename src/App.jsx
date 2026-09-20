import './App.css'

const skills = ['HTML & CSS', 'JavaScript', 'React', 'Git & GitHub', 'Responsive UI']

function App() {
  return (
    <main>
      <nav className="navbar" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Addor-Nyuienyo Kofi home">
          <span className="brand-mark">ANK</span>
          <span>Addor-Nyuienyo Kofi</span>
        </a>
        <div className="nav-links">
          <a className="active" href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="contact-button" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="status"><span /> Aspiring developer</p>
          <p className="hello">Hello, I&apos;m</p>
          <h1>Addor-Nyuienyo<br /><span>Kofi.</span></h1>
          <p className="role">Learn <b>·</b> Build <b>·</b> Grow</p>
          <p className="hero-intro">
            I&apos;m building my path in web development through curiosity,
            creativity, and a passion for meaningful digital experiences.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#skills">Explore my skills <span aria-hidden="true">→</span></a>
            <a className="secondary-button" href="#about">About me</a>
          </div>
        </div>

        <div className="profile-panel" aria-label="About Addor-Nyuienyo Kofi">
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="initials">ANK</div>
          <p className="panel-note">Designing my<br />next chapter.</p>
        </div>
      </section>

      <section className="info-grid">
        <article id="about">
          <span className="card-icon violet">◎</span>
          <p className="card-label">ABOUT ME</p>
          <h2>Driven by curiosity.</h2>
          <p>
            I&apos;m learning to turn ideas into useful, polished experiences for
            the web. This project is part of my journey from learning the
            fundamentals to shipping things that actually work.
          </p>
        </article>
        <article id="skills">
          <span className="card-icon pink">⌘</span>
          <p className="card-label">SKILLS</p>
          <h2>My growing toolkit.</h2>
          <div className="skill-list">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </article>
        <article>
          <span className="card-icon orange">✦</span>
          <p className="card-label">MY FOCUS</p>
          <h2>What motivates me.</h2>
          <ul>
            <li>Creating useful interfaces</li>
            <li>Learning through building</li>
            <li>Growing every day</li>
          </ul>
        </article>
        <article className="quote-card">
          <span className="card-icon yellow">“</span>
          <p className="card-label">MY APPROACH</p>
          <blockquote>Small steps every day create remarkable progress.</blockquote>
        </article>
      </section>

      <section className="contact-section" id="contact">
        <p>Have an idea or opportunity?</p>
        <a href="mailto:addornyuienyokofi9@gmail.com">Let&apos;s connect <span aria-hidden="true">→</span></a>
      </section>

      <footer>
        <div className="footer-intro">
          <span className="footer-mark">ANK</span>
          <div>
            <strong>Addor-Nyuienyo Kofi</strong>
            <p>Building with curiosity and code.</p>
          </div>
        </div>
        <div className="footer-links">
          <p>EXPLORE</p>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-contact">
          <p>GET IN TOUCH</p>
          <a href="mailto:addornyuienyokofi9@gmail.com">addornyuienyokofi9@gmail.com</a>
        </div>
        <small>© {new Date().getFullYear()} Addor-Nyuienyo Kofi</small>
      </footer>
    </main>
  )
}

export default App
