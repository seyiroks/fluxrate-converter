export default function Footer({ darkMode }) {
  return (
    <footer className="absolute bottom-0 left-0 w-full px-6 pb-5">
      
      {/* Divider line */}
      <div
        className={`w-full h-px mb-5 ${
          darkMode ? "bg-white/100" : "bg-black/100"
        }`}
      />

      {/* Footer text */}
      <p
        className={`text-sm text-right ${
          darkMode ? "text-white/100" : "text-black/100"
        }`}
      >
        Copyright © {new Date().getFullYear()} FluxRate. All rights reserved.
      </p>
    </footer>
  );
}
