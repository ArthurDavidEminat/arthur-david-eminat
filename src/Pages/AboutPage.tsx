import "../styles/AboutPage.css";
import ArthurProfilePicture from "../assets/images/dae.jpg";

function AboutPage() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-content">
          <div>
            <div className="about-text">
              <p>
                I am an Investment Research and Market Analysis expert with over
                10 years of experience in financial markets, digital assets, and
                business intelligence. I specialize in advanced
                analytics—ranging from on-chain metrics to AI-driven sentiment
                analysis—to deliver insights that guide institutional portfolios
                and multi-million-dollar strategies. My expertise spans
                blockchain, digital assets, and traditional markets.
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
