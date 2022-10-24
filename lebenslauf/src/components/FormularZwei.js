import { motion } from "framer-motion";
import "./FormularZwei.css";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import React from "react";
import Select from "react-select";
import {
  faArrowLeft,
  faArrowRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const FormularZwei = () => {
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);
  const [faehigkeiten, setFaehigkeiten] = useState([]);
  const [upDate, setUpDate] = useState([]);
  const [input, setInput] = useState("");
  console.log(user);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("data"));

    if (userData) {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(user));
  }, [user]);

  const [selectedOptions, setSelectedOptions] = useState([]);

  const haendleSubmit = (event) => {
    event.preventDefault();
    setUser({ ...user, item: selectedOptions });
    user.template === 1
      ? navigate("/templateeins")
      : user.template === 2
      ? navigate("/templatezwei")
      : navigate("/templatedrei");
  };

  const hobbiesOptions = [
    { value: "lesen", label: "Lesen" },
    { value: "reisen", label: "Reisen" },
    { value: "musik", label: "Musik" },
    { value: "schwimmen", label: "Schwimmen" },
    { value: "wandern", label: "Wandern" },
    { value: "joggen", label: "Joggen" },
    { value: "sport", label: "Sport" },
    { value: "kochen", label: "Kochen" },
  ];

  const removeList = (item) => {
    const newList = faehigkeiten.filter((l) => l !== item);
    setFaehigkeiten(newList);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "window.innerWidth", transition: { duration: 0.1 } }}
    >
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
        <div className="zeile underline">
          <h2>Kenntnisse</h2>
        </div>
        <div className="zeile ">
          <div className="flex sprache">
            <label htmlFor="ausbildung">Kenntnisse</label>

            <input
              type="text"
              id="Kenntnisse"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <div className="hinzuMargin">
              <span
                className="hinzu"
                onClick={() => {
                  setFaehigkeiten([...faehigkeiten, input]);
                  setInput("");
                }}
              >
                Hinzufügen
              </span>
            </div>

            <ul className="ulList">
              {faehigkeiten.map((item) => {
                return (
                  <span className="liList" key={item}>
                    {item}{" "}
                    <span
                      onClick={() => removeList(item)}
                      style={{
                        marginLeft: "10px",
                        color: "red",
                        cursor: "pointer",
                      }}
                    >
                      x
                    </span>
                  </span>
                );
              })}
            </ul>
          </div>

          <div className="flex">
            <label htmlFor="ausbildung">Niveau</label>

            <select
              id="niveau"
              value={user.niveau}
              onChange={(e) => setUser({ ...user, niveau: e.target.value })}
            >
              <option value={"Muttersprache"}>Muttersprache</option>
              <option value={"Grundkenntnisse"}>Grundkenntnisse</option>
              <option value={"Gut"}>Gut</option>
              <option value={"Sehr gut"}> Sehr gut </option>
              <option value={"Fließend"}>Fließend</option>
            </select>
          </div>
        </div>

        <div className="zeile underline">
          <h2>Hobbies </h2>
        </div>
        <div>
          <Select
            className="hobbies"
            isMulti
            id="hobbies"
            options={hobbiesOptions}
            isSearchable={true}
            isDisabled={false}
            isLoading={false}
            isRtl={false}
            closeMenuOnSelect={false}
            onChange={(item) => setSelectedOptions(item)}
          />
        </div>

        <h2>Sprachkenntnisse</h2>
        <div className="zeile ">
          <div className="flex sprache">
            <label htmlFor="ausbildung">Sprache</label>

            <select
              id="sprache"
              value={user.sprache}
              onChange={(e) => setUser({ ...user, sprache: e.target.value })}
            >
              <option value={"Albanisch"}> Albanisch</option>
              <option value={"Arabisch"}> Arabisch</option>
              <option value={"Dänisch"}> Dänisch</option>
              <option value={"Deutsch"}> Deutsch</option>
              <option value={"Englisch"}> Englisch</option>
              <option value={"Französisch"}> Französisch</option>
              <option value={"Griechisch"}> Griechisch</option>
              <option value={"Italienisch"}> Italienisch</option>
              <option value={"Japanisch"}> Japanisch</option>
              <option value={"Niederländisch"}> Niederländisch</option>
              <option value={"Portugiesisch"}> Portugiesisch</option>
              <option value={"Russisch"}> Russisch</option>
              <option value={"Spanisch"}> Spanisch</option>
              <option value={"Türkisch"}> Türkisch</option>
            </select>
          </div>

          <div className="flex">
            <label htmlFor="ausbildung">Niveau</label>

            <select
              id="niveau"
              value={user.niveau}
              onChange={(e) => setUser({ ...user, niveau: e.target.value })}
            >
              <option value={"Muttersprache"}>Muttersprache</option>
              <option value={"Grundkenntnisse"}>Grundkenntnisse</option>
              <option value={"Gut"}>Gut</option>
              <option value={"Sehr gut"}> Sehr gut </option>
              <option value={"Fließend"}>Fließend</option>
            </select>
          </div>
        </div>
        <div className="zeile margin">
          <label htmlFor="languages">Add other languages</label>
          <input
            type="checkbox"
            id="languages"
            value={user.addLanguage}
            onChange={(e) =>
              setUser({ ...user, addLanguage: e.target.checked })
            }
          />
        </div>
        {user.addLanguage && (
          <>
            <div className="zeile">
              <div className="flex sprache">
                <label htmlFor="ausbildung">Sprache</label>

                <select
                  id="sprache"
                  value={user.spracheEins}
                  onChange={(e) =>
                    setUser({ ...user, spracheEins: e.target.value })
                  }
                >
                  <option value={"Albanisch"}> Albanisch</option>
                  <option value={"Arabisch"}> Arabisch</option>
                  <option value={"Dänisch"}> Dänisch</option>
                  <option value={"Deutsch"}> Deutsch</option>
                  <option value={"Englisch"}> Englisch</option>
                  <option value={"Französisch"}> Französisch</option>
                  <option value={"Griechisch"}> Griechisch</option>
                  <option value={"Italienisch"}> Italienisch</option>
                  <option value={"Japanisch"}> Japanisch</option>
                  <option value={"Niederländisch"}> Niederländisch</option>
                  <option value={"Portugiesisch"}> Portugiesisch</option>
                  <option value={"Russisch"}> Russisch</option>
                  <option value={"Spanisch"}> Spanisch</option>
                  <option value={"Türkisch"}> Türkisch</option>
                </select>
              </div>

              <div className="flex">
                <label htmlFor="ausbildung">Niveau</label>

                <select
                  id="niveau"
                  value={user.niveauEins}
                  onChange={(e) =>
                    setUser({ ...user, niveauEins: e.target.value })
                  }
                >
                  <option value={"Muttersprache"}>Muttersprache</option>
                  <option value={"Grundkenntnisse"}>Grundkenntnisse</option>
                  <option value={"Gut"}>Gut</option>
                  <option value={"Sehr gut"}> Sehr gut </option>
                  <option value={"Fließend"}>Fließend</option>
                </select>
              </div>
            </div>
            <div className="zeile">
              <div className="flex sprache">
                <label htmlFor="ausbildung">Sprache</label>

                <select
                  id="sprache"
                  value={user.spracheZwei}
                  onChange={(e) =>
                    setUser({ ...user, spracheZwei: e.target.value })
                  }
                >
                  <option value={"Albanisch"}> Albanisch</option>
                  <option value={"Arabisch"}> Arabisch</option>
                  <option value={"Dänisch"}> Dänisch</option>
                  <option value={"Deutsch"}> Deutsch</option>
                  <option value={"Englisch"}> Englisch</option>
                  <option value={"Französisch"}> Französisch</option>
                  <option value={"Griechisch"}> Griechisch</option>
                  <option value={"Italienisch"}> Italienisch</option>
                  <option value={"Japanisch"}> Japanisch</option>
                  <option value={"Niederländisch"}> Niederländisch</option>
                  <option value={"Portugiesisch"}> Portugiesisch</option>
                  <option value={"Russisch"}> Russisch</option>
                  <option value={"Spanisch"}> Spanisch</option>
                  <option value={"Türkisch"}> Türkisch</option>
                </select>
              </div>

              <div className="flex margin">
                <label htmlFor="ausbildung">Niveau</label>

                <select
                  id="niveau"
                  value={user.niveauZwei}
                  onChange={(e) =>
                    setUser({ ...user, niveauZwei: e.target.value })
                  }
                >
                  <option value={"Muttersprache"}>Muttersprache</option>
                  <option value={"Grundkenntnisse"}>Grundkenntnisse</option>
                  <option value={"Gut"}>Gut</option>
                  <option value={"Sehr gut"}> Sehr gut </option>
                  <option value={"Fließend"}>Fließend</option>
                </select>
              </div>
            </div>
          </>
        )}

        <button className="buttonformular2 button" type="submit">
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
          <span className="send">Send</span>
        </button>
      </form>
    </motion.div>
  );
};

export default FormularZwei;
