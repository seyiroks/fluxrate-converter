import { useState } from "react";
import Header from "./components/Header";
import ConverterCard from "./components/ConverterCard";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const toggleTheme = () => setDarkMode(!darkMode);


  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: darkMode
          ? "url('/dark-bg.png')"
          : "url('/light-bg.png')",
      }}
    >
      {/* HEADER */}
      <Header darkMode={darkMode} toggleTheme={toggleTheme} />

      {/* MAIN CONTENT */}
      <main className="pt-60 px-4 flex flex-col items-center">
        <h1
          className={`text-4xl font-regular mb-10 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Currency Converter
        </h1>


        <ConverterCard darkMode={darkMode} />
      </main>

      {/* FOOTER */}
      <Footer darkMode={darkMode} />
    </div>
  );
}
