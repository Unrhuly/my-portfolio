import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <main className="contact-page">
      <div className="contact-layout">
        <section className="contact-copy" aria-labelledby="contact-title">
          <Link className="contact-back" to="/">
            <span aria-hidden="true">←</span> Back
          </Link>
          <p className="contact-kicker">06&nbsp;&nbsp; CONTACT</p>
          <h1 className="contact-title" id="contact-title">
            Let&apos;s<br />
            <span>connect.</span>
          </h1>
          <p className="contact-description">
            Have an opportunity or a technology idea you&apos;d like to discuss?
            Feel free to reach out.
          </p>
        </section>

        <section className="contact-details" aria-label="Contact details">
          <a className="contact-detail-card" href="mailto:addornyuienyokofi9@gmail.com">
            <span className="contact-detail-marker" aria-hidden="true">@</span>
            <span className="contact-detail-copy">
              <span className="contact-detail-label">EMAIL</span>
              <span className="contact-detail-value">addornyuienyokofi9@gmail.com</span>
            </span>
            <span className="contact-detail-arrow" aria-hidden="true">↗</span>
          </a>

          <div className="contact-detail-card">
            <span className="contact-detail-marker" aria-hidden="true">TEL</span>
            <span className="contact-detail-copy">
              <span className="contact-detail-label">PHONE</span>
              <a className="contact-detail-value" href="tel:0537266558">0537266558</a>
              <a className="contact-detail-value" href="tel:0537265237">0537265237</a>
            </span>
            <span className="contact-detail-arrow" aria-hidden="true">↗</span>
          </div>

          <a
            className="contact-detail-card"
            href="https://github.com/Unrhuly"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-detail-marker" aria-hidden="true">GH</span>
            <span className="contact-detail-copy">
              <span className="contact-detail-label">GITHUB</span>
              <span className="contact-detail-value">github.com/Unrhuly</span>
            </span>
            <span className="contact-detail-arrow" aria-hidden="true">↗</span>
          </a>

          <a
            className="contact-detail-card"
            href="https://www.linkedin.com/in/kofi-addor-nyuienyo-883821358/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-detail-marker" aria-hidden="true">in</span>
            <span className="contact-detail-copy">
              <span className="contact-detail-label">LINKEDIN</span>
              <span className="contact-detail-value">linkedin.com/in/kofi-addor-nyuienyo-883821358</span>
            </span>
            <span className="contact-detail-arrow" aria-hidden="true">↗</span>
          </a>

        </section>
      </div>
    </main>
  )
}
