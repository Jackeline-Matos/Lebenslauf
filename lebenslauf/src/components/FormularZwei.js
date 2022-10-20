import { motion } from "framer-motion";
const FormularZwei = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "window.innerWidth", transition: { duration: 0.1 } }}
    >
      <h1>FormularZwei</h1>
    </motion.div>
  );
};

export default FormularZwei;
