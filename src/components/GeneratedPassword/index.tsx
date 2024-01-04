import { useContext, useEffect } from 'react';
import CopyIcon from '../../assets/images/icon-copy.svg';
import { AppContext } from '../../context/AppContext';
import { createPassword } from '../PasswordForm/helpers';

const GeneratedPassword = () => {
  const {
    generatedPassword,
    copyState,
    setCopyState,
    setGeneratedPassword,
    passwordProperties,
  } = useContext(AppContext);

  useEffect(() => {
    if (!generatedPassword) {
      const { characterRestrictions, passwordLength } = passwordProperties;
      setGeneratedPassword(
        createPassword(characterRestrictions, passwordLength)
      );
    }
  }, [generatedPassword, passwordProperties, setGeneratedPassword]);

  return (
    <>
      <div className="flex justify-between items-center">
        <span id="generatedPassword" className="text-4xl break-all w-[90%]">
          {generatedPassword}
        </span>
        <button
          onClick={async () => {
            const password =
              document.getElementById('generatedPassword')?.innerHTML;

            if (password) {
              try {
                await navigator.clipboard.writeText(password);
                setCopyState({
                  message: 'Password copied!',
                  className: 'text-primary',
                });
              } catch (err) {
                setCopyState({
                  message: 'Failed to copy password',
                  className: 'text-error',
                });
              }
            }
          }}
        >
          <img src={CopyIcon} alt="copy icon" className="w-[21px]" />
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
