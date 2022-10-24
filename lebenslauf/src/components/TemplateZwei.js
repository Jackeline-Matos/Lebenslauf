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
      <div className="box2"></div>
    </div>
  );
};

export default TemplateZwei;
