import "../styles/AboutPage.css";

function AboutPage() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Investment Research and Market Analysis Expert with a decade of
              experience in financial markets, digital assets, and strategic
              business intelligence. I specialize in conducting comprehensive
              market research across traditional and emerging asset classes,
              utilizing advanced analytics including on-chain metrics, COT data,
              and AI-driven sentiment analysis.
            </p>
            <p>
              I have demonstrated success managing institutional portfolios,
              creating executive-level research frameworks, and delivering
              strategic insights that inform multi-million dollar investment
              decisions and business strategies. My expertise spans digital
              assets, blockchain technology, and traditional financial markets.
            </p>
          </div>

          <div className="skills-section">
            <h3>Core Competencies:</h3>
            <ul className="skills-list">
              <li>Strategic Planning</li>
              <li>Investment Analysis</li>
              <li>Digital Asset Strategy</li>
              <li>Blockchain & DeFi</li>
              <li>ESG Frameworks</li>
              <li>Risk Management</li>
              <li>Portfolio Optimization</li>
              <li>Business Intelligence</li>
            </ul>

            <h3>Technical Skills:</h3>
            <ul className="skills-list">
              <li>SQL & Power BI</li>
              <li>SAP & Oracle</li>
              <li>Financial Modeling</li>
              <li>On-Chain Analytics</li>
              <li>Algorithmic Trading</li>
              <li>Predictive Analytics</li>
              <li>Dashboard Development</li>
              <li>Agile Project Management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
