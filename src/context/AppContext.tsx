import React, { useState } from "react";
import {
  CopyState,
  PasswordPropertyState,
  initialPasswordPropertyState,
} from "./helpers";
import { generatePassword } from "../components/PasswordForm/helpers";

interface ContextState {
  copyState: CopyState;
  error: string;
  passwordCopied: boolean;
  generatedPassword: string;
  passwordProperties: PasswordPropertyState;
  setPasswordCopied: (passwordCopied: boolean) => void;
  setGeneratedPassword: (password: string) => void;
  setPasswordProperties: (properties: PasswordPropertyState) => void;
  setError: (error: string) => void;
  setCopyState: (copyState: CopyState) => void;
}

export const AppContext = React.createContext<ContextState>({
  copyState: {
    message: "",
    className: "",
  },
  error: "",
  passwordCopied: false,
  generatedPassword: "",
  passwordProperties: initialPasswordPropertyState,
  setPasswordCopied() {},
  setGeneratedPassword() {},
  setPasswordProperties() {},
  setError() {},
  setCopyState() {},
});

interface ProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<ProviderProps> = ({ children }) => {
  const [passwordCopied, setPasswordCopied] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordProperties, setPasswordProperties] = useState(
    initialPasswordPropertyState
  );
  const [error, setError] = useState("");
  const [copyState, setCopyState] = useState<CopyState>({
    message: "",
    className: "",
  });

  return (
    <AppContext.Provider
      value={{
        copyState,
        error,
        passwordCopied,
        generatedPassword: generatePassword(
          passwordProperties.characterRestrictions,
          passwordProperties.passwordLength
        ),
        passwordProperties,
        setPasswordCopied,
        setGeneratedPassword,
        setPasswordProperties,
        setError,
        setCopyState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
