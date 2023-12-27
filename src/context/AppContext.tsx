import React from "react";
import { PasswordProperties, initialProperties } from "../helpers";

interface ContextState {
  passwordCopied: boolean;
  generatedPassword: string;
  passwordProperties: PasswordProperties;
  setPasswordCopied: (passwordCopied: boolean) => void;
  setGeneratedPassword: (password: string) => void;
  setPasswordProperties: (properties: PasswordProperties) => void;
}

export const AppContext = React.createContext<ContextState>({
  passwordCopied: false,
  generatedPassword: "",
  passwordProperties: initialProperties,
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
