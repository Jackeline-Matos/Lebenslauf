import { motion } from "framer-motion";
const FormularZwei = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100vw" }}
      exit={{ x: "window.innerWidth", transition: { duration: 0.1 } }}
    >
      <h1>Shulbildung</h1>

      <form>
        <div className="zeile">
          <div className="flex">
            <label htmlFor=""></label>
            <select>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option selected value="coconut">
                Coconut
              </option>
              <option value="mango">Mango</option>
            </select>
          </div>
          <div className="flex">
            <label htmlFor="vorname">Vorname</label>
            <input type="text" id="vorname" />
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default FormularZwei;
