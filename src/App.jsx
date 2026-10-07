import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MyPortfolio from './pages/MyPortfolio.jsx'
import About from './pages/About.jsx'
import Skills from './pages/Skills.jsx'
import Contact from './pages/Contact.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'

function App() {
  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <NavLink className="brand" to="/" aria-label="Addor-Nyuienyo Kofi home">
          <span className="brand-mark">ANK</span>
          <span>KOFI</span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/my-portfolio" element={<MyPortfolio />} />
      </Routes>

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
    </>
  )
}

export default App
