export default function Footer({ darkMode }) {
  return (
    <footer className="w-full px-4 sm:px-6 pb-4 sm:pb-5 mt-auto">
      
      {/* Divider line */}
      <div
        className={`w-full h-px mb-3 sm:mb-5 ${
          darkMode ? "bg-white/100" : "bg-black/100"
        }`}
      />

      {/* Footer text */}
      <p
        className={`text-xs sm:text-sm text-center sm:text-right ${
          darkMode ? "text-white/100" : "text-black/100"
        }`}
      >
        Copyright © {new Date().getFullYear()} FluxRate. All rights reserved.
      </p>
    </footer>
  );
}