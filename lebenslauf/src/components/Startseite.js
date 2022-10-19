import "./Startseite.css";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
const Startseite = () => {
  const [move, setMove] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="background">
      <div className="center">
        <h1>CREATE YOUR CV</h1>
        <motion.button
          animate={{ rotate: move ? 360 : 0 }}
          // transition={{ type: "tween", duration: 2 }}
          transition={{ type: "spring", bounce: 5 }}
          // transition={{ type: "inerita", velocity: 40 }}

          onClick={() => {
            setMove(!move);
            const nav = () => navigate("/templates");
            nav();
          }}
          className="button"
        >
          GET STARTED
        </motion.button>
      </div>
    </div>
  );
};

export default Startseite;
