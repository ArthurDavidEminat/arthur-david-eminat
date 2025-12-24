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
                I am a commercial and analytical professional with over a decade
                of experience spanning enterprise procurement, data analytics,
                and financial markets. Across both procurement and trading, my
                work is grounded in the same principles: understanding
                structure, managing risk, pricing accurately, and executing with
                discipline.
              </p>

              <p>
                I began my career in procurement and supply chain operations,
                where I led strategic sourcing initiatives, negotiated
                multimillion-dollar contracts, and built analytics frameworks
                that delivered measurable outcomes — including over{" "}
                <strong>$18M in cumulative cost savings</strong>, improved
                supplier performance, and strengthened risk controls across
                technology and financial services environments.
              </p>

              <p>
                Over time, my focus expanded into advanced analytics, portfolio
                thinking, and market dynamics. This led me into active trading
                and portfolio analysis, where I apply supply-demand analysis,
                market structure, macro context, and quantitative tools across
                futures, FX, commodities, and digital assets. Whether managing a
                supplier portfolio or market exposure, my approach remains
                systematic, data-driven, and risk-first.
              </p>
            </div>

            <div className="skills-section">
              <h3>Core Competencies</h3>
              <ul className="skills-list">
                <li>Strategic Sourcing & Procurement</li>
                <li>Market & Investment Analysis</li>
                <li>Risk Management & Scenario Modeling</li>
                <li>Supply–Demand & Market Structure Analysis</li>
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
