import "./Startseite.css";
import { motion } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
const Startseite = () => {
  const [move, setMove] = useState(false);
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "window.innerWidth", transition: { duration: 0.1 } }}
      className="background"
    >
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
    </motion.div>
  );
};

export default Startseite;
