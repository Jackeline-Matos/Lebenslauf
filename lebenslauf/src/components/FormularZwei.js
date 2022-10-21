import { motion } from "framer-motion";
import "./FormularZwei.css";
import { useContext, useEffect } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import {
  faArrowLeft,
  faArrowRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FormularZwei = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("data"));

    if (userData) {
      setUser(userData);
    }
  }, []);

  const haendleSubmit = (event) => {
    event.preventDefault();
    user.template === 1
      ? navigate("/templateeins")
      : user.template === 2
      ? navigate("/templatezwei")
      : navigate("/templatedrei");
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "window.innerWidth", transition: { duration: 0.1 } }}
    >
      <h2>Schulbildung</h2>
      <button
        class="cta zu sch"
        onClick={() => {
          const nav = () => navigate("/formular1");
          nav();
        }}
      >
        <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
        <span>
          <FontAwesomeIcon icon={faArrowLeft} />
          Zurück
        </span>
      </button>
      <form onSubmit={haendleSubmit}>
        <div className="zeile">
          <div className="flex">
            <label htmlFor="ausbildung">Schulform</label>
            <input
              type="text"
              id="ausbildung"
              value={user.ausbildung}
              onChange={(e) => setUser({ ...user, ausbildung: e.target.value })}
            />
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
            <label htmlFor="end-schule">bis</label>
            <input
              type="date"
              id="endSchule"
              value={user.endSchule}
              onChange={(e) => setUser({ ...user, endSchule: e.target.value })}
            />
          </div>
        </div>

        <div className="zeile">
          <div className="flex">
            <label htmlFor="ausbildung">Studium</label>
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

        <div className="zeile formular2">
          <div className="flex">
            <label>Abschluss</label>
            <select
              id="schuleOption"
              value={user.schuleOption}
              onChange={(e) =>
                setUser({ ...user, schuleOption: e.target.value })
              }
            >
              <option>Bachelor</option>
              <option>Master</option>
              <option>Diplom</option>
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
        {/*         <div className="flex submit">
          <button className="cta" type="submit">
            {" "}
            <span>Submit </span>
            <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
          </button>
        </div> */}

        <button className="buttonformular2" type="submit">
          <div className="svg-wrapper-1">
            <div className="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </form>
    </motion.div>
  );
};

export default FormularZwei;
