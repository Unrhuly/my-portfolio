import agriculturalFlyer from './assets/images/projects/Agricultural Education Flyer.jpg'
import secondHandStore from './assets/images/projects/Second hand shops.jpg'
import eventPlanning from './assets/images/projects/events.jpg'

const projects = [
  {
    title: 'AgriFresh',
    description:
      'A platform for farmers to sell their fresh farm produce.',
    tags: ['React', 'CSS'],
    number: '01',
    gradient: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 38%, #4c1d95 100%)',
    image: agriculturalFlyer,
  },
  {
    title: 'The SecondHand Corner',
    description:
      'A simple online selling platform for second-hand items, built with HTML, CSS, and JavaScript.',
    tags: ['JavaScript', 'HTML'],
    number: '02',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #3b0764 100%)',
    image: secondHandStore,
  },
  {
    title: 'EventPlus',
    description:
      'A platform for event organizers to manage and promote their events, built with Vue.js and responsive design principles.',
    tags: ['Vue', 'Responsive'],
    number: '03',
    gradient: 'linear-gradient(135deg, #d8b4fe 0%, #c084fc 38%, #a78bfa 100%)',
    image: eventPlanning,
  },
]

export default function Projects() {
  return (
    <>
      <style>{`
        .projects-section {
          width: min(1120px, calc(100% - 48px));
          margin: 0 auto;
          padding: 28px 0 80px;
          font-family: 'Segoe UI', sans-serif;
          background: transparent;
        }

        .projects-inner {
          display: flex;
          flex-direction: column;
          gap: 18px;
          padding-top: 20px;
        }

        .section-header {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .section-header p {
          margin: 0;
          color: #6f6b7d;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .section-header h2 {
          margin: 0;
          color: #2f2a38;
          font-size: clamp(2.1rem, 3vw, 2.9rem);
          line-height: 1.05;
          letter-spacing: -0.065em;
          font-weight: 700;
        }

        .section-copy {
          margin: 0;
          color: #6d667d;
          font-size: 1rem;
          line-height: 1.5;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
          margin-top: 10px;
        }

        .project-card {
          overflow: hidden;
          border: 1px solid rgba(119, 107, 146, 0.2);
          border-radius: 18px;
          background: #f5f1f8;
          box-shadow: 0 8px 24px rgba(80, 58, 126, 0.06);
        }

        .project-banner {
          position: relative;
          display: flex;
          align-items: flex-start;
          justify-content: flex-end;
          min-height: 116px;
          padding: 12px 16px 0;
          color: rgba(255, 255, 255, 0.85);
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: -0.04em;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .project-banner-image {
          height: 176px;
          overflow: hidden;
        }

        .project-banner-art {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .project-card:nth-child(1) .project-banner-art {
          object-position: center 78%;
        }

        .project-card:nth-child(2) .project-banner-art {
          object-position: center 38%;
        }

        .project-card:nth-child(3) .project-banner-art {
          object-position: center 42%;
        }

        .project-card:nth-child(2) .project-banner:not(.project-banner-image) {
          background: linear-gradient(120deg, #5b2a7a 0%, #3d1b59 38%, #2d224f 100%);
        }

        .project-card:nth-child(3) .project-banner {
          background: linear-gradient(120deg, #d3c7ff 0%, #b39aff 40%, #8a75e6 100%);
        }

        .project-number {
          position: relative;
          z-index: 1;
          font-size: 1.22rem;
          font-weight: 700;
          opacity: 0.9;
        }

        .project-content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 18px 18px 20px;
          background: rgba(255, 255, 255, 0.32);
        }

        .project-title {
          margin: 0;
          color: #2a2540;
          font-size: 1.15rem;
          font-weight: 700;
          letter-spacing: -0.04em;
        }

        .project-description {
          margin: 0;
          color: #585068;
          font-size: 0.85rem;
          line-height: 1.55;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 2px;
        }

        .project-tags span {
          display: inline-flex;
          align-items: center;
          padding: 5px 8px;
          border-radius: 999px;
          background: rgba(96, 92, 140, 0.08);
          color: #5b5871;
          border: 1px solid rgba(145, 136, 169, 0.18);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 2px;
          color: #2b2442;
          font-size: 0.8rem;
          font-weight: 700;
          text-decoration: none;
        }

        .project-link svg {
          width: 12px;
          height: 12px;
          stroke: currentColor;
          stroke-width: 1.8;
          fill: none;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        @media (max-width: 860px) {
          .project-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="projects-section" id="projects" aria-label="Selected projects">
        <div className="projects-inner">
          <div className="section-header">
            <p>Selected work</p>
            <h2>Small projects, carefully crafted.</h2>
          </div>

          <p className="section-copy">Three Selected Projects Built From Scratch.</p>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div
                  className={`project-banner${project.image ? ' project-banner-image' : ''}`}
                  aria-hidden="true"
                >
                  {project.image && (
                    <img className="project-banner-art" src={project.image} alt="" />
                  )}
                  <span className="project-number">{project.number}</span>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <a className="project-link" href="#contact">
                    <span>View project</span>
                    <svg viewBox="0 0 14 14" aria-hidden="true">
                      <path d="M3 11L11 3" />
                      <path d="M5 3H11V9" />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
