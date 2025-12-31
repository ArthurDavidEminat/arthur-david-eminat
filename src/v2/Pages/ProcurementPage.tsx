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
                <h3>$18.9M+</h3>
                <p>Documented Cost Savings (Enterprise Procurement)</p>
              </div>
              <div className="stat-card">
                <h3>$100M+</h3>
                <p>Procurement Portfolio Oversight</p>
              </div>
              <div className="stat-card">
                <h3>40%</h3>
                <p>Cycle Time Reduction (Supplier Onboarding)</p>
              </div>
              <div className="stat-card">
                <h3>253+</h3>
                <p>Suppliers Managed and Onboarded</p>
              </div>
            </div>

            <div className="procurement-expertise">
              <h2 className="section-title">Core Expertise</h2>
              <div className="expertise-grid">
                <div className="expertise-card">
                  <h4>Strategic Sourcing & ESG</h4>
                  <ul>
                    <li>
                      Designed ESG-integrated sourcing frameworks that
                      strengthened supplier compliance, transparency, and
                      long-term risk oversight across regional portfolios.
                    </li>
                    <li>
                      Led and negotiated $10M+ IT and services contracts,
                      improving commercial terms while aligning supplier
                      incentives with performance and governance objectives.
                    </li>
                    <li>
                      Implemented structured supplier onboarding and compliance
                      processes for 50+ regional suppliers, reducing onboarding
                      cycle time and operational risk.
                    </li>
                    <li>
                      Governed and optimized $100M+ procurement portfolios,
                      improving cost control, supplier performance, and audit
                      readiness across regulated environments.
                    </li>
                  </ul>
                </div>
                <div className="expertise-card">
                  <h4>Contract & Performance Management</h4>
                  <ul>
                    <li>
                      Built and managed end-to-end contract lifecycle management
                      frameworks, improving contract visibility, compliance, and
                      value realization.
                    </li>
                    <li>
                      Developed vendor performance dashboards and scorecards
                      that enabled proactive issue identification and
                      data-driven supplier decisions.
                    </li>
                    <li>
                      Designed and implemented supplier de-risking strategies
                      that reduced operational exposure and improved continuity
                      across critical vendor categories.
                    </li>
                    <li>
                      Led implementation of performance measurement frameworks,
                      achieving a 96% success rate in IT Balanced Scorecard
                      execution.
                    </li>
                  </ul>
                </div>
                <div className="expertise-card">
                  <h4>Analytics & Process Innovation</h4>
                  <ul>
                    <li>
                      Integrated ERP and procurement systems to enable
                      consistent, reliable data flows supporting enterprise
                      reporting and decision-making.
                    </li>
                    <li>
                      Designed executive-level dashboards that translated
                      complex procurement and performance data into actionable
                      insights for senior leadership.
                    </li>
                    <li>
                      Improved contract management efficiency by 80% through
                      process redesign, analytics integration, and workflow
                      optimization.
                    </li>
                    <li>
                      Supported enterprise digital procurement initiatives,
                      including large-scale e-procurement system
                      implementations, improving transparency and process
                      control.
                    </li>
                  </ul>
                </div>
                <div className="expertise-card">
                  <h4>Market & Risk Analytics (Applied Capability)</h4>
                  <ul>
                    <li>
                      Applied supply-demand and market structure analysis to
                      assess risk, volatility regimes, and exposure across
                      multi-asset portfolios.
                    </li>
                    <li>
                      Built scenario and risk models to evaluate portfolio
                      sensitivity under changing macroeconomic and liquidity
                      conditions.
                    </li>
                    <li>
                      Designed analytics dashboards supporting risk monitoring
                      and performance attribution across futures, FX,
                      commodities, and digital assets.
                    </li>
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
