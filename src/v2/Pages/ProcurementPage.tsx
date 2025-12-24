import { useState } from "react";
import "../../styles/ExperiencePage.css";
import "../../styles/ProcurementPage.css";
import experience from "../../data/experience.json";
import Header from "../../components/Header";
import { NavItem } from "../../types";

type Experience = {
  id: number;
  company: string;
  title: string;
  duration: string;
  achievements: string[];
};
const navItems: NavItem[] = [];
function ProcurementPage() {
  // Filter procurement-related experiences (NSSF roles)
  const procurementExperiences: Experience[] = experience.experience.filter(
    (exp) => exp.company === "National Social Security Fund"
  );

  const [experienceToDisplay, setExperienceToDisplay] = useState<Experience>(
    procurementExperiences[0]
  );

  return (
    <div>
      <Header navItems={navItems} />
      <main>
        <section className="procurement-hero">
          <div className="container">
            <h1 className="page-title">Procurement & Strategic Sourcing</h1>
            <p className="page-subtitle">
              Enterprise procurement professional with over a decade of
              experience at National Social Security Fund, driving $18.97M+ in
              cost savings, improving supplier performance, and strengthening
              risk controls across technology, cloud, SaaS, and financial
              services environments. Expert in strategic sourcing, ESG
              frameworks, and data-driven procurement optimization.
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
              <div className="stat-card">
                <h3>160%</h3>
                <p>Above Target Asset Revenue</p>
              </div>
              <div className="stat-card">
                <h3>135%</h3>
                <p>Performance Target Achievement</p>
              </div>
              <div className="stat-card">
                <h3>80%</h3>
                <p>Process Efficiency Improvement</p>
              </div>
            </div>

            <div className="procurement-expertise">
              <h2 className="section-title">Core Expertise</h2>
              <div className="expertise-grid">
                <div className="expertise-card">
                  <h4>Strategic Sourcing & ESG</h4>
                  <ul>
                    <li>ESG sourcing frameworks & category management</li>
                    <li>$10M+ IT service contract negotiations</li>
                    <li>50+ regional supplier onboarding & compliance</li>
                    <li>$100M+ procurement portfolio management</li>
                  </ul>
                </div>
                <div className="expertise-card">
                  <h4>Contract & Performance Management</h4>
                  <ul>
                    <li>Contract lifecycle management & optimization</li>
                    <li>Vendor performance dashboards & tracking</li>
                    <li>De-risking strategies & supplier risk management</li>
                    <li>IT Balanced Scorecard (96% success rate)</li>
                  </ul>
                </div>
                <div className="expertise-card">
                  <h4>Analytics & Process Innovation</h4>
                  <ul>
                    <li>ERP integration (SAP, Oracle, e-GP)</li>
                    <li>
                      Executive dashboards (Power BI, Tableau, Crystal Reports)
                    </li>
                    <li>80% contract management efficiency improvement</li>
                    <li>World Bank e-GP system implementation</li>
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
    </div>
  );
}

export default ProcurementPage;
