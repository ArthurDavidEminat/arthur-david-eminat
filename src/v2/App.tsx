import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing";
import ProcurementPage from "./Pages/ProcurementPage";
import TradingPage from "./Pages/TradingPage";
import Footer from "../components/Footer";

function App() {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/procurement" element={<ProcurementPage />} />
          <Route path="/trading" element={<TradingPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
