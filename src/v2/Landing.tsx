import AboutPage from "../Pages/AboutPage";
import EducationPage from "../Pages/EducationPage";
import ExperiencePage from "./Pages/ExperiencePage";
import Connect from "./Pages/Connect";
import Hero from "./Pages/Hero";
import Projects from "../Pages/Projects";

function Landing() {
  return (
    <main>
      <Hero />
      <AboutPage />
      <ExperiencePage />
      <Projects />
      <EducationPage />
      <Connect />
    </main>
  );
}

export default Landing;
