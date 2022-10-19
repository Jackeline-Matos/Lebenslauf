import "./Startseite.css";
import { motion } from "framer-motion";
import { useState } from "react";
const Startseite = () => {
  const [move, setMove] = useState(false);
  return (
    <div className="background">
      <div className="center">
        <h1>CREATE YOUR CV</h1>
        <motion.button
          animate={{ rotate: move ? 360 : 0 }}
          // transition={{ type: "tween", duration: 2 }}
          // transition={{ type: "spring", duration: 2 }}
          transition={{ type: "inerita", velocity: 40 }}
          // transition={{ type: "bounce", duration: 2 }}
          onClick={() => setMove(!move)}
          className="button"
        >
          GET STARTED
        </motion.button>
      </div>
    </div>
  );
};

export default Startseite;
