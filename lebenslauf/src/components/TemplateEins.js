import "./TemplateEins.css";
import UserContext from "../context/UserContext";
import { useContext } from "react";
const TemplateEins = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      {" "}
      <div class="boxEins">
        <div className="innerBoxEins">
          <h1 className="hTemplateEins">
            {user.name.toUpperCase()} {user.vorname.toUpperCase()}
          </h1>
          <div className="hauptBox">
            <div className="linkeBox">
              <ul>
                <li>Anschrift</li>
                <li>
                  {user.strasse}
                  {user.hausnummer}
                </li>
                <li>
                  {user.plz}
                  {user.stadt}
                </li>
              </ul>
              <ul>
                <li>Geburtsdatum</li>
                <li>{user.born}</li>
              </ul>
              <ul>
                <li>{user.mail}</li>
                <li>{user.tel}</li>
              </ul>

              <div class="block_1 hline-bottom">
                {" "}
                <h5>Ausbildung</h5>
              </div>
              <ul>
                <li>M</li>
              </ul>
            </div>
            <div className="rechteBox"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateEins;
