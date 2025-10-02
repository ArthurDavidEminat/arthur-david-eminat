import { useState } from "react";
import "../styles/ExperiencePage.css";
import experience from "../data/experience.json";

type Experience = {
  id: number;
  company: string;
  title: string;
  duration: string;
  achievements: string[];
};

function ExperiencePage() {
  const experiences: Experience[] = experience.experience;

  const [experienceToDisplay, setExperienceToDisplay] = useState<Experience>(
    experiences[0]
  );

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          <div>
            <ul>
              {experiences.map((experience) => (
                <li key={experience.id}>
                  <button
                    className={
                      experience.id === experienceToDisplay.id
                        ? "experience-button active"
                        : "experience-button"
                    }
                    onClick={() => setExperienceToDisplay(experience)}
                  >
                    {experience.company}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="experience-item">
              <div className="experience-header">
                <h3 className="job-title">
                  {`${experienceToDisplay.title} `}
                  <span className="company">
                    @ {experienceToDisplay.company}
                  </span>
                </h3>
                {/* <span className="company">Family Office</span> */}
                <span className="duration">{experienceToDisplay.duration}</span>
              </div>
              <ul className="job-description">
                {experienceToDisplay.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
