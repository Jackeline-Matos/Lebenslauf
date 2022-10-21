import "./Formular.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  faArrowLeft,
  faArrowRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MotionConfig } from "framer-motion";
import UserContext from "../context/UserContext";
import { useContext } from "react";
const Formular = () => {
  const [user, setUser] = useContext(UserContext);
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("data"));

    if (userData) {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(user));
  }, [user]);
  const navigate = useNavigate();

  const [move, setMove] = useState(false);

  const submitHaendler = (e) => {
    e.preventDefault();
    const nav = () => navigate("/formular1");
    nav();
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "window.innerWidth", transition: { duration: 0.1 } }}
    >
      <h1>Persönliche Daten</h1>
      <form onSubmit={submitHaendler}>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
          <div className="flex">
            <label htmlFor="vorname">Vorname</label>
            <input
              type="text"
              id="vorname"
              value={user.vorname}
              onChange={(e) => setUser({ ...user, vorname: e.target.value })}
            />
          </div>
        </div>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="born">Geburtsdatum</label>
            <input
              type="date"
              id="born"
              value={user.born}
              onChange={(e) => setUser({ ...user, born: e.target.value })}
            />
          </div>
          <div className="flex">
            <label htmlFor="alter">Alter</label>
            <input
              type="number"
              id="alter"
              value={user.alter}
              onChange={(e) => setUser({ ...user, alter: e.target.value })}
            />
          </div>
        </div>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="strasse">Strasse</label>
            <input
              type="text"
              id="strasse"
              value={user.strasse}
              onChange={(e) => setUser({ ...user, strasse: e.target.value })}
            />
          </div>
          <div className="flex">
            <label htmlFor="hausnummer">Hausnummer</label>
            <input
              type="number"
              id="hausnummer"
              value={user.hausnummer}
              onChange={(e) => setUser({ ...user, hausnummer: e.target.value })}
            />
          </div>
        </div>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="plz">PLZ</label>
            <input
              type="number"
              id="plz"
              value={user.plz}
              onChange={(e) => setUser({ ...user, plz: e.target.value })}
            />
          </div>
          <div className="flex">
            <label htmlFor="stadt">Stadt</label>
            <input
              type="text"
              id="stadt"
              value={user.stadt}
              onChange={(e) => setUser({ ...user, stadt: e.target.value })}
            />
          </div>
        </div>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="mail">Email</label>
            <input
              type="email"
              id="mail"
              value={user.mail}
              onChange={(e) => setUser({ ...user, mail: e.target.value })}
            />
          </div>
          <div className="flex">
            <label htmlFor="tel">Tel</label>
            <input
              type="number"
              id="tel"
              value={user.tel}
              onChange={(e) => setUser({ ...user, tel: e.target.value })}
            />
          </div>
        </div>
        <div className="buttons">
          <button
            class="cta we"
            onClick={() => {
              setMove(!move);
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
      <button
        class="cta zu per"
        onClick={() => {
          const nav = () => navigate("/templates");
          nav();
        }}
      >
        <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
        <span>
          <FontAwesomeIcon icon={faArrowLeft} />
          Zurück
        </span>
      </button>
    </motion.div>
  );
};

export default Formular;
