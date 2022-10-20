import { motion } from "framer-motion";
import "./FormularZwei.css";
import { useState } from "react";
const FormularZwei = () => {
  const [option, setOptions] = useState("Bachelor");
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "window.innerWidth", transition: { duration: 0.1 } }}
    >
      <h2>Schulbildung</h2>

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
          effect
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
          <div className="flex">
            <label>Abschluss</label>
            <select>
              <option value="bachelor">Bachelor</option>
              <option value="master">Master</option>
              <option value="diplom">Diplom</option>
            </select>
            <input type="submit" value="Submit" />
          </div>
          <div className="flex">
            <label>Studiengang</label>
            <input type="text" id="universitat" />
          </div>
          <div className="flex">
            <label>am</label>
            <input type="date" id="end-universitat" />
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default FormularZwei;
