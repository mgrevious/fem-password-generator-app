import { useContext } from "react";
import { produce } from "immer";
import { AppContext } from "../../context/AppContext";

const CharacterLength = () => {
  const { passwordProperties, setPasswordProperties } = useContext(AppContext);
  const { passwordLength } = passwordProperties;
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <label className="text-[18px]" htmlFor="passwordLength">
          Character Length
        </label>
        <span className="text-2xl">{passwordLength}</span>
      </div>
      <input
        className="w-full"
        type="range"
        id="passwordLength"
        name="passwordLength"
        value={passwordLength}
        min="8"
        max="24"
        onChange={(e) => {
          const updatedState = produce(passwordProperties, (state) => {
            state.passwordLength = Number(e.target.value);
          });
          setPasswordProperties(updatedState);
        }}
      />
    </div>
  );
};

export default CharacterLength;
