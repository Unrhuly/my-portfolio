import Projects from '../project.jsx'

const skills = ['HTML & CSS', 'JavaScript', 'React', 'Git & GitHub', 'Responsive UI']

export default function Home() {
  return (
    <main>
      <section className="hero-section home-hero" id="home">
        <div className="hero-copy">
          <p className="status"><span className="status-dot" aria-hidden="true" /> Available for internships &amp; junior roles</p>
          <p className="hello">Front-End Developer</p>
          <h1 className="hero-name">ADDOR-NYUIENYO <span>KOFI</span></h1>
          <p className="hero-intro">I build clean, responsive web experiences and practical digital solutions. I&apos;m ready to contribute, keep learning, and grow with a supportive team.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">View my work <span aria-hidden="true">↗</span></a>
            <a className="secondary-button" href="#contact">Let&apos;s connect</a>
          </div>
        </div>
        <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
      </section>
      <section className="info-grid">
        <article id="about"><span className="card-icon violet">◎</span><p className="card-label">FOR RECRUITERS</p><h2>A curious, reliable teammate.</h2><p>I&apos;m developing strong web fundamentals and looking for an entry-level role where I can contribute, learn quickly, and grow with a supportive team.</p></article>
        <article id="skills"><span className="card-icon pink">⌘</span><p className="card-label">SKILLS</p><h2>My growing toolkit.</h2><div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>
        <article><span className="card-icon orange">✦</span><p className="card-label">WHAT I BRING</p><h2>Thoughtful foundations.</h2><ul><li>Responsive interface building</li><li>Clear, maintainable code</li><li>A genuine learning mindset</li></ul></article>
        <article className="quote-card"><span className="card-icon yellow">“</span><p className="card-label">CURRENTLY</p><blockquote>Building locally, learning daily, and preparing for my first professional opportunity.</blockquote></article>
      </section>
      <Projects />
    </main>
  )
}
