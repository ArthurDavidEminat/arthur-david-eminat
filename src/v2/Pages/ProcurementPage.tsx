import { useState } from "react";
import "../../styles/ExperiencePage.css";
import "../../styles/ProcurementPage.css";
import experience from "../../data/experience.json";

type Experience = {
  id: number;
  company: string;
  title: string;
  duration: string;
  achievements: string[];
};

function ProcurementPage() {
  // Filter procurement-related experiences (NSSF roles)
  const procurementExperiences: Experience[] = experience.experience.filter(
    (exp) => exp.company === "National Social Security Fund"
  );

  const [experienceToDisplay, setExperienceToDisplay] = useState<Experience>(
    procurementExperiences[0]
  );

  return (
    <main>
      <section className="procurement-hero">
        <div className="container">
          <h1 className="page-title">Procurement & Strategic Sourcing</h1>
          <p className="page-subtitle">
            Enterprise procurement professional with over a decade of experience
            driving cost savings, improving supplier performance, and
            strengthening risk controls across technology, cloud, SaaS, and
            financial services environments.
          </p>
        </div>
      </section>

      <section className="procurement-content">
        <div className="container">
          <div className="procurement-stats">
            <div className="stat-card">
              <h3>$18.97M+</h3>
              <p>Cost Savings Delivered</p>
            </div>
            <div className="stat-card">
              <h3>10+ Years</h3>
              <p>Procurement Experience</p>
            </div>
            <div className="stat-card">
              <h3>50+ Suppliers</h3>
              <p>Managed & Onboarded</p>
            </div>
            <div className="stat-card">
              <h3>40%</h3>
              <p>Cycle Time Reduction</p>
            </div>
          </div>

          <div className="procurement-expertise">
            <h2 className="section-title">Core Expertise</h2>
            <div className="expertise-grid">
              <div className="expertise-card">
                <h4>Strategic Sourcing</h4>
                <ul>
                  <li>Category management & spend analysis</li>
                  <li>Multi-million dollar contract negotiations</li>
                  <li>Supplier relationship management</li>
                  <li>Market intelligence & benchmarking</li>
                </ul>
              </div>
              <div className="expertise-card">
                <h4>Contract Management</h4>
                <ul>
                  <li>Contract lifecycle management</li>
                  <li>Vendor performance optimization</li>
                  <li>Risk mitigation & compliance</li>
                  <li>ESG integration frameworks</li>
                </ul>
              </div>
              <div className="expertise-card">
                <h4>Analytics & Technology</h4>
                <ul>
                  <li>ERP integration (SAP, Oracle, NetSuite)</li>
                  <li>Power BI & Tableau dashboards</li>
                  <li>Process automation & optimization</li>
                  <li>Data-driven decision support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="procurement-experience">
            <h2 className="section-title">Professional Experience</h2>
            <div className="experience-timeline">
              <div>
                <ul>
                  {procurementExperiences.map((experience) => (
                    <li key={experience.id}>
                      <button
                        className={
                          experience.id === experienceToDisplay.id
                            ? "experience-button active"
                            : "experience-button"
                        }
                        onClick={() => setExperienceToDisplay(experience)}
                      >
                        {experience.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="experience-item">
                  <div className="experience-header">
                    <h3 className="job-title">
                      {experienceToDisplay.title}
                      <span className="company">
                        {" "}
                        @ {experienceToDisplay.company}
                      </span>
                    </h3>
                    <span className="duration">
                      {experienceToDisplay.duration}
                    </span>
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
        </div>
      </section>
    </main>
  );
}

export default ProcurementPage;

