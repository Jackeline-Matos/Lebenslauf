import "./Templates.css";
import curricolo from "../images/Chef de Cozinha Currículo Simples com Foto (1).png";
import curricoloEins from "../images/Chef de Cozinha Currículo Simples com Foto (6).png";
import curricoloZwei from "../images/Chef de Cozinha Currículo Simples com Foto (4).png";
import franka from "../images/frankaM.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
const Templates = () => {
  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("data"));

    if (userData) {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify({ ...user, user }));
  }, [user]);
  return (
    <motion.div
      className="parent"
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "window.innerWidth", transition: { duration: 0.1 } }}
    >
      <div className="button-zuruck-template">
        <button
          class="cta zu"
          onClick={() => {
            const nav = () => navigate("/");
            nav();
          }}
        >
          <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
          <span style={{ color: "black" }}>
            <FontAwesomeIcon icon={faArrowLeft} />
            Zurück
          </span>
        </button>
      </div>

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
          src={franka}
        />
        <button class="cta zu">
          <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
          <span
            onClick={() => {
              setUser({ ...user, template: 1 });
              navigate("/formular");
            }}
            style={{ color: "black" }}
          >
            zum Formular
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
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
          whileDrag={{ scale: 2, zIndex: 1 }}
          onDragEnd={{ top: 0, left: 0, right: 0, bottom: 0 }}
          animate={{ move: 200 }}
          transition={{ type: "spring", bounce: 0.01 }}
          src={curricoloEins}
        />
        <button class="cta zu">
          <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
          <span
            onClick={() => {
              setUser({ ...user, template: 2 });
              navigate("/formular");
            }}
            style={{ color: "black" }}
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
          whileDrag={{ scale: 2, zIndex: 1 }}
          onDragEnd={{ top: 0, left: 0, right: 0, bottom: 0 }}
          animate={{ move: 200 }}
          transition={{ type: "spring", bounce: 0.01 }}
          src={curricoloZwei}
        />
        <button class="cta zu">
          <svg viewBox="0 0 13 10" height="10px" width="15px"></svg>
          <span
            onClick={() => {
              setUser({ ...user, template: 3 });
              navigate("/formular");
            }}
            style={{ color: "black" }}
          >
            zum Formular
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </motion.div>
  );
};

export default Templates;
