import "./Formular.css";
import { useNavigate } from "react-router-dom";
import {
  faArrowLeft,
  faArrowRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Formular = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Persönliche Daten</h1>
      <form>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className="flex">
            <label htmlFor="vorname">Vorname</label>
            <input type="text" id="vorname" />
          </div>
        </div>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="born">Geburtsdatum</label>
            <input type="date" id="born" />
          </div>
          <div className="flex">
            <label htmlFor="alter">Alter</label>
            <input type="number" id="alter" />
          </div>
        </div>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="strasse">Strasse</label>
            <input type="text" id="strasse" />
          </div>
          <div className="flex">
            <label htmlFor="hausnummer">Hausnummer</label>
            <input type="number" id="hausnummer" />
          </div>
        </div>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="plz">PLZ</label>
            <input type="number" id="plz" />
          </div>
          <div className="flex">
            <label htmlFor="stadt">Stadt</label>
            <input type="text" id="stadt" />
          </div>
        </div>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="mail">Email</label>
            <input type="email" id="mail" />
          </div>
          <div className="flex">
            <label htmlFor="tel">Tel</label>
            <input type="number" id="tel" />
          </div>
        </div>
        <div className="buttons">
          <button
            class="cta zu"
            onClick={() => {
              const nav = () => navigate("/");
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

export default Formular;
