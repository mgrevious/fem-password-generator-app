import CopyIcon from "../../assets/images/icon-copy.svg";

const GeneratedPassword = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-2xl">PTx1f5DaFX</span>
      <span className="w-[18px]">
        <img src={CopyIcon} alt="copy icon" />
      </span>
    </div>
  );
};

export default GeneratedPassword;
