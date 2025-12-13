import { useState } from "react";
import ConverterCard from "./components/ConverterCard";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: darkMode
          ? "url('/dark-bg.png')"
          : "url('/light-bg.png')",
      }}
    >
      {/* Theme Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 px-3 py-2
                   bg-white/20 text-white rounded-lg
                   backdrop-blur-md shadow-lg
                   hover:bg-white/30 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Main UI */}
      <div className="min-h-screen flex items-center justify-center">
        <ConverterCard />
      </div>
    </div>
  );
}
