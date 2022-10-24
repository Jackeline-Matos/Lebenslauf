import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
import "./TemplateZwei.css";
const TemplateZwei = () => {
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

  return (
    <div className="container">
      <div className="boxHeader">
        <h1>
          {user.name.toUpperCase()} {user.vorname.toUpperCase()}
        </h1>
      </div>
      <div class="adressTelMailAlter">
        <p>
          {user.strasse.length > 1 ? (
            <p>
              Adresse: {user.strasse} {user.hausnummer} <br /> {user.plz}{" "}
            </p>
          ) : null}
        </p>
        <p>{user.stadt}</p>
        <p>{user.mail}</p>
      </div>
      <div class="alterGeburtstag">
        <p>{user.alter}</p>
        <p>{user.born}</p>
      </div>
      <div class="uberMich">
        <h3>Über Mich</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit sit
          eos illum praesentium esse saepe vero minima nam cumque reprehenderit,
          beatae dolor perferendis quaerat ex voluptates expedita velit
          molestias in?
        </p>
      </div>
      <div class="boxBeruf">
        <h3>Berufserfahrung</h3>
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
      </div>
      <div class="boxSchulbildung">
        <h3>Schulbildung & Studium</h3>
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
      </div>
      <div class="boxKentinisse">
        <h3>Kentinisses</h3>

        <ul>
          {user.faehigkeiten.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div class="boxHobbies">
        <h3>Hobbies</h3>
        <ul>
          {user.item.map((hobby) => (
            <li>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TemplateZwei;
