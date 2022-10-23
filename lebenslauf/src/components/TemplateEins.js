import "./TemplateEins.css";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useEffect } from "react";
const TemplateEins = () => {
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
  console.log(beruf);
  return (
    <>
      {" "}
      <div class="boxEins">
        <div className="innerBoxEins">
          <div className="hauptBox">
            <h1 className="hTemplateEins">
              {user.name.toUpperCase()} {user.vorname.toUpperCase()}
            </h1>
            <div className="rechteUndLinke">
              <div className="linkeBox">
                <ul className="ul">
                  <li className="strong">
                    {" "}
                    <strong>Anschrift</strong>{" "}
                  </li>
                  <li>
                    {user.strasse}
                    {user.hausnummer}
                  </li>
                  <li>
                    {user.plz}
                    {user.stadt}
                  </li>
                </ul>
                <ul className="ul">
                  <li className="strong">
                    <strong>Geburtsdatum</strong>{" "}
                  </li>
                  <li>{user.born}</li>
                </ul>
                <div className="mitKringel">
                  {" "}
                  <ul className="ul">
                    <li className="strong">{user.mail}</li>
                    <li>{user.tel}</li>
                  </ul>
                </div>
                {/* <img
                  className="kringel"
                  src={require("../images/KringelTemplateEins.png")}
                  alt="Kringel"
                 
                /> */}
                <div class="block_1 templateEins">
                  {" "}
                  <h4 className="block">Ausbildung</h4>
                </div>
                <ul className="ul">
                  <li className="strong">
                    <strong>{user.schulForm}</strong>{" "}
                  </li>
                  <li>{user.ausbildung}</li>
                </ul>
                {beruf.map((item) => (
                  <ul className="ul">
                    <li>{item.stellen}</li>
                    <li>
                      {item.start}-{item.end}
                    </li>
                    <li>{item.unternehmen}</li>
                  </ul>
                ))}
              </div>
              <div className="rechteBox">
                <div class="block_1 templateEins">
                  {" "}
                  <h4 className="block">Kenntnisse</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateEins;
