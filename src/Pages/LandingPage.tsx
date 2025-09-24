import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, my name is <span className="highlight">Arthur David Eminat</span>
        </h1>
        <h2 className="hero-subtitle">
          I am an Investment Research and Market Analysis Expert
        </h2>
        <p className="hero-description">
          Investment Research and Market Analysis Expert with a decade of
          experience in financial markets, digital assets, and strategic
          business intelligence. I specialize in conducting comprehensive market
          research across traditional and emerging asset classes, utilizing
          advanced analytics including on-chain metrics, COT data, and AI-driven
          sentiment analysis.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn btn-primary">
            Learn More
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
