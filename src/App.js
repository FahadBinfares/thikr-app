import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import MorningDhikrPage from "./Pages/MorningDhikrPage";
import EveningDhikrPage from "./Pages/EveningDhikrPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/morning" element={<MorningDhikrPage />} />
        <Route path="/evening" element={<EveningDhikrPage />} />
      </Routes>
    </BrowserRouter>
  );
}
