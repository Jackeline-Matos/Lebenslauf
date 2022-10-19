import "./App.css";
import Lebenslauf from "./components/Lebenslauf";
import Formular from "./components/Formular";
import Startseite from "./components/Startseite";
import Templates from "./components/Templates";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Startseite />} />
      <Route path="/templates" element={<Templates />}></Route>
      <Route path="/formular" element={<Formular />} />
      <Route path="/formular/:template" element={<Lebenslauf />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
