import { Link } from 'react-router-dom'

const technologies = ['React', 'JavaScript', 'Vite', 'CSS', 'React Router']

export default function MyPortfolio() {
  return (
    <main>
      <section className="hero-section" aria-labelledby="portfolio-title">
        <div className="hero-copy">
          <Link className="secondary-button" to="/">
            <span aria-hidden="true">←</span> Back to home
          </Link>
          <p className="status">
            <span className="status-dot" aria-hidden="true" />
            Featured project
          </p>
          <p className="hello">Project detail</p>
          <h1 id="portfolio-title">
            My <span className="name-accent">Portfolio<span className="name-period">.</span></span>
          </h1>
          <p className="hero-intro">
            A responsive portfolio website that introduces me, shares my work,
            and makes it easy to get in touch about opportunities and ideas.
          </p>
          <div className="hero-actions">
            <a
              className="primary-button"
              href="https://github.com/Unrhuly/my-portfolio"
              target="_blank"
              rel="noreferrer"
            >
              View source <span aria-hidden="true">↗</span>
            </a>
            <Link className="secondary-button" to="/#projects">Explore other work</Link>
          </div>
        </div>
      </section>

      <section className="info-grid" aria-label="Portfolio project details">
        <article>
          <span className="card-icon violet" aria-hidden="true">◎</span>
          <p className="card-label">OVERVIEW</p>
          <h2>A home for my work.</h2>
          <p>
            This portfolio presents my background, growing skills, and selected
            projects in one place, with clear paths for visitors to learn more
            or contact me.
          </p>
        </article>

        <article>
          <span className="card-icon pink" aria-hidden="true">⌘</span>
          <p className="card-label">BUILT WITH</p>
          <h2>Tools and technologies.</h2>
          <div className="skill-list">
            {technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </article>

        <article>
          <span className="card-icon orange" aria-hidden="true">✦</span>
          <p className="card-label">HIGHLIGHTS</p>
          <h2>Made to be explored.</h2>
          <ul>
            <li>Responsive layouts for different screen sizes</li>
            <li>Dedicated project showcase and detail route</li>
            <li>Accessible navigation and contact links</li>
          </ul>
        </article>

        <article className="quote-card">
          <span className="card-icon yellow" aria-hidden="true">“</span>
          <p className="card-label">PROCESS</p>
          <blockquote>
            Built as a practical way to keep learning, share progress, and grow
            through real projects.
          </blockquote>
        </article>
      </section>
    </main>
  )
}
