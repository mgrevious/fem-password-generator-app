import { useContext } from "react";
import CopyIcon from "../../assets/images/icon-copy.svg";
import { AppContext } from "../../context/AppContext";

const GeneratedPassword = () => {
  const { generatedPassword, copyState, setCopyState } = useContext(AppContext);
  return (
    <>
      {" "}
      <div className="flex justify-between items-center">
        <span id="generatedPassword" className="text-2xl break-all w-[90%]">
          {generatedPassword}
        </span>
        <button
          className="w-[18px]"
          onClick={async () => {
            const password =
              document.getElementById("generatedPassword")?.innerHTML;

            if (password) {
              try {
                await navigator.clipboard.writeText(password);
                setCopyState({
                  message: "Password copied!",
                  className: "text-primary",
                });
              } catch (err) {
                setCopyState({
                  message: "Failed to copy password",
                  className: "text-error",
                });
              }
            }
          }}
        >
          <img src={CopyIcon} alt="copy icon" />
        </button>
      </div>
      {copyState.message && (
        <p className={`mt-4 text-center ${copyState.className}`}>
          {copyState.message}
        </p>
      )}
    </>
  );
};

export default GeneratedPassword;
