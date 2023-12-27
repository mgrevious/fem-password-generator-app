import React, { useContext } from "react";
import { produce } from "immer";
import { AppContext } from "../../context/AppContext";

interface Props {
  isChecked: boolean;
  name: string;
  label: string;
}

const CharacterType: React.FC<Props> = ({ isChecked, name, label }) => {
  const { passwordProperties, setPasswordProperties } = useContext(AppContext);

  return (
    <div className="flex items-center mb-2">
      {" "}
      <input
        checked={isChecked}
        id={name}
        aria-describedby={`${name}-description`}
        name={name}
        type="checkbox"
        className="mr-3 h-4 w-4 border-2 border-off-white bg-dark-gray text-primary accent-dark-gray checked:border-primary  focus:ring-0 hover:cursor-pointer"
        onChange={(e) => {
          const updatedState = produce(passwordProperties, (state) => {
            state.characterRestrictions[name].checked = e.target.checked;
          });

          setPasswordProperties(updatedState);
        }}
      />
      <label className="pt-[2px]" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default CharacterType;
