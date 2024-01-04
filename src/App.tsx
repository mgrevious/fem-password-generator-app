import AppProvider from './context/AppContext';
import PasswordForm from './components/PasswordForm';
import GeneratedPassword from './components/GeneratedPassword';

function App() {
  return (
    <AppProvider>
      <div className="container w-full sm:max-w-[540px] mx-auto min-h-screen">
        <div className="flex flex-col mt-[66px] sm:mt-[133px] items-center mx-5 min-h-screen">
          <header className="w-full">
            <h1 className="text-2xl text-light-gray mb-8 text-center">
              Password Generator
            </h1>
          </header>
          <main className="w-full">
            <section className="mb-6 bg-dark-gray p-4 xl:py-4 xl:px-8 w-full">
              <GeneratedPassword />
            </section>
            <section className="mb-4 bg-dark-gray p-4 xl:p-8 w-full">
              <PasswordForm />
            </section>
          </main>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
