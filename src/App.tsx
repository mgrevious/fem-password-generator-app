import AppProvider from "./context/AppContext";
import PasswordForm from "./components/PasswordForm";
import GeneratedPassword from "./components/GeneratedPassword";

import "./App.css";

function App() {
  return (
    <AppProvider>
      <main className="container w-full mx-auto min-h-screen">
        <div className="flex flex-col justify-center items-center mx-5 min-h-screen">
          <h1 className="text-lg text-light-gray mb-4">Password Generator</h1>
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
