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
import TeilRendern from "./TeilRendern";
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
  // const [value, setValue] = useState(false);
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
          <div className="flex">
            <label htmlFor="unternehmen">Unternehmen</label>
            <input
              type="text"
              id="unternehmen"
              value={user.unternehmen}
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
              value={user.stellen}
              onChange={(e) => setUser({ ...user, stellen: e.target.value })}
            />
          </div>
          <div className="flex-eins">
            <label>Von</label>
            <input
              type="date"
              id="start"
              value={user.start}
              onChange={(e) => setUser({ ...user, start: e.target.value })}
            />
          </div>

          <div className="flex-eins">
            <label>Bis</label>
            <input
              type="date"
              id="end"
              value={user.end}
              onChange={(e) => setUser({ ...user, end: e.target.value })}
            />
          </div>
        </div>
        <label htmlFor="mehr">Weitere Unternehmen hinzufügen</label>
        <input
          type="checkbox"
          onChange={(e) => setUser({ ...user, value: e.target.checked })}
        />

        {user.value ? (
          <>
            {" "}
            <FormularTeil />
          </>
        ) : null}
        <div className="zeile underline">
          {" "}
          <h2>Schulbildung</h2>
        </div>

        <div className="zeile ">
          <div className="flex">
            <label htmlFor="schuleForm">Höchste Schulabschluss</label>
            <select
              id="schuleForm"
              value={user.schulForm}
              onChange={(e) => setUser({ ...user, schulForm: e.target.value })}
            >
              <option value={"Abitur"}>Abitur</option>
              <option value={"Fachabitur"}>Fachabitur</option>
              <option value={"Mittlere Reife"}>Mittlere Reife</option>
              <option value={"Hauptschule"}>Hauptschule</option>
            </select>
          </div>
          {user.schulForm === "Fachabitur" ? (
            <>
              {" "}
              <div className="flex">
                <label htmlFor="fachrichtung">Fachrichtung</label>
                <input
                  type="text"
                  id="fachrichtung"
                  value={user.fachrichtung}
                  onChange={(e) =>
                    setUser({ ...user, fachrichtung: e.target.value })
                  }
                />
              </div>
            </>
          ) : null}
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
        {user.schulForm === "Abitur" && (
          <>
            <div className="zeile ">
              <div className="flex">
                <label htmlFor="mittlereSchulreife">Mittlere Schulreife</label>
                <input
                  type="text"
                  id="mittlereSchulreife"
                  value={user.mittlereSchulreife}
                  onChange={(e) =>
                    setUser({ ...user, mittlereSchulreife: e.target.value })
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="mittlereSchule">Schule</label>
                <input
                  type="text"
                  id="schule"
                  value={user.mittlereSchule}
                  onChange={(e) =>
                    setUser({ ...user, mittlereSchule: e.target.value })
                  }
                />
              </div>
              <div className="flex-eins">
                <label htmlFor="startMittlereSchule">von</label>
                <input
                  type="date"
                  id="startMittlereSchule"
                  value={user.startMitlereSchule}
                  onChange={(e) =>
                    setUser({ ...user, startMittlereSchule: e.target.value })
                  }
                />
              </div>
              <div className="flex-eins">
                <label htmlFor="endMittlereschule">bis</label>
                <input
                  type="date"
                  id="endMittlereSchule"
                  value={user.endMittlereSchule}
                  onChange={(e) =>
                    setUser({ ...user, endMittlereSchule: e.target.value })
                  }
                />
              </div>
            </div>
          </>
        )}
        {user.schulForm === "Fachabitur" && (
          <>
            <div className="zeile ">
              <div className="flex">
                <label htmlFor="mittlereSchulreife">Mittlere Schulreife</label>
                <input
                  type="text"
                  id="mittlereSchulreife"
                  value={user.mittlereSchulreife}
                  onChange={(e) =>
                    setUser({ ...user, mittlereSchulreife: e.target.value })
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="mittlereSchule">Schule</label>
                <input
                  type="text"
                  id="schule"
                  value={user.mittlereSchule}
                  onChange={(e) =>
                    setUser({ ...user, mittlereSchule: e.target.value })
                  }
                />
              </div>
              <div className="flex-eins">
                <label htmlFor="startMittlereSchule">von</label>
                <input
                  type="date"
                  id="startMittlereSchule"
                  value={user.startMitlereSchule}
                  onChange={(e) =>
                    setUser({ ...user, startMittlereSchule: e.target.value })
                  }
                />
              </div>
              <div className="flex-eins">
                <label htmlFor="endMittlereschule">bis</label>
                <input
                  type="number"
                  min="1980"
                  max="2022"
                  id="endMittlereSchule"
                  value={user.endMittlereSchule}
                  onChange={(e) =>
                    setUser({ ...user, endMittlereSchule: e.target.value })
                  }
                />
              </div>
            </div>
          </>
        )}
        <div className="flex">
          <label>Höchste Bildungsbschluss</label>
          <select
            id="bildungsNiveau"
            value={user.bildungsNiveau}
            onChange={(e) =>
              setUser({ ...user, bildungsNiveau: e.target.value })
            }
          >
            <option value={"Ausbildung"}>Ausbildung</option>
            <option value={"Studium"}>Studium</option>
          </select>
        </div>

        {user.bildungsNiveau === "Ausbildung" ? (
          <>
            {" "}
            <h2>Ausbildung</h2>
            <div className="zeile">
              <div className="flex">
                <label htmlFor="ausbildung">Ausbildung</label>
                <input
                  type="text"
                  id="ausbildung"
                  value={user.ausbildung}
                  onChange={(e) =>
                    setUser({ ...user, ausbildung: e.target.value })
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="universitaet">Ausbildungsstätte</label>
                <input
                  type="text"
                  id="universitaet"
                  value={user.ausbildungsStaette}
                  onChange={(e) =>
                    setUser({ ...user, ausbildungsStaette: e.target.value })
                  }
                />
              </div>
              <div className="flex-eins">
                <label>von</label>
                <input
                  type="date"
                  id="startUniversitat"
                  value={user.startAusbildung}
                  onChange={(e) =>
                    setUser({ ...user, startAusbildung: e.target.value })
                  }
                />
              </div>

              <div className="flex-eins">
                <label>bis</label>
                <input
                  type="date"
                  id="endUniversitaet"
                  value={user.endAusbildung}
                  onChange={(e) =>
                    setUser({ ...user, endAusbildung: e.target.value })
                  }
                />
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="zeile underline">
              {" "}
              <h2>Studium</h2>
            </div>

            <div className="zeile">
              <div className="flex">
                <label htmlFor="uniAbschluss">Akademische Abschluss</label>
                <select
                  id="uniAbschluss"
                  value={user.uniAbschluss}
                  onChange={(e) =>
                    setUser({ ...user, uniAbschluss: e.target.value })
                  }
                >
                  <option value={"Bachelor"}>Bachelor</option>
                  <option value={"Master"}>Master</option>
                  <option value={"Diplom"}>Diplom</option>
                </select>
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
              <div className="flex">
                <label htmlFor="studiengang">Studiengang</label>
                <input
                  type="text"
                  id="studiengang"
                  value={user.studiengang}
                  onChange={(e) =>
                    setUser({ ...user, studiengang: e.target.value })
                  }
                />
              </div>
              <div className="flex-eins">
                <label>von</label>
                <input
                  type="date"
                  id="startStudiengang"
                  value={user.startStudiengang}
                  onChange={(e) =>
                    setUser({ ...user, startStudiengang: e.target.value })
                  }
                />
              </div>
              <div className="flex-eins">
                <label>bis</label>
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
            {/* <label htmlFor="">Studium hinzufügen</label>
            <input type="checkbox" /> */}
          </>
        )}
        {user.uniAbschluss === "Master" ? (
          <>
            {" "}
            <div className="zeile">
              <div className="flex">
                <label htmlFor="studium">Akademische Abschluss</label>
                <input
                  type="text"
                  id="bachelor"
                  value="Bachelor"
                  onChange={(e) =>
                    setUser({ ...user, bachelor: e.target.value })
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="universitaetBachelor">Universität</label>
                <input
                  type="text"
                  id="universitaet"
                  value={user.universitaetBachelor}
                  onChange={(e) =>
                    setUser({ ...user, universitaetBachelor: e.target.value })
                  }
                />
              </div>
              <div className="flex">
                <label htmlFor="studiengangBachelor">Studiengang</label>
                <input
                  type="text"
                  id="studiengangBachelor"
                  value={user.studiengangBachelor}
                  onChange={(e) =>
                    setUser({ ...user, studiengangBachelor: e.target.value })
                  }
                />
              </div>
              <div className="flex-eins">
                <label>von</label>
                <input
                  type="date"
                  id="startUniversitatBachelor"
                  value={user.startUniversitaet}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      startUniversitaetBachelor: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex-eins">
                <label>bis</label>
                <input
                  type="date"
                  id="endUniversitaet"
                  value={user.endUniversitaetBachelor}
                  onChange={(e) =>
                    setUser({
                      ...user,
                      endUniversitaetBachelor: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </>
        ) : null}

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
