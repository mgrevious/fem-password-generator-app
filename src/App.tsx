import { useState } from "react";
import "./App.css";
import AppProvider from "./context/AppContext";
import { initialProperties } from "./helpers";
import PasswordForm from "./components/PasswordForm";
import GeneratedPassword from "./components/GeneratedPassword";

function App() {
  const [passwordCopied, setPasswordCopied] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordProperties, setPasswordProperties] =
    useState(initialProperties);

  return (
    <AppProvider
      value={{
        passwordCopied,
        generatedPassword,
        passwordProperties,
        setPasswordCopied,
        setGeneratedPassword,
        setPasswordProperties,
      }}
    >
      <main className="container w-full mx-auto">
        {" "}
        <div className="flex flex-col justify-center items-center mx-4">
          <h1 className="text-lg text-light-gray">Password Generator</h1>
          <section className="mb-4 bg-dark-gray p-4 w-full">
            <GeneratedPassword />
          </section>
          <section className="mb-4 bg-dark-gray p-4 w-full">
            <PasswordForm />
          </section>
        </div>
      </main>
    </AppProvider>
  );
}

export default App;
