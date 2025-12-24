import { Sun, Moon, Share2, Check } from "lucide-react";
import { useState } from "react";

// Header with logo, theme button and share button
export default function Header({ darkMode, toggleTheme }) {
  const [showCopied, setShowCopied] = useState(false);

  // Function to copy the current page link to clipboard
  const handleShare = async () => {
    try {
      // Copy the full current URL (includes from, to, and amount if present)
      await navigator.clipboard.writeText(window.location.href);
      
      // Show "copied" feedback
      setShowCopied(true);
      
      // Hide the check mark and message after 2 seconds
      setTimeout(() => setShowCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy link:", error);
    }
  };
  
  return (
    <header className="absolute top-0 left-0 w-full px-4 sm:px-6 pt-4 sm:pt-5 flex items-center justify-between z-50">
      
      {/* Clickable logo that goes back to homepage */}
      <a 
        href="/" 
        className="cursor-pointer transition-opacity hover:opacity-80"
        aria-label="Go to homepage"
      >
        <img
          src={darkMode ? "/dark-logo.png" : "/light-logo.png"}
          alt="FluxRate logo"
          className="h-8 sm:h-10 w-auto"
        />
      </a>

      {/* Buttons on the right */}
      <div className="flex items-center gap-3 sm:gap-5">
        
        {/* Theme toggle button */}
        <button
          onClick={toggleTheme}
          className={`transition p-1 ${
            darkMode
              ? "text-white/90 hover:text-white"
              : "text-black/80 hover:text-black"
          }`}
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={20} className="sm:w-[22px] sm:h-[22px]" /> : <Moon size={20} className="sm:w-[22px] sm:h-[22px]" />}
        </button>

        {/* Share button - now only copies link */}
        <div className="relative">
          <button
            onClick={handleShare}
            className={`transition p-1 ${
              darkMode
                ? "text-white/90 hover:text-white"
                : "text-black/80 hover:text-black"
            }`}
            aria-label="Share"
          >
            {showCopied ? <Check size={20} className="sm:w-[22px] sm:h-[22px]" /> : <Share2 size={20} className="sm:w-[22px] sm:h-[22px]" />}
          </button>
          
          {/* "Link copied!" message */}
          {showCopied && (
            <div
              className={`absolute top-full right-0 mt-2 px-3 py-1 rounded-lg text-xs whitespace-nowrap ${
                darkMode
                  ? "bg-white/20 text-white backdrop-blur-xl"
                  : "bg-black/10 text-black"
              }`}
            >
              Link copied!
            </div>
          )}
        </div>
      </div>
    </header>
  );
}