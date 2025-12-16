import { Sun, Moon, Share2 } from "lucide-react";

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
          className={`transition ${
            darkMode
              ? "text-white/90 hover:text-white"
              : "text-black/80 hover:text-black"
          }`}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={22} /> : <Moon size={22} />}
        </button>

        {/* Share */}
        <button
          className={`transition ${
            darkMode
              ? "text-white/90 hover:text-white"
              : "text-black/80 hover:text-black"
          }`}
          aria-label="Share"
        >
          <Share2 size={22} />
        </button>
      </div>
    </header>
  );
}
