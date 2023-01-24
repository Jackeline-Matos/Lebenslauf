import "./TemplateEins.css";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { motion } from "framer-motion";
const TemplateEins = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "lebenslauf",
    onAfterPrint: () => alert("Print success"),
  });
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("data"));

    if (userData) {
      setUser(userData);
    }
  }, []);
  const beruf = [
    {
      start: user.start,
      end: user.end,
      unternehmen: user.unternehmen,
      stellen: user.stellen,
    },
    {
      start: user.startEins,
      end: user.endEins,
      unternehmen: user.unternehmenEins,
      stellen: user.stellenEins,
    },
    {
      start: user.startZwei,
      end: user.endZwei,
      unternehmen: user.unternehmenZwei,
      stellen: user.stellenZwei,
    },
  ];
  const schule = [
    {
      schulForm: user.schulForm,
      schule: user.schule,
      schulStart: user.startSchule,
      schulEnde: user.endSchule,
    },
    {
      schule: user.mittlereSchulreife,
      schulStart: user.start,
      schulEnde: user.end,
    },
  ];

  const ausbildung = [
    {
      ausbildung: user.ausbildung,
      staette: user.ausbildungsStaette,
      start: user.startAusbildung,
      end: user.endAusbildung,
    },
  ];

  const studium = [
    {
      abschluss: user.uniAbschluss,
      studiengang: user.studiengang,
      universitaet: user.universitaet,
      start: user.startStudiengang,
      end: user.endStudiengang,
    },
    {
      abschluss: user.bachelor,
      studiengang: user.studiengangBachelor,
      universitaet: user.universitaetBachelor,
      start: user.startUniversitaetBachelor,
      end: user.endUniversitaetBachelor,
    },
  ];
  const sprachen = [
    { sprache: user.sprache, niveau: user.niveau },
    { sprache: user.spracheEins, niveau: user.niveauEins },
    { sprache: user.spracheZwei, niveau: user.niveauZwei },
  ];
  console.log(beruf);
  return (
    <div style={{ backgroundColor: "#e9e9c1" }}>
      <div
        ref={componentRef}
        style={{
          width: "100%",
          height: window.innerHeight,
        }}
      >
        <div className="containerTemplateEins">
          <div className="header">{user.vorname.toUpperCase()}</div>
          <div className="untertitel">{user.stellen}</div>
          <motion.div
            whileHover={{ scale: 1.01, border: "2px green solid" }}
            drag
            className="contentLinksTemplateEins"
          >
            <motion.div
              whileHover={{ scale: 1.01, border: "2px green solid" }}
              drag
            >
              <strong
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16.6px",
                }}
              >
                Persönliches Profil
              </strong>{" "}
            </motion.div>
            <p>{user.text}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01, border: "2px green solid" }}
            drag
            className="contentRechtsTemplateEins"
          >
            <div>
              <strong
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16.6px",
                }}
              >
                Beruflicher Werdegang
              </strong>
            </div>
            <ul>
              {beruf.map((item) => (
                <>
                  {item.stellen.length > 1 ? (
                    <>
                      <li>{item.stellen} </li>{" "}
                      <li className="margin-bottom">
                        {item.unternehmen}- {item.start}-{item.end}
                      </li>
                    </>
                  ) : null}
                </>
              ))}
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01, border: "2px green solid" }}
            drag
            className="sprachen"
          >
            <div>
              <strong
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16.6px",
                }}
              >
                Sprachen
              </strong>
            </div>
            <ul style={{ display: "flex", justifyContent: "space-around" }}>
              {sprachen.map((item) => (
                <>
                  {item.sprache.length > 1 ? (
                    <>
                      <li>
                        {item.sprache} -{item.niveau}-{" "}
                      </li>{" "}
                    </>
                  ) : null}
                </>
              ))}
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01, border: "2px green solid" }}
            drag
            className="faehigkeiten"
          >
            <div>
              <strong
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16.6px",
                }}
              >
                Fähigkeiten & Talente
              </strong>
            </div>
            <ul>
              {user.faehigkeiten.map((item) => (
                <li>{item}</li>
              ))}
              {user.item.map((hobby) => (
                <li>{hobby}</li>
              ))}
            </ul>
          </motion.div>{" "}
          <motion.div
            whileHover={{ scale: 1.01, border: "2px green solid" }}
            drag
            className="kontaktinformationen"
          >
            <div>
              <strong
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16.6px",
                }}
              >
                {" "}
                Kontaktinformationen
              </strong>
            </div>
            {user.strasse.length > 1 ? (
              <li>
                Adresse: {user.strasse} {user.hausnummer} <br /> {user.plz}{" "}
                {user.stadt}
              </li>
            ) : null}

            {user.tel.length > 1 ? <li>Mobil: {user.tel}</li> : null}
            {user.mail.length > 1 ? (
              <li className="margin-bottom">Mail: {user.mail}</li>
            ) : null}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01, border: "2px green solid" }}
            drag
            className="schulbildung"
          >
            <div>
              <strong
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16.6px",
                }}
              >
                Schulbildung
              </strong>
            </div>
            {studium[0].abschluss.length > 1 ? (
              <>
                {studium.map((item) => (
                  <>
                    <li>{item.universitaet}</li>
                    <li className="margin-bottom">
                      {item.abschluss} in {item.studiengang}, {item.end}
                    </li>
                  </>
                ))}
              </>
            ) : null}
            {ausbildung[0].ausbildung.length > 1 ? (
              <>
                {ausbildung.map((item) => (
                  <>
                    <li>{item.ausbildung}</li>
                    <li className="margin-bottom">
                      Abschluss im Jahr {item.end}, {item.staette}
                    </li>
                  </>
                ))}
              </>
            ) : null}
            {schule[0].schule.length > 1 ? (
              <>
                {schule.map((item) => (
                  <>
                    <li>{item.schulForm}</li>
                    <li>{item.schule}</li>
                    <li className="margin-bottom">
                      Abschluss im Jahr {item.schulEnde}
                    </li>
                  </>
                ))}
              </>
            ) : null}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01, border: "2px green solid" }}
            drag
            className="hobbiesTemplateEins"
          >
            <div>
              <strong
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "16.6px",
                }}
              >
                Interessen und Hobbys
              </strong>
            </div>
            <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
              {user.item[0].length > 1
                ? user.item.map((item) => <li>-{item}-</li>)
                : null}
            </ul>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.01, border: "2px green solid" }}
            drag
            className="footerTemplateEins"
          >
            {user.name.toUpperCase()}{" "}
          </motion.div>
        </div>
      </div>
      <div className="printFooter">
        {" "}
        <button onClick={handlePrint}>Print</button>
      </div>
    </div>
  );
};

export default TemplateEins;
