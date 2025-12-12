import Header from "./components/Header";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import EducationPage from "./Pages/EducationPage";
import ExperiencePage from "./Pages/ExperiencePage";
import ProjectsPage from "./Pages/ProjectsPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <LandingPage />
        <AboutPage />
        <EducationPage />
        <ExperiencePage />
        <ProjectsPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
