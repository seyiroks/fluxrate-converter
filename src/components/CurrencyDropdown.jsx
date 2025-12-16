import { useState } from "react";
import { currencies } from "../data/currencies";

export default function CurrencyDropdown({ value, onChange, darkMode }) {
  const [open, setOpen] = useState(false);

  const selected = currencies.find(c => c.code === value);

  return (
    <div className="relative">
      
      {/* Selected */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-white"
      >
        <span className="text-lg">{selected.flag}</span>
        <span>{selected.code}</span>
        <span className="opacity-60">▼</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`
            absolute top-10 left-0 w-44 rounded-xl overflow-hidden
            ${darkMode ? "bg-black/80 text-white" : "bg-white text-black"}
            backdrop-blur-xl shadow-lg z-50
          `}
        >
          {currencies.map(currency => (
            <button
              key={currency.code}
              onClick={() => {
                onChange(currency.code);
                setOpen(false);
              }}
              className="w-full px-4 py-2 flex items-center gap-2 hover:bg-black/10"
            >
              <span>{currency.flag}</span>
              <span>{currency.code}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
