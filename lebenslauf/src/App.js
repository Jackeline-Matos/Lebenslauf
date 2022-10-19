import "./App.css";
import Lebenslauf from "./components/Lebenslauf";
import Formular from "./components/Formular";
import Startseite from "./components/Startseite";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Startseite />} />
      <Route path="/formular/:template" element={<Formular />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
