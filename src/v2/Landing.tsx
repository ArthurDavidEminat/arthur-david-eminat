import "../styles/LandingPage.css";
import "../styles/AboutPage.css";
import AboutPage from "../Pages/AboutPage";
import EducationPage from "../Pages/EducationPage";

export default function LandingPage() {
  return (
    <main>
      {/* HERO */}
      <section id="home" className="hero-section">
        <div>
          <h1 className="hi">Hi, my name is</h1>
        </div>
        <div>
          <h1 className="hero-title">Arthur David Eminat</h1>
        </div>
        <div>
          <h2>Procurement Specialist | Trader</h2>
        </div>

        <p className="hero-description">
          I work at the intersection of procurement, risk, and financial markets
          — applying data-driven decision-making, supply-demand analysis, and
          disciplined execution to create value across complex commercial
          environments.
        </p>

        <div className="hero-buttons">
          <a href="#about" className="btn btn-primary">
            Explore Procurement Expertise
          </a>
          <a href="/trading" className="btn btn-primary">
            View Trading Profile
          </a>
        </div>
      </section>
      <AboutPage />
      {/* CREDIBILITY STRIP */}
      <section className="credibility">
        <p>
          10+ years in procurement & strategic sourcing • 5+ years trading
          global markets • $18M+ in cost savings delivered • Multi-asset trading
          experience
        </p>
      </section>

      {/* TWO PATHS */}
      <section className="paths">
        <div className="path-card procurement">
          <h4>Procurement & Strategic Sourcing</h4>
          <p>
            Enterprise procurement professional with over a decade of experience
            driving cost savings, improving supplier performance, and
            strengthening risk controls across technology, cloud, SaaS, and
            financial services environments.
          </p>

          <ul>
            <li>Strategic sourcing & category management</li>
            <li>Vendor negotiations & contract lifecycle management</li>
            <li>ESG integration & supplier risk frameworks</li>
            <li>ERP, analytics, and performance dashboards</li>
          </ul>

          <a href="/procurement" className="text-link">
            Explore Procurement Work →
          </a>
        </div>

        <div className="path-card trading">
          <h4>Trading & Portfolio Analysis</h4>
          <p>
            Trader and portfolio analyst with five years of experience executing
            discretionary and systematic strategies across index futures, FX,
            commodities, and crypto, supported by rigorous risk management and
            analytics.
          </p>

          <ul>
            <li>Supply - demand & market structure analysis</li>
            <li>Volatility regimes & macro catalysts</li>
            <li>Portfolio hedging & scenario modeling</li>
            <li>SQL-driven dashboards for risk & P&L</li>
          </ul>

          <a href="/trading" className="text-link">
            View Trading Profile →
          </a>
        </div>
      </section>

      <EducationPage />

      {/* PHILOSOPHY */}
      {/* <section className="philosophy">
        <h3>One Framework. Two Applications.</h3>
        <ul>
          <li>Data over intuition</li>
          <li>Risk before reward</li>
          <li>Structure before execution</li>
          <li>Discipline over emotion</li>
        </ul>
      </section> */}

      {/* EXPERIENCE SNAPSHOT */}
      {/* <section className="experience">
        <h3>Selected Experience</h3>
        <ul>
          <li>
            $18.9M in procurement savings through analytics-driven sourcing
          </li>
          <li>
            Real-time analytics dashboards supporting executive and trading
            decisions
          </li>
          <li>
            Multi-asset portfolio management with structured volatility hedging
          </li>
          <li>Automation initiatives delivering up to 80% efficiency gains</li>
        </ul>
      </section> */}

      {/* FINAL CTA */}
      <section className="cta">
        <div>
          <h3>Let's Connect</h3>
          <p>
            I'm always open to discussions around procurement strategy, market
            structure, analytics, and risk-based decision-making.
          </p>

          <div className="cta-actions">
            <a
              href="/assets/Arthur-Procurement-Resume.pdf"
              className="btn btn-secondary"
            >
              Download Procurement Resume
            </a>
            <a
              href="/assets/Arthur-Trading-Resume.pdf"
              className="btn btn-secondary"
            >
              Download Trading Resume
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/arthur-david-eminat"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      {/* <footer>
        <p>MBA | CAIA Level I (In Progress) | CIPS | ESG Certified</p>
      </footer> */}
    </main>
  );
}
