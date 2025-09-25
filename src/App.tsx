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
      <main>
        <LandingPage />
        <AboutPage />
        <EducationPage />
        <ExperiencePage />
        <ProjectsPage />
      </main>
    </div>
  );
}

export default App;
