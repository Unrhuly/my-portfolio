import agriculturalFlyer from './assets/images/projects/Agricultural Education Flyer.jpg'
import secondHandStore from './assets/images/projects/Second hand shops.jpg'
import eventPlanning from './assets/images/projects/events.jpg'
import { Link } from 'react-router-dom'

const projects = [
  {
    title: 'AgriFresh',
    description: 'A platform for farmers to sell their fresh farm produce.',
    tags: ['React', 'CSS'],
    number: '01',
    image: agriculturalFlyer,
  },
  {
    title: 'The SecondHand Corner',
    description:
      'A simple online selling platform for second-hand items, built with HTML, CSS, and JavaScript.',
    tags: ['JavaScript', 'HTML'],
    number: '02',
    image: secondHandStore,
  },
  {
    title: 'EventPlus',
    description:
      'A platform for event organizers to manage and promote their events, built with Vue.js and responsive design principles.',
    tags: ['Vue', 'Responsive'],
    number: '03',
    image: eventPlanning,
  },
]

export default function Projects() {
  return (
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
              <div className="project-banner project-banner-image" aria-hidden="true">
                <img className="project-banner-art" src={project.image} alt="" />
                <span className="project-number">{project.number}</span>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>

                <Link className="project-link" to="/projects/my-portfolio">
                  <span>View project</span>
                  <svg viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M3 11L11 3" />
                    <path d="M5 3H11V9" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
