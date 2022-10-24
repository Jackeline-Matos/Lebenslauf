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
          <div className="header">header</div>
          <div className="untertitel">untertitel</div>
          <div className="contentLinksTemplateEins">Persönliches Profil</div>
          <div className="contentRechtsTemplateEins">Beruflicher Werdegang</div>
          <div className="faehigkeiten">faehigkeiten</div>{" "}
          <div className="kontaktinformationen">Kontaktinformationen</div>
          <div className="schulbildung">Schulbildung</div>
          <div className="hobbiesTemplateEins">Hobbys</div>
          <div className="footerTemplateEins">Footer</div>
        </div>
        <button onClick={handlePrint}>Print</button>
      </div>
    </>
  );
};

export default TemplateEins;
