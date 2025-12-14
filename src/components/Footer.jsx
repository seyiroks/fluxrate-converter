export default function Footer({ darkMode }) {
  return (
    <footer className="absolute bottom-0 left-0 w-full px-6 pb-5">
      
      {/* Divider line */}
      <div
        className={`w-full h-px mb-5 ${
          darkMode ? "bg-white/30" : "bg-black/20"
        }`}
      />

      {/* Footer text */}
      <p
        className={`text-sm text-right ${
          darkMode ? "text-white/70" : "text-black/60"
        }`}
      >
        Copyright © {new Date().getFullYear()} FluxRate. All rights reserved.
      </p>
    </footer>
  );
}
