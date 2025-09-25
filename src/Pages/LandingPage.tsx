import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <section id="home" className="hero-section">
      <div>
        <h1 className="hi">Hi, my name is</h1>
      </div>
      <div>
        <h1 className="hero-title">Arthur David Eminat</h1>
      </div>
      <div>
        <h2 className="hero-subtitle">
          I am an Investment Research and Market Analysis Expert
        </h2>
      </div>

      <div className="hero-buttons">
        <a href="#about" className="btn btn-primary">
          Learn More
        </a>
        <a href="#contact" className="btn btn-secondary">
          Get In Touch
        </a>
      </div>
    </section>
  );
}

export default LandingPage;
