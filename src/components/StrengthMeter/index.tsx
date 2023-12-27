import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import StrengthBars from "./StrengthBars";

const labelMap = new Map<number, string>([
  [1, "too weak!"],
  [2, "weak"],
  [3, "medium"],
  [4, "strong"],
]);

const StrengthMeter = () => {
  const { passwordProperties } = useContext(AppContext);
  return (
    <div className="bg-almost-black p-4 flex justify-between">
      <label className="uppercase text-light-gray">strength</label>
      <div className="flex justify-between">
        <span className="uppercase mr-3">
          {labelMap.get(passwordProperties.passwordStrength || 1)}
        </span>
        <StrengthBars strength={passwordProperties.passwordStrength} />
      </div>
    </div>
  );
};

export default StrengthMeter;
