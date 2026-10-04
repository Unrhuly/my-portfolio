export default function Hero(){
    return (
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
    ) ;
}