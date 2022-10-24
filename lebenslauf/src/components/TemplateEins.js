import "./TemplateEins.css";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
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
      schule: user.schule,
      schulStart: user.startSchule,
      schulEnde: user.endSchule,
    },
    {
      schule: user.mittlereSchulreife,
      schulStart: user.start,
      schulEnde: user.end,
    },
    {
      schule: user.mittlereSchule,
      schulStart: user.startMittlereSchule,
      schulEnde: user.endMittlereSchule,
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
      studiengang: user.universitaetBachelor,
      universitaet: user.studiengangBachelor,
      start: user.startUniversitaetBachelor,
      end: user.endUniversitaetBachelor,
    },
  ];
  console.log(beruf);
  return (
    <>
      <div
        ref={componentRef}
        style={{ width: "100%", height: window.innerHeight }}
      >
        <div className="containerTemplateEins">
          <div className="header">{user.vorname}</div>
          <div className="untertitel">{user.stellen}</div>
          <div className="contentLinksTemplateEins">
            <div> Persönliches Profil</div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. A
              doloremque mollitia veritatis dolore, culpa ut, nihil ipsam
              expedita, impedit distinctio ea accusantium velit maxime? Optio
              neque corrupti eaque omnis odio!
            </p>
          </div>
          <div className="contentRechtsTemplateEins">
            <div>Beruflicher Werdegang</div>
            <ul>
              {beruf.map((item) => (
                <>
                  {item.stellen.length > 1 ? (
                    <>
                      <li>{item.stellen} </li>{" "}
                      <li>
                        {item.unternehmen}- {item.start}-{item.end}
                      </li>
                    </>
                  ) : null}
                </>
              ))}
            </ul>
          </div>
          <div className="faehigkeiten">
            <div>Fähigkeiten & Talente</div>
            <ul>
              {user.faehigkeiten.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>{" "}
          <div className="kontaktinformationen">
            <div> Kontaktinformationen</div>
            {user.str.length > 1 ? (
              <li>
                Adresse: {user.str} {user.hausnummer} <br /> {user.plz}{" "}
                {user.stadt}
              </li>
            ) : null}

            {user.tel.length > 1 ? <li>Mobil: {user.tel}</li> : null}
            {user.mail.length > 1 ? <li>Mail: {user.mail}</li> : null}
          </div>
          <div className="schulbildung">
            <div>Schulbildung</div>
            {studium.abschluss.length > 1 ? (
              <>
                {studium.map((item) => (
                  <>
                    <li>{item.universitaet}</li>
                    <li>
                      {item.abschluss} in {item.studiengang}, {item.end}
                    </li>
                  </>
                ))}
              </>
            ) : null}
            {ausbildung.abschluss.length > 1 ? (
              <>
                {ausbildung.map((item) => (
                  <>
                    <li>{item.staette}</li>
                    <li>
                      Abschluss im Jahr {item.end},{item.ausbildung},
                    </li>
                  </>
                ))}
              </>
            ) : null}
          </div>
          <div className="hobbiesTemplateEins">
            <div>Interessen und Hobbys</div>
            {user.hobbies.map((item) => (
              <li>{item}</li>
            ))}
          </div>
          <div className="footerTemplateEins">{user.name}</div>
        </div>
        <button onClick={handlePrint}>Print</button>
      </div>
    </>
  );
};

export default TemplateEins;
