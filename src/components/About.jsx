export default function App() {
    return (
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
    )
}
