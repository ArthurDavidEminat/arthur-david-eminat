import AboutPage from "../Pages/AboutPage";
import EducationPage from "../Pages/EducationPage";
import ExperiencePage from "./Pages/ExperiencePage";
import Connect from "./Pages/Connect";
import Hero from "./Pages/Hero";

function Landing() {
  return (
    <main>
      <Hero />
      <AboutPage />
      <ExperiencePage />
      <EducationPage />
      <Connect />
    </main>
  );
}

export default Landing;
