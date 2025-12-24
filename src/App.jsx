import { useState } from "react";
import Header from "./components/Header";
import ConverterCard from "./components/ConverterCard";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative flex flex-col"
      style={{
        backgroundImage: darkMode
          ? "url('/dark-bg.png')"
          : "url('/light-bg.png')",
      }}
    >
      {/* Header at the top with logo and buttons */}
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* Main part of the page */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-20 sm:py-24 md:py-32">
        <h1
          className={`text-3xl sm:text-4xl lg:text-5xl font-regular mb-6 sm:mb-8 md:mb-10 text-center ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Currency Converter
        </h1>

        <ConverterCard darkMode={darkMode} />
      </main>

      {/* Footer at the bottom */}
      <Footer darkMode={darkMode} />
    </div>
  );
}