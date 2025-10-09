import { projects } from "../data/projects.json";
import "../styles/ProjectsPage.css";
import projectOne from "../assets/images/dashboard2.jpg";

function ProjectsPage() {
  console.log(projects);
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        {projects.map((project) => (
          <div className="project-item" key={project.id}>
            <div className="project-content">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="project-tech">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
            <div className="project-image">
              <img src={projectOne} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
