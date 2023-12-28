import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const CharacterLength = () => {
  const {
    passwordProperties: { characterLength },
  } = useContext(AppContext);
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <label className="text-[18px]" htmlFor="characterLength">
          Character Length
        </label>
        <span className="text-2xl">{characterLength}</span>
      </div>
      <input
        className="w-full"
        type="range"
        id="characterLength"
        name="characterLength"
        min="8"
        max="24"
      />
    </div>
  );
};

export default CharacterLength;
