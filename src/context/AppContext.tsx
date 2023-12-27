import React from "react";
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
  value: ContextState;
}

const AppProvider: React.FC<ProviderProps> = ({ children, value }) => (
  <AppContext.Provider value={value}>{children}</AppContext.Provider>
);

export default AppProvider;
