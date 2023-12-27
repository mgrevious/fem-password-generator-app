import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import CharacterType from "./CharacterType";

const CharacterTypes = () => {
  const {
    passwordProperties: { characterRestrictions },
  } = useContext(AppContext);

  return (
    <div>
      {Object.entries(characterRestrictions).map(
        ([name, { checked, label }], index) => (
          <CharacterType
            key={index}
            isChecked={checked}
            name={name}
            label={label}
          />
        )
      )}
    </div>
  );
};

export default CharacterTypes;
