import "./App.css";
import Lebenslauf from "./components/Lebenslauf";
import Formular from "./components/Formular";
import FormularEins from "./components/FormularEins";
import FormularZwei from "./components/FormularZwei";
import Startseite from "./components/Startseite";
import Templates from "./components/Templates";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import UserContext from "./context/UserContext";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const location = useLocation();
  const user = useState({
    template: "",
    name: "",
    vorname: "",
    born: "",
    alter: "",
    strasse: "",
    hausnummer: "",
    plz: "",
    stadt: "",
    mail: "",
    tel: "",
    start: "",
    end: "",
    unternehmen: "",
    stellen: "",
    startEins: "",
    endEins: "",
    unternehmenEins: "",
    stellenEins: "",
    startZwei: "",
    endZwei: "",
    unternehmenZwei: "",
    stellenZwei: "",
  });

  // useEffect(() => {
  //   const userData = JSON.parse(localStorage.getItem("data"));

  //   if (userData) {
  //     setUser(userData);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(user));
  }, [user]);

  // useEffect(() => {
  //   const cartItemsData = JSON.parse(localStorage.getItem('cartItems'))

  //   if (cartItemsData) {
  //       setCartItems(cartItemsData)
  //   }
  // }, [])

  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems))
  // }, [cartItems])
  return (
    <UserContext.Provider value={user}>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Startseite />} />
          <Route path="/templates" element={<Templates />}></Route>
          <Route path="/formular" element={<Formular />} />
          <Route path="/formular1" element={<FormularEins />} />
          <Route path="/formular2" element={<FormularZwei />} />
          <Route path="/formular/:template" element={<Lebenslauf />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AnimatePresence>
    </UserContext.Provider>
  );
}

export default App;
