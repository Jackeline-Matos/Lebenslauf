import FormularTeil from "./FormularTeil";
import FormularEins from "./FormularEins";
import { useState } from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
const TeilRendern = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      {/* {user.value ? (
        <>
          {" "}
          <FormularTeil />{" "}
        </>
      ) : null} */}
    </>
  );
};

export default TeilRendern;
