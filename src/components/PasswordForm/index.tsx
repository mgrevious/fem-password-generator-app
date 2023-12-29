import { useContext } from "react";
import CharacterLength from "../CharacterLength";
import CharacterTypes from "../CharacterTypes";
import StrengthMeter from "../StrengthMeter";
import ArrowRight from "../../assets/images/icon-arrow-right.svg";
import { AppContext } from "../../context/AppContext";
import { generatePassword, validateRestrictions } from "./helpers";

const PasswordForm = () => {
  const {
    error,
    passwordProperties,
    setGeneratedPassword,
    setError,
    setCopyState,
  } = useContext(AppContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // generate password
    const { passwordLength, characterRestrictions } = passwordProperties;
    const result = validateRestrictions(passwordProperties);

    setCopyState({ message: "", className: "" });

    if (result) {
      setError(result);
    } else {
      const password = generatePassword(characterRestrictions, passwordLength);
      setGeneratedPassword(password);
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col justify-center">
      <div>
        <div className="mb-6">
          <CharacterLength />
        </div>
        <div className="mb-8">
          <CharacterTypes />
          {error && <p className="text-error font-bold pt-2">{error}</p>}
        </div>
        <div className="mb-4 lg:mb-8">
          <StrengthMeter />
        </div>
        <button
          type="submit"
          className="bg-primary h-14 w-full text-dark-gray flex items-center justify-center"
        >
          <span className="pr-2 uppercase">Generate</span>
          <img src={ArrowRight} alt="arrow right" />
        </button>
      </div>
      <div></div>
    </form>
  );
};

export default PasswordForm;
