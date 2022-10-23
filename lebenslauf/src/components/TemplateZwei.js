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

  return (
    <div className="container">
      <div className="box2">
        <div className="boxName">
          <h1>
            {user.name.toUpperCase()} {user.vorname.toUpperCase()}
          </h1>
        </div>
        <div className="boxCityTelEmailAlter">
          <p>{user.stadt}</p>
          <p>{user.tel}</p>
          <p>{user.mail}</p>
          <p>{user.alter} Jahre</p>
        </div>

        <div class="boxStartEndBeruf">
          <p>
            {" "}
            {user.start} / {user.end}
          </p>
        </div>

        <div class="boxStellenUnterBeruf">
          <h3>Arbeit</h3>
          {beruf.map((item) => (
            <ul className="ul">
              <li>{item.stellen}</li>
              <li>{item.unternehmen}</li>
            </ul>
          ))}
        </div>

        <div class="boxStartEndSchule">
          <p>
            {" "}
            {user.startSchule} / {user.endSchule}
          </p>
        </div>

        <div class="boxShulbildung">
          <h3>Schulbildung</h3>
          <p>{user.schulForm}</p>
          <p>{user.schule}</p>

          <div className="uni">
            <p>{user.bildungsNiveau}</p>
            <p>{user.studiengang}</p>
          </div>
        </div>
        <div class="boxStartEndUni">
          <p>
            {" "}
            {user.startStudiengang} / {user.endStudiengang}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TemplateZwei;
