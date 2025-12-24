import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Landing";
import ProcurementPage from "./Pages/ProcurementPage";
import TradingPage from "./Pages/TradingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/procurement" element={<ProcurementPage />} />
        <Route path="/trading" element={<TradingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
