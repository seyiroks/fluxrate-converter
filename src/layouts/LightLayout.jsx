import React from "react";
import lightBg from "../assets/backgrounds/light-bg.png";

export default function LightLayout({ children }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${lightBg})`
      }}
    >
      {/* optional overlay */}
      <div className="min-h-screen backdrop-blur-sm bg-white/40">
        {children}
      </div>
    </div>
  );
}
