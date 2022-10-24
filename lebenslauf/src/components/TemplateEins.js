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
            {user.tel.length > 1 ? <li>{user.tel}</li> : null}
            {user.mail.length > 1 ? <li>{user.mail}</li> : null}
            {user.tel.length > 1 ? <li>{user.tel}</li> : null}
          </div>
          <div className="schulbildung">Schulbildung</div>
          <div className="hobbiesTemplateEins">Hobbys</div>
          <div className="footerTemplateEins">{user.name}</div>
        </div>
        <button onClick={handlePrint}>Print</button>
      </div>
    </>
  );
};

export default TemplateEins;
