import React from "react";
import darkBg from "../assets/backgrounds/dark-bg.png";

export default function DarkLayout({ children }) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${darkBg})`
      }}
    >
      {/* optional overlay */}
      <div className="min-h-screen w-full backdrop-blur-sm bg-black/30">
        {children}
      </div>
    </div>
  );
}