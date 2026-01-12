import "../styles/AboutPage.css";
import ArthurProfilePicture from "../assets/images/dae.jpg";

function AboutPage() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <p className="section-subtitle">
          Procurement • Analytics • Financial Markets
        </p>

        <div className="about-content">
          <div>
            <div className="about-text">
              <p>
                Strategic procurement and analytics professional with over a
                decade of experience designing and executing enterprise-level
                sourcing, risk, and performance optimization initiatives across
                regulated environments.
              </p>

              <p>
                Specializes in solving high-impact commercial and risk problems
                controlling supplier exposure, improving cost structures, and
                building analytics systems that support executive
                decision-making.
              </p>

              <p>
                Delivered $18.9M+ in documented cost savings, strengthened
                supplier governance, and improved operational resilience across
                large procurement portfolios.
              </p>
              <p>
                Applies the same analytical and risk-first principles to market
                and portfolio analysis across futures, FX, commodities, and
                digital assets.
              </p>
            </div>

            <div className="skills-section">
              <h3>Core Competencies</h3>
              <ul className="skills-list">
                <li>Strategic Sourcing & Procurement</li>
                <li>Market & Investment Analysis</li>
                <li>Risk Management & Scenario Modeling</li>
                <li>Supply-Demand & Market Structure Analysis</li>
                <li>Vendor Negotiation & Contract Lifecycle Management</li>
                <li>Portfolio & Performance Optimization</li>
                <li>ESG & Governance Frameworks</li>
                <li>Business Intelligence & Decision Support</li>
              </ul>

              <h3>Technical & Analytical Skills</h3>
              <ul className="skills-list">
                <li>SQL, Power BI & Tableau</li>
                <li>ERP Systems (SAP, Oracle, NetSuite)</li>
                <li>Financial & Quantitative Modeling</li>
                <li>Trading Analytics & Risk Dashboards</li>
                <li>Predictive & Scenario Analytics</li>
                <li>Advanced Excel</li>
                <li>Process Automation & Optimization</li>
                <li>Agile Project Management</li>
              </ul>
            </div>
          </div>

          <div>
            <div style={{ position: "relative" }}>
              <div className="image-wrapper">
                <img src={ArthurProfilePicture} alt="Arthur profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
