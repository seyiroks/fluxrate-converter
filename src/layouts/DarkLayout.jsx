import React from "react";
import darkBg from "../assets/backgrounds/dark-bg.png";

export default function DarkLayout({ children }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${darkBg})`
      }}
    >
      {/* optional overlay */}
      <div className="min-h-screen backdrop-blur-sm bg-black/30">
        {children}
      </div>
    </div>
  );
}
