import { Sun, Share2 } from "lucide-react";

export default function Header({ darkMode, toggleTheme }) {
  return (
    <header className="absolute top-0 left-0 w-full px-6 pt-5 flex items-center justify-between">
      
      {/* Logo */}
      <img
        src={darkMode ? "/dark-logo.png" : "/light-logo.png"}
        alt="FluxRate logo"
        className="h-10 w-auto"
      />

      {/* Right icons */}
      <div className="flex items-center gap-5">
        
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="text-white/90 hover:text-white transition"
          aria-label="Toggle theme"
        >
          <Sun size={22} />
        </button>

        {/* Share */}
        <button
          className="text-white/90 hover:text-white transition"
          aria-label="Share"
        >
          <Share2 size={22} />
        </button>
      </div>
    </header>
  );
}
