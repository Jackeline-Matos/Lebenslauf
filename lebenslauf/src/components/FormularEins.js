import "./Formular.css";
import "./FormularEins.css";
import { renderMatches, useNavigate } from "react-router-dom";
import {
  faArrowLeft,
  faArrowRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { motion } from "framer-motion";
import UserContext from "../context/UserContext";
import { useContext, useEffect } from "react";
import FormularTeil from "./FormularTeil";

const FormularEins = () => {
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
  const [value, setValue] = useState(false);
  const [move, setMove] = useState(false);
  const navigate = useNavigate();

  const submitHaendler = (e) => {
    e.preventDefault();
    const nav = () => navigate("/formular2");
    nav();
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "window.innerWidth", transition: { duration: 0.1 } }}
    >
      <form onSubmit={submitHaendler}>
        <div className="zeile underline">
          <h2>Berufserfahrung </h2>
        </div>

        <div className="zeile ">
          <div className="flex-eins">
            <label>Von</label>
            <input
              type="date"
              id="start"
              value={user.beruf[0].start}
              onChange={(e) => setUser({ ...user, start: e.target.value })}
            />
          </div>

          <div className="flex-eins">
            <label>Bis</label>
            <input
              type="date"
              id="end"
              value={user.beruf[0].end}
              onChange={(e) => setUser({ ...user, end: e.target.value })}
            />
          </div>

          <div className="flex">
            <label htmlFor="unternehmen">Unternehmen</label>
            <input
              type="text"
              id="unternehmen"
              value={user.beruf[0].unternehmen}
              onChange={(e) =>
                setUser({ ...user, unternehmen: e.target.value })
              }
            />
          </div>

          <div className="flex">
            <label htmlFor="position">Position</label>
            <input
              type="text"
              id="position"
              value={user.beruf[0].position}
              onChange={(e) => setUser({ ...user, position: e.target.value })}
            />
          </div>
        </div>
        <label htmlFor="mehr">Weiteres Unternehmen hinzufügen</label>
        <input type="checkbox" onChange={(e) => setValue(e.target.checked)} />

        {value ? (
          <>
            {" "}
            <FormularTeil value={value} setValue={setValue} />{" "}
          </>
        ) : null}

        <h2>Schulbildung</h2>
        <div className="zeile formular2">
          <div className="flex">
            <label htmlFor="ausbildung">Höchste Schulabschluss</label>
            <select
              id="schuleOption"
              value={user.schule}
              onChange={(e) => setUser({ ...user, schule: e.target.value })}
            >
              <option value={"Abitur"}>Abitur</option>
              <option value={"Mittlere Reife"}>Mittlere Reife</option>
              <option value={"Hauptschule"}>Hauptschule</option>
            </select>
            {/* <input
              type="text"
              id="ausbildung"
              value={user.ausbildung}
              onChange={(e) => setUser({ ...user, ausbildung: e.target.value })}
            /> */}
          </div>
          <div className="flex">
            <label htmlFor="schule">Schule</label>
            <input
              type="text"
              id="schule"
              value={user.schule}
              onChange={(e) => setUser({ ...user, schule: e.target.value })}
            />
          </div>
          <div className="flex-eins">
            <label htmlFor="startSchule">von</label>
            <input
              type="date"
              id="startSchule"
              value={user.startUniversitaet}
              onChange={(e) =>
                setUser({ ...user, startUniversitaet: e.target.value })
              }
            />
          </div>
          <div className="flex-eins">
            <label htmlFor="end-schule">bis</label>
            <input
              type="date"
              id="endSchule"
              value={user.endSchule}
              onChange={(e) => setUser({ ...user, endSchule: e.target.value })}
            />
          </div>
        </div>
        <div className="flex">
          <label>Höchste Bildungsbschluss</label>
          <select
            id="schuleOption"
            value={user.schuleOption}
            onChange={(e) => setUser({ ...user, schuleOption: e.target.value })}
          >
            <option value={"Ausbildung"}>Ausbildung</option>
            <option value={"Studium"}>Studium</option>
          </select>
        </div>
        <h2>Studium</h2>
        <div className="zeile formular2">
          <div className="flex">
            <label>Höchste akademische Abschluss</label>
            <select
              id="schuleOption"
              value={user.schuleOption}
              onChange={(e) =>
                setUser({ ...user, schuleOption: e.target.value })
              }
            >
              <option value={"Bachelor"}>Bachelor</option>
              <option value={"Master"}>Master</option>
              <option value={"Diplom"}>Diplom</option>
            </select>
          </div>
          <div className="flex">
            <label>Studiengang</label>
            <input
              type="text"
              id="studiengang"
              value={user.studiengang}
              onChange={(e) =>
                setUser({ ...user, studiengang: e.target.value })
              }
            />
          </div>
          <div className="flex">
            <label>am</label>
            <input
              type="date"
              id="endStudiengang"
              value={user.endStudiengang}
              onChange={(e) =>
                setUser({ ...user, endStudiengang: e.target.value })
              }
            />
          </div>
        </div>

        <div className="zeile">
          <div className="flex">
            <label htmlFor="studium">Studium</label>
            <input
              type="text"
              id="bachelor"
              value={user.bachelor}
              onChange={(e) => setUser({ ...user, bachelor: e.target.value })}
            />
          </div>
          <div className="flex">
            <label htmlFor="universitaet">Universität</label>
            <input
              type="text"
              id="universitaet"
              value={user.universitaet}
              onChange={(e) =>
                setUser({ ...user, universitaet: e.target.value })
              }
            />
          </div>
          <div className="flex-eins">
            <label>von</label>
            <input
              type="date"
              id="startUniversitat"
              value={user.startUniversitaet}
              onChange={(e) =>
                setUser({ ...user, startUniversitaet: e.target.value })
              }
            />
          </div>

          <div className="flex-eins">
            <label>bis</label>
            <input
              type="date"
              id="endUniversitaet"
              value={user.endUniversitaet}
              onChange={(e) =>
                setUser({ ...user, endUniversitaet: e.target.value })
              }
            />
          </div>
        </div>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="studium">Ausbildung</label>
            <input
              type="text"
              id="bachelor"
              value={user.bachelor}
              onChange={(e) => setUser({ ...user, bachelor: e.target.value })}
            />
          </div>
          <div className="flex">
            <label htmlFor="universitaet">Ausbildungsstätte</label>
            <input
              type="text"
              id="universitaet"
              value={user.universitaet}
              onChange={(e) =>
                setUser({ ...user, universitaet: e.target.value })
              }
            />
          </div>
          <div className="flex-eins">
            <label>von</label>
            <input
              type="date"
              id="startUniversitat"
              value={user.startUniversitaet}
              onChange={(e) =>
                setUser({ ...user, startUniversitaet: e.target.value })
              }
            />
          </div>

          <div className="flex-eins">
            <label>bis</label>
            <input
              type="date"
              id="endUniversitaet"
              value={user.endUniversitaet}
              onChange={(e) =>
                setUser({ ...user, endUniversitaet: e.target.value })
              }
            />
          </div>
        </div>

        <div className="buttons">
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
      <button
        class="cta zu beru"
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
    </motion.div>
  );
};

export default FormularEins;
