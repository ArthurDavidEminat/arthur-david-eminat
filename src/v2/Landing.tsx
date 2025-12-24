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
            <h2>Procurement & Supply Chain | Market Analysis & Trading</h2>
          </div>

          <p className="hero-description">
            I work at the intersection of procurement, risk, and financial
            markets, translating data, supply-demand dynamics, and market
            signals into disciplined execution and measurable commercial value.
          </p>

          <div className="hero-buttons">
            <Link to="/procurement" className="btn btn-primary">
              Explore Procurement Work
            </Link>
            <Link to="/trading" className="btn btn-primary">
              View Trading Profile
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
