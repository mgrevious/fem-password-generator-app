import React, { useState } from "react";
import { PasswordPropertyState, initialPasswordPropertyState } from "./helpers";

interface ContextState {
  error: string;
  passwordCopied: boolean;
  generatedPassword: string;
  passwordProperties: PasswordPropertyState;
  setPasswordCopied: (passwordCopied: boolean) => void;
  setGeneratedPassword: (password: string) => void;
  setPasswordProperties: (properties: PasswordPropertyState) => void;
  setError: (error: string) => void;
}

export const AppContext = React.createContext<ContextState>({
  error: "",
  passwordCopied: false,
  generatedPassword: "",
  passwordProperties: initialPasswordPropertyState,
  setPasswordCopied() {},
  setGeneratedPassword() {},
  setPasswordProperties() {},
  setError() {},
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

  return (
    <AppContext.Provider
      value={{
        error,
        passwordCopied,
        generatedPassword,
        passwordProperties,
        setPasswordCopied,
        setGeneratedPassword,
        setPasswordProperties,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
