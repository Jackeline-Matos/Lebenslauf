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

  const sprache = [
    {
      sprache: user.sprache,
      niveau: user.niveau,
    },
    {
      sprache: user.spracheEins,
      niveau: user.niveauEins,
    },
    {
      sprache: user.spracheZwei,
      niveau: user.niveauZwei,
    },
  ];
  return (
    <div className="container">
      <div className="box2">
        <div className="boxName">
          <h1 className="h1Name">
            {user.name.toUpperCase()} {user.vorname.toUpperCase()}
          </h1>
        </div>
        <div className="boxCityTelEmailAlter">
          <p>
            {`${user.strasse[0].toUpperCase()}${user.strasse.slice(1)} 
            ${user.hausnummer} 
            ${user.plz}`}{" "}
            <p>{user.stadt}</p>
          </p>

          <p>{user.tel}</p>
          <p>{user.mail}</p>
          <p>{user.alter} Jahre</p>
        </div>
        <h3 className="h3Beruf">Arbeit</h3>
        <div class="boxStartEndBeruf">
          {beruf.map((item) => (
            <ul className="ulStartEndBeruf">
              <li>
                {item.start} {item.end}
              </li>
            </ul>
          ))}
        </div>
        <div class="boxStellenUnterBeruf">
          {beruf.map((item) => (
            <ul className="ulStellen">
              <li>{item.stellen}</li>
              <li>{item.unternehmen}</li>
            </ul>
          ))}
        </div>
        <div class="boxStartEndSchule">
          <p>
            {" "}
            {user.startSchule} {user.endSchule}
          </p>
        </div>
        <h3 className="h3Schulbildung">Schulbildung</h3>
        <div class="boxShulbildung">
          <p>{user.schulForm}</p>
          <p>{user.schule}</p>
        </div>
        <div class="boxStartEndUni">
          <p>
            {" "}
            {user.startStudiengang} {user.endStudiengang}
          </p>
        </div>
        <div className="boxStudium">
          <p>{user.bildungsNiveau}</p>
          <p>{user.uniAbschluss}</p>
          <p>{user.universitaet}</p>
          <p>{user.studiengang}</p>
        </div>
        <div className="boxSprache">
          <h3>Sprache</h3>
          {sprache.map((item) => (
            <ul className="ulSprache">
              <li>{item.sprache}</li>
            </ul>
          ))}
        </div>
        <div className="boxSpracheNiveau">
          {sprache.map((item) => (
            <ul className="ulSpracheNiveau">
              <li>{item.niveau}</li>
            </ul>
          ))}
        </div>
        <div className="boxHobbies">
          <h3>Hobbies</h3>
          {user.item.map((hobbies) => (
            <ul className="ulHobbies">
              <li>{hobbies}</li>
            </ul>
          ))}
        </div>{" "}
      </div>
    </div>
  );
};

export default TemplateZwei;
