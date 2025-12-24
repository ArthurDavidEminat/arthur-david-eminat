import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import LandingPage from "./Landing";
import ProcurementPage from "./Pages/ProcurementPage";
import TradingPage from "./Pages/TradingPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/procurement" element={<ProcurementPage />} />
          <Route path="/trading" element={<TradingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
