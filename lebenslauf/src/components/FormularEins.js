import "./Formular.css";
import "./FormularEins.css";
import { useNavigate } from "react-router-dom";
import {
  faArrowLeft,
  faArrowRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";
const FormularEins = () => {
  const [move, setMove] = useState(false);
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "window.innerWidth", transition: { duration: 0.1 } }}
    >
      <h1>Berufserfahrung </h1>
      <h3>Geben Sie Ihre letzten 3 Berufserfahrungen an.</h3>
      <form>
        <div className="zeile">
          <div className="flex-eins">
            <label>Von</label>
            <input type="date" id="start" />
          </div>

          <div className="flex-eins">
            <label>Bis</label>
            <input type="date" id="end" />
          </div>

          <div className="flex">
            <label htmlFor="unternehmen">Unternehmen</label>
            <input type="text" id="unternehmen" />
          </div>

          <div className="flex">
            <label htmlFor="position">Position</label>
            <input type="text" id="position" />
          </div>
        </div>

        <div className="zeile">
          <div className="flex-eins">
            <label>Von</label>
            <input type="date" id="startEins" />
          </div>

          <div className="flex-eins">
            <label>Bis</label>
            <input type="date" id="endEins" />
          </div>
          <div className="flex">
            <label htmlFor="unternehmen">Unternehmen</label>
            <input type="text" id="unternehmenEins" />
          </div>
          <div className="flex">
            <label htmlFor="position">Position</label>
            <input type="text" id="positionEins" />
          </div>
        </div>

        <div className="zeile">
          <div className="flex-eins">
            <label>Von</label>
            <input type="date" id="startZwei" />
          </div>

          <div className="flex-eins">
            <label>Bis</label>
            <input type="date" id="endZwei" />
          </div>
          <div className="flex">
            <label htmlFor="unternehmen">Unternehmen</label>
            <input type="text" id="unternehmenZwei" />
          </div>
          <div className="flex">
            <label htmlFor="position">Position</label>
            <input type="text" id="positionZwei" />
          </div>
        </div>

        <div className="buttons">
          <button
            class="cta zu"
            onClick={() => {
              const nav = () => navigate("/formular");
              nav();
            }}
          >
            <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
            <span>
              <FontAwesomeIcon icon={faArrowLeft} />
              Zurück
            </span>
          </button>

          <button
            class="cta we"
            onClick={() => {
              const nav = () => navigate("/formular2");
              nav();
            }}
          >
            <span>
              {" "}
              Weiter
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default FormularEins;
