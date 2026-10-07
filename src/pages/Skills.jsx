import { Link } from 'react-router-dom'

const skillGroups = [
  {
    marker: '01',
    label: 'FOUNDATIONS',
    title: 'Web foundations',
    detail: 'HTML · CSS · Responsive UI',
  },
  {
    marker: '02',
    label: 'FRONT-END',
    title: 'Interactive experiences',
    detail: 'JavaScript · React',
  },
  {
    marker: '03',
    label: 'TOOLS & PRACTICES',
    title: 'Thoughtful development',
    detail: 'Git & GitHub · Debugging · Collaboration',
  },
]

export default function Skills() {
  return (
    <main className="about-page">
      <div className="about-layout">
        <section className="about-copy" aria-labelledby="skills-title">
          <Link className="about-back" to="/">
            <span aria-hidden="true">←</span> Back
          </Link>
          <p className="about-kicker">03&nbsp;&nbsp; SKILLS</p>
          <h1 className="about-title" id="skills-title">
            Growing<br />
            <span>my toolkit.</span>
          </h1>
          <p className="about-description">
            The tools and skills I use to create responsive, thoughtful web
            experiences, and the practices I continue to develop with every
            project.
          </p>
        </section>

        <section className="about-details" aria-label="Skills and technologies">
          {skillGroups.map((group) => (
            <article className="about-detail-card" key={group.marker}>
              <span className="about-detail-marker">{group.marker}</span>
              <div className="about-detail-copy">
                <p className="about-detail-label">{group.label}</p>
                <h2>{group.title}</h2>
                <p className="about-detail-note">{group.detail}</p>
              </div>
              <span className="about-detail-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </section>
      </div>
    </main>
  )
}
