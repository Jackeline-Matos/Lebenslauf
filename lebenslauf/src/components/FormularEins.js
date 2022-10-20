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

const FormularEins = () => {
  const [move, setMove] = useState(false);
  const navigate = useNavigate();
  return (
    <>
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
            <label htmlFor="stellen">Stellen</label>
            <input type="text" id="stellen" />
          </div>
        </div>

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
            <label htmlFor="stellen">Stellen</label>
            <input type="text" id="stellen" />
          </div>
        </div>

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
            <label htmlFor="stellen">Stellen</label>
            <input type="text" id="stellen" />
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

          <button class="cta we">
            <span>
              {" "}
              Weiter
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
            <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
          </button>
        </div>
      </form>
    </>
  );
};

export default FormularEins;
