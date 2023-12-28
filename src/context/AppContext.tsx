import React, { useState } from "react";
import {
  PasswordPropertyState,
  initialPasswordPropertyState,
} from "../helpers";

interface ContextState {
  passwordCopied: boolean;
  generatedPassword: string;
  passwordProperties: PasswordPropertyState;
  setPasswordCopied: (passwordCopied: boolean) => void;
  setGeneratedPassword: (password: string) => void;
  setPasswordProperties: (properties: PasswordPropertyState) => void;
}

export const AppContext = React.createContext<ContextState>({
  passwordCopied: false,
  generatedPassword: "",
  passwordProperties: initialPasswordPropertyState,
  setPasswordCopied() {},
  setGeneratedPassword() {},
  setPasswordProperties() {},
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

  return (
    <AppContext.Provider
      value={{
        passwordCopied,
        generatedPassword,
        passwordProperties,
        setPasswordCopied,
        setGeneratedPassword,
        setPasswordProperties,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
