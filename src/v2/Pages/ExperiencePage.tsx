import { Link } from "react-router-dom";
import "../../styles/ExperiencePage.css";

function ExperiencePage() {
  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        {/* CREDIBILITY STRIP */}
        <div className="credibility">
          <p>
            10+ years in procurement & strategic sourcing • 5+ years trading
            global markets • $18M+ in cost savings delivered • Multi-asset
            trading experience
          </p>
        </div>
        <div className="paths">
          <div className="path-card procurement">
            <h4>Procurement & Strategic Sourcing</h4>
            <p>
              Enterprise procurement professional with over a decade of
              experience driving cost savings, improving supplier performance,
              and strengthening risk controls across technology, cloud, SaaS,
              and financial services environments.
            </p>

            <ul>
              <li>Strategic sourcing & category management</li>
              <li>Vendor negotiations & contract lifecycle management</li>
              <li>ESG integration & supplier risk frameworks</li>
              <li>ERP, analytics, and performance dashboards</li>
            </ul>

            <Link to="/procurement" className="text-link">
              Explore Procurement Work →
            </Link>
          </div>

          <div className="path-card trading">
            <h4>Trading & Portfolio Analysis</h4>
            <p>
              Trader and portfolio analyst with five years of experience
              executing discretionary and systematic strategies across index
              futures, FX, commodities, and crypto, supported by rigorous risk
              management and analytics.
            </p>

            <ul>
              <li>Supply - demand & market structure analysis</li>
              <li>Volatility regimes & macro catalysts</li>
              <li>Portfolio hedging & scenario modeling</li>
              <li>SQL-driven dashboards for risk & P&L</li>
            </ul>

            <Link to="/trading" className="text-link">
              View Trading Profile →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePage;
