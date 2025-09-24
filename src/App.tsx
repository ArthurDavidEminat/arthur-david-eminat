import Navigation from "./Navigation";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import EducationPage from "./Pages/EducationPage";
import ExperiencePage from "./Pages/ExperiencePage";
import ProjectsPage from "./Pages/ProjectsPage";

function App() {
  return (
    <div>
      <Navigation />
      <LandingPage />
      <AboutPage />
      <EducationPage />
      <ExperiencePage />
      <ProjectsPage />
    </div>
  );
}

export default App;
