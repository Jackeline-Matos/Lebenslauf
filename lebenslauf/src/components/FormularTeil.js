import UserContext from "../context/UserContext";
import { useContext } from "react";

const FormularTeil = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      <div className="zeile">
        <div className="flex">
          <label htmlFor="unternehmenEins">Unternehmen</label>
          <input
            type="text"
            id="unternehmenEins"
            value={user.unternehmenEins}
            onChange={(e) =>
              setUser({ ...user, unternehmenEins: e.target.value })
            }
          />
        </div>
        <div className="flex">
          <label htmlFor="positionEins">Position</label>
          <input
            type="text"
            id="positionEins"
            value={user.stellenEins}
            onChange={(e) => setUser({ ...user, stellenEins: e.target.value })}
          />
        </div>
        <div className="flex-eins">
          <label>Von</label>
          <input
            type="date"
            id="startEins"
            value={user.startEins}
            onChange={(e) => setUser({ ...user, startEins: e.target.value })}
          />
        </div>

        <div className="flex-eins">
          <label htmlFor="endEins">Bis</label>
          <input
            type="date"
            id="endEins"
            value={user.endEins}
            onChange={(e) => setUser({ ...user, endEins: e.target.value })}
          />
        </div>
      </div>

      <div className="zeile">
        <div className="flex">
          <label htmlFor="unternehmen">Unternehmen</label>
          <input
            type="text"
            id="unternehmenZwei"
            value={user.unternehmenZwei}
            onChange={(e) =>
              setUser({ ...user, unternehmenZwei: e.target.value })
            }
          />
        </div>
        <div className="flex">
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="positionZwei"
            value={user.stellenZwei}
            onChange={(e) => setUser({ ...user, stellenZwei: e.target.value })}
          />
        </div>
        <div className="flex-eins">
          <label>Von</label>
          <input
            type="date"
            id="startZwei"
            value={user.startZwei}
            onChange={(e) => setUser({ ...user, startZwei: e.target.value })}
          />
        </div>

        <div className="flex-eins">
          <label>Bis</label>
          <input
            type="date"
            id="endZwei"
            value={user.endZwei}
            onChange={(e) => setUser({ ...user, endZwei: e.target.value })}
          />
        </div>
      </div>
    </>
  );
};

export default FormularTeil;
