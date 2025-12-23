import { projects } from "../data/projects.json";
import "../styles/ProjectsPage.css";
import skyfallDashboard from "../assets/images/skyfall-dashboard.svg";
import treadstoneDashboard from "../assets/images/treadstone-dashboard.svg";
import alexaDashboard from "../assets/images/alexa-dashboard.svg";
import thunderballDashboard from "../assets/images/thunderball-dashboard.svg";
import abatisDashboard from "../assets/images/abatis-dashboard.svg";
import portfolioDashboard from "../assets/images/portfolio-dashboard.svg";

// Map project IDs to their respective dashboard images
const projectImages: { [key: number]: string } = {
  1: skyfallDashboard,
  2: treadstoneDashboard,
  3: alexaDashboard,
  4: thunderballDashboard,
  5: abatisDashboard,
  6: portfolioDashboard,
};

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
              <img
                src={projectImages[project.id]}
                alt={`${project.name} dashboard`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
