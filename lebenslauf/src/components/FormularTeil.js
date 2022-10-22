import UserContext from "../context/UserContext";
import { useContext } from "react";
const FormularTeil = (value, setValue) => {
  const [user, setUser] = useContext(UserContext);
  return (
    <>
      <div className="zeile">
        <div className="flex-eins">
          <label>Von</label>
          <input
            type="date"
            id="startEins"
            value={user.beruf[1].date}
            onChange={(e) => setUser({ ...user, date: e.target.value })}
          />
        </div>

        <div className="flex-eins">
          <label htmlFor="endEins">Bis</label>
          <input
            type="date"
            id="endEins"
            value={user.beruf[1].endEins}
            onChange={(e) => setUser({ ...user, endEins: e.target.value })}
          />
        </div>
        <div className="flex">
          <label htmlFor="unternehmenEins">Unternehmen</label>
          <input
            type="text"
            id="unternehmenEins"
            value={user.beruf[1].unternehmenEins}
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
            value={user.beruf[1].positionEins}
            onChange={(e) => setUser({ ...user, positionEins: e.target.value })}
          />
        </div>
      </div>

      <div className="zeile">
        <div className="flex-eins">
          <label>Von</label>
          <input
            type="date"
            id="startZwei"
            value={user.beruf[2].startZwei}
            onChange={(e) => setUser({ ...user, startZwei: e.target.value })}
          />
        </div>

        <div className="flex-eins">
          <label>Bis</label>
          <input
            type="date"
            id="endZwei"
            value={user.beruf[2].endZwei}
            onChange={(e) => setUser({ ...user, endZwei: e.target.value })}
          />
        </div>
        <div className="flex">
          <label htmlFor="unternehmen">Unternehmen</label>
          <input
            type="text"
            id="unternehmenZwei"
            value={user.beruf[2].unternehmenZwei}
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
            value={user.beruf[2].positionZwei}
            onChange={(e) => setUser({ ...user, positionZwei: e.target.value })}
          />
        </div>
      </div>
      <label htmlFor="mehr">Weiteres Unternehmen hinzufügen</label>
      <input
        type="checkbox"
        onChange={(e) => {
          setValue(value);
          setValue(e.target.checked);
        }}
      />
      {value ? (
        <>
          {" "}
          <FormularTeil value={value} setValue={setValue} />{" "}
        </>
      ) : null}
    </>
  );
};

export default FormularTeil;
