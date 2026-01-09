function ProjectItem(props) {
  const { project } = props;
  return (
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
    </div>
  );
}

export default ProjectItem;
