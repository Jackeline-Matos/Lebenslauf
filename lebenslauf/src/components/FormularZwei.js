import { motion } from "framer-motion";
import "./Formular.css";
import { useState } from "react";
const FormularZwei = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "window.innerWidth", transition: { duration: 0.1 } }}
    >
      <h1>Schulbildung</h1>

      <form>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="ausbildung">Schulform</label>
            <input type="text" id="ausbildung" />
          </div>
          <div className="flex">
            <label htmlFor="vorname">Schule</label>
            <input type="text" id="schule" />
          </div>
          <div className="flex-eins">
            <label>von</label>
            <input type="date" id="start-schule" />
          </div>

          <div className="flex-eins">
            <label>bis</label>
            <input type="date" id="end-schule" />
          </div>
        </div>

        <div className="zeile">
          <div className="flex">
            <label htmlFor="ausbildung">Studium</label>
            <input type="text" id="bachelor" />
          </div>
          <div className="flex">
            <label htmlFor="universitat">Universität</label>
            <input type="text" id="universitat" />
          </div>
          <div className="flex-eins">
            <label>Von</label>
            <input type="date" id="start-universitat" />
          </div>

          <div className="flex-eins">
            <label>bis</label>
            <input type="date" id="end-universitat" />
          </div>
        </div>

        <div className="zeile">
          <div className="flex-zwei">
            <label>Abschluss</label>
            <select>
              <option value="grapefruit"></option>
              <option value="lime"></option>
              <option selected value="coconut"></option>
              <option value="mango"></option>
            </select>
          </div>
          <div className="flex-zwei">
            <label>Studiengang</label>
            <input type="text" id="universitat" />
          </div>
          <div className="flex-zwei">
            <label>am</label>
            <input type="date" id="end-universitat" />
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default FormularZwei;
