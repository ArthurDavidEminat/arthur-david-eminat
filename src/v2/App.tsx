import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing";
import ProcurementPage from "./Pages/ProcurementPage";
import TradingPage from "./Pages/TradingPage";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ScrollToTop from "../components/ScrollToTop";
import { NAV_ITEMS } from "../constants";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header navItems={NAV_ITEMS} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/procurement" element={<ProcurementPage />} />
        <Route path="/trading" element={<TradingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
