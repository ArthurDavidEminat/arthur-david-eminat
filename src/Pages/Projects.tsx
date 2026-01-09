import { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import { projects } from "../data/projects.json";
import "../styles/projects.css";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-carousel">
          <button
            className="carousel-button carousel-button-prev"
            onClick={goToPrevious}
            aria-label="Previous project"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="carousel-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="carousel-slide">
                  <ProjectItem project={project} />
                </div>
              ))}
            </div>
          </div>

          <button
            className="carousel-button carousel-button-next"
            onClick={goToNext}
            aria-label="Next project"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
