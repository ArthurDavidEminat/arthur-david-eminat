import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import "../styles/AboutPage.css";
import AboutPage from "../Pages/AboutPage";
import EducationPage from "../Pages/EducationPage";
import ExperiencePage from "./Pages/ExperiencePage";
import Connect from "./Pages/Connect";
import Header from "../components/Header";
const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "connect", label: "Let's Connect" },
];
export default function LandingPage() {
  return (
    <div>
      <Header navItems={navItems} />
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
            <h2>Strategic Procurement & Analytics Leader</h2>
          </div>

          <p className="hero-description">
            Delivering enterprise cost optimization, supplier risk control, and
            executive decision frameworks across regulated environments.
            <br />
            $18.9M+ realized savings | 250 Global supplier portfolios |
            Data-driven risk management
          </p>

          <div className="hero-buttons">
            <Link to="/procurement" className="btn btn-primary">
              View Procurement & ESG Leadership
            </Link>
            <Link to="/trading" className="btn btn-primary">
              Market & Trading Analytics (Applied)
            </Link>
          </div>
        </section>
        <AboutPage />

        <ExperiencePage />
        <EducationPage />

        <Connect />

        {/* FOOTER */}
        {/* <footer>
        <p>MBA | CAIA Level I (In Progress) | CIPS | ESG Certified</p>
      </footer> */}
      </main>
    </div>
  );
}
