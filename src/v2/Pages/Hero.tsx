import { Link } from "react-router-dom";
import "../../styles/LandingPage.css";
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div>
        <h1 className="hi">Hi, my name is</h1>
      </div>
      <div>
        <h1 className="hero-title">Arthur David Eminat</h1>
      </div>
      <div>
        <h2>Strategic Procurement & Analytics Leader</h2>
      </div>

      <p className="hero-description">
        Delivering enterprise cost optimization, supplier risk control, and
        executive decision frameworks across regulated environments.
        <br />
        $18.9M+ realized savings | 250 Global supplier portfolios | Data-driven
        risk management
      </p>

      <div className="hero-buttons">
        <Link to="/procurement" className="btn btn-primary">
          View Procurement & ESG Leadership
        </Link>
        <Link to="/trading" className="btn btn-secondary">
          Market & Trading Analytics (Applied)
        </Link>
      </div>
    </section>
  );
}

export default Hero;
