import { Sun, Moon, Share2, Check } from "lucide-react";
import { useState } from "react";

export default function Header({ darkMode, toggleTheme }) {
  const [showCopied, setShowCopied] = useState(false);

  const handleShare = async () => {
    // Get URL parameters to customize share message
    const params = new URLSearchParams(window.location.search);
    const fromCode = params.get('from');
    const toCode = params.get('to');
    const amount = params.get('amount');

    // Create dynamic share text based on current conversion
    let shareText = "Check out this awesome currency converter with 160+ currencies!";
    if (fromCode && toCode && amount) {
      shareText = `Convert ${amount} ${fromCode} to ${toCode} with FluxRate - Real-time currency converter!`;
    } else if (fromCode && toCode) {
      shareText = `Convert ${fromCode} to ${toCode} with FluxRate - Real-time currency converter!`;
    }

    const shareData = {
      title: "FluxRate - Currency Converter",
      text: shareText,
      url: window.location.href,
    };

    try {
      // Try using the Web Share API (works on mobile and some desktop browsers)
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: Copy link to clipboard
        await navigator.clipboard.writeText(window.location.href);
        
        // Show "Copied!" feedback
        setShowCopied(true);
        setTimeout(() => setShowCopied(false), 2000);
      }
    } catch (error) {
      // User cancelled share or clipboard failed
      if (error.name !== "AbortError") {
        console.error("Share failed:", error);
      }
    }
  };

  return (
    <header className="absolute top-0 left-0 w-full px-4 sm:px-6 pt-4 sm:pt-5 flex items-center justify-between z-50">
      
      {/* Logo */}
      <img
        src={darkMode ? "/dark-logo.png" : "/light-logo.png"}
        alt="FluxRate logo"
        className="h-8 sm:h-10 w-auto"
      />

      {/* Right icons */}
      <div className="flex items-center gap-3 sm:gap-5">
        
        {/* Theme toggle */}
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

        {/* Share */}
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
          
          {/* Copied tooltip */}
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