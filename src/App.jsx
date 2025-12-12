import React, { useState } from "react";
import DarkLayout from "./layouts/DarkLayout";
import LightLayout from "./layouts/LightLayout";

// Example: your main converter component
// import Converter from "./components/Converter";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const Layout = darkMode ? DarkLayout : LightLayout;

  return (
    <Layout>
      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 px-3 py-2 bg-white/20 text-white rounded-lg backdrop-blur-sm shadow-lg hover:bg-white/30 transition"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Put your real app UI here */}
      <div className="pt-20 px-4">
        <h1 className="text-white text-3xl font-semibold drop-shadow">
          FluxRate Converter
        </h1>

        {/* Example place for the converter */}
        {/* <Converter /> */}
      </div>
    </Layout>
  );
}
