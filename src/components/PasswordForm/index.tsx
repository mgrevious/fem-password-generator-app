import CharacterLength from "../CharacterLength";
import CharacterTypes from "../CharacterTypes";
import StrengthMeter from "../StrengthMeter";
import ArrowRight from "../../assets/images/icon-arrow-right.svg";

const PasswordForm = () => {
  return (
    <form className="flex flex-col justify-center">
      <div>
        <div className="mb-6">
          <CharacterLength />
        </div>
        <div className="mb-8">
          <CharacterTypes />
        </div>
        <div className="mb-4 lg:mb-8">
          <StrengthMeter />
        </div>
        <button className="bg-primary h-14 w-full text-dark-gray flex items-center justify-center">
          <span className="pr-2 uppercase">Generate</span>
          <img src={ArrowRight} alt="arrow right" />
        </button>
      </div>
      <div></div>
    </form>
  );
};

export default PasswordForm;
