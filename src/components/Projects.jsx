
import { ExternalLink, Github, BarChart3, Truck, House, Utensils } from 'lucide-react';

const projects = [
  {
    title: 'Business Insights 360',
    category: 'Data Analytics',
    description:
      'An interactive business analytics dashboard to explore sales, finance, marketing and supply chain performance.',
    technologies: ['Power BI', 'DAX', 'ETL'],
    icon: <BarChart3 size={30} />,
    color: 'purple',
    github: '',
    demo: '',
  },
  {
    title: 'Packshift',
    category: 'Web Development',
    description:
      'A responsive website concept for a packaging and shifting service, designed to provide a smooth user experience.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: <Truck size={30} />,
    color: 'blue',
    github: '',
    demo: '',
  },
  {
    title: 'EasyStay',
    category: 'Full-Stack Web',
    description:
      'A web application concept built with server-side rendering and a database for managing accommodation listings.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    icon: <House size={30} />,
    color: 'pink',
    github: '',
    demo: '',
  },
  {
    title: 'Zomato Homepage Clone',
    category: 'Frontend Development',
    description:
      'A food discovery homepage recreation focused on responsive layouts, styling and frontend development practice.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    icon: <Utensils size={30} />,
    color: 'orange',
    github: '',
    demo: '',
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-heading">
        <p className="section-label">MY WORK</p>
        <h2>
          Featured <span>Projects</span>
        </h2>
        <p>
          A selection of projects that showcase my skills and learning journey.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className={`project-visual ${project.color}`}>
              <div className="project-icon">{project.icon}</div>
              <span className="project-category">{project.category}</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Github size={17} /> GitHub
                  </a>
                ) : (
                  <span className="project-link-placeholder">
                    <Github size={17} /> Add GitHub URL
                  </span>
                )}

                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo <ExternalLink size={16} />
                  </a>
                ) : (
                  <span className="project-link-placeholder">
                    Live Demo <ExternalLink size={16} />
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
