import { Link } from 'react-router-dom'

const profileDetails = [
  {
    marker: '01',
    label: 'NAME',
    value: 'Addor-Nyuienyo Kofi',
    detail: 'Code with purpose. Design with care. Build with intent',
  },
  {
    marker: '02',
    label: 'FOCUS',
    value: 'Responsive web experiences',
    detail: 'HTML & CSS · JavaScript · React',
  },
  {
    marker: '03',
    label: 'APPROACH',
    value: 'Learn · Build · Grow',
    detail: 'Practical projects and thoughtful details',
  },
  {
    marker: '04',
    label: 'NEXT CHAPTER',
    value: 'Internships & junior roles',
    detail: 'Ready to contribute and keep learning',
  },
]

export default function About() {
  return (
    <main className="about-page">
      <div className="about-layout">
        <div className="about-copy">
          <Link className="about-back" to="/">
            <span aria-hidden="true">←</span> Back
          </Link>
          <p className="about-kicker">02&nbsp;&nbsp; ABOUT</p>
          <h1 className="about-title">
            Curious<br />
            <span>by nature.</span>
          </h1>
          <p className="about-description">
            I&apos;m Addor-Nyuienyo Kofi, an aspiring front-end developer who
            enjoys turning ideas into clear, responsive web experiences. I
            learn by building, welcome new challenges, and am excited to grow
            with a supportive team.
          </p>
        </div>

        <div className="about-details" aria-label="About me">
          {profileDetails.map((detail) => (
            <article className="about-detail-card" key={detail.marker}>
              <span className="about-detail-marker">{detail.marker}</span>
              <div className="about-detail-copy">
                <p className="about-detail-label">{detail.label}</p>
                <h2>{detail.value}</h2>
                <p className="about-detail-note">{detail.detail}</p>
              </div>
              <span className="about-detail-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
