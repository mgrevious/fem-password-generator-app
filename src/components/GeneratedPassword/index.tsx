import { useContext } from "react";
import CopyIcon from "../../assets/images/icon-copy.svg";
import { AppContext } from "../../context/AppContext";

const GeneratedPassword = () => {
  const { generatedPassword } = useContext(AppContext);
  return (
    <div className="flex justify-between items-center">
      <span className="text-2xl">{generatedPassword}</span>
      <span className="w-[18px]">
        <img src={CopyIcon} alt="copy icon" />
      </span>
    </div>
  );
};

export default GeneratedPassword;
