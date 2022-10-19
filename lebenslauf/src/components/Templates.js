import "./Templates.css";
import curricolo from "../images/Chef de Cozinha Currículo Simples com Foto (1).png";
import curricoloEins from "../images/Chef de Cozinha Currículo Simples com Foto.png";
import curricoloZwei from "../images/Chef de Cozinha Currículo Simples com Foto (4).png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Templates = () => {
  const navigate = useNavigate();
  return (
    <div className="parent">
      <div className="imOne">
        <motion.img
          whileHover={{ scale: 1.2 }}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            scale: 4,
          }}
          whileDrag={{ scale: 2, zIndex: 1 }}
          onDragEnd={{ top: 0, left: 0, right: 0, bottom: 0 }}
          animate={{ move: 200 }}
          transition={{ type: "spring", bounce: 0.01 }}
          src={curricolo}
          style={{ zIndex: 1 }}
          //   onclick einfügen und damit einen usestate verändern damit zIndem auf eins kommt ternary
        />
        <button class="cta zu">
          <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
          <span
            onClick={() => {
              navigate("/formular");
            }}
          >
            zum Formular
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
        {/* <motion.span
          whileHover={{ scale: 1.2 }}
          drag
          whileDrag={{ scale: 4 }}
          animate={{ move: 200 }}
          transition={{ type: "spring", bounce: 0.01 }}
          src={curricolo}
          onClick={() => {
            navigate("/formular");
          }}
        >
          Choose
        </motion.span> */}
      </div>

      <div className="imTwo">
        <motion.img
          whileHover={{ scale: 1.2 }}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            scale: 4,
          }}
          whileDrag={{ scale: 2 }}
          onDragEnd={{ top: 0, left: 0, right: 0, bottom: 0 }}
          animate={{ move: 200 }}
          transition={{ type: "spring", bounce: 0.01 }}
          src={curricoloEins}
        />
        <button class="cta zu">
          <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
          <span
            onClick={() => {
              navigate("/formular");
            }}
          >
            zum Formular
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
      <div className="imThree">
        <motion.img
          whileHover={{ scale: 1.2 }}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            scale: 4,
          }}
          whileDrag={{ scale: 2 }}
          onDragEnd={{ top: 0, left: 0, right: 0, bottom: 0 }}
          animate={{ move: 200 }}
          transition={{ type: "spring", bounce: 0.01 }}
          src={curricoloZwei}
          style={{ zIndex: 1 }}
        />
        <button class="cta zu">
          <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
          <span
            onClick={() => {
              navigate("/formular");
            }}
          >
            zum Formular
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Templates;
