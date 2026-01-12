import { Link } from "react-router-dom";
import "../../styles/ExperiencePage.css";

function ExperiencePage() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        {/* PRIMARY SECTION */}
        <div className="experience-primary">
          <h3 className="primary-section-title">
            Procurement, Analytics & ESG Leadership
          </h3>
          <p className="primary-section-description">
            Enterprise-scale sourcing, supplier governance, cost optimization,
            and risk management.
          </p>
          <ul className="key-outcomes">
            <li>$18.9M+ realized cost savings</li>
            <li>$100M+ procurement portfolios governed</li>
            <li>Supplier risk, ESG, and compliance frameworks implemented</li>
            <li>Executive dashboards supporting senior leadership</li>
          </ul>
          <Link to="/procurement" className="text-link">
            Explore Procurement Work →
          </Link>
        </div>

        {/* SECONDARY SECTION */}
        <div className="experience-secondary">
          <h3 className="secondary-section-title">
            Market & Trading Analytics (Applied Capability)
          </h3>
          <p className="secondary-section-description">
            Analytical extension focused on supply–demand, market structure, and
            portfolio risk.
          </p>
          <Link to="/trading" className="text-link">
            View Trading Profile →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
