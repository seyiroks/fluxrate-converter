import { useState } from "react";
const currencies = [
  {
    code: "USD",
    name: "US Dollar",
    flag: "🇺🇸",
    symbol: "$",
  },
  {
    code: "EUR",
    name: "Euro",
    flag: "🇪🇺",
    symbol: "€",
  },
  {
    code: "GBP",
    name: "British Pound",
    flag: "🇬🇧",
    symbol: "£",
  },
];


export default function ConverterCard({ darkMode }) {
  const [fromCurrency, setFromCurrency] = useState(currencies[0]);
  const [toCurrency, setToCurrency] = useState(currencies[1]);

  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);

  return (
    <div
      className={`
        w-full max-w-md
        rounded-3xl
        px-10 py-12
        relative
        backdrop-blur-x2
        shadow-xl
        border
        ${
          darkMode
            ? "bg-white/10 border-white/25"
            : "bg-white/70 border-black/25"
        }
      `}
    >
      {/* Soft glow */}
      <div
        className={`
          absolute inset-0 rounded-3xl blur-3xl -z-10
          ${darkMode ? "bg-white/5" : "bg-white/40"}
        `}
      />

      {/* FROM */}
      <div className="mb-14 relative">
        <p
          className={`text-sm mb-2 ml-2 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          From
        </p>

        <div
          className={`flex items-center justify-between h-16 rounded-xl px-4 ${
            darkMode ? "bg-white/15" : "bg-black/10"
          }`}
        >
          {/* Left (Currency selector) */}
          <button
            onClick={() => setFromOpen(!fromOpen)}
            className={`flex items-center gap-2 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <span className="text-lg">🇺🇸</span>
            <span className="font-regular">USD</span>
            <span className="opacity-70">▼</span>
          </button>

          {/* Right (Input) */}
          <input
            type="text"
            placeholder="$0.00"
            className={`bg-transparent text-right outline-none w-28 ${
              darkMode ? "text-white" : "text-black"
            }`}
          />
        </div>

        {/* FROM dropdown (static) */}
        {fromOpen && (
          <div
            className={`absolute mt-2 w-full rounded-xl p-2 z-20 border ${
              darkMode
                ? "bg-black/20 backdrop-blur-xl border-white/25 text-white"
                : "bg-white shadow-lg border-black/25 text-black"
            }`}
          >
            <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:opacity-80">
              <span>🇺🇸</span>
              <span>USD — US Dollar</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:opacity-80">
              <span>🇬🇧</span>
              <span>GBP — British Pound</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:opacity-80">
              <span>🇯🇵</span>
              <span>JPY — Japanese Yen</span>
            </div>
          </div>
        )}
      </div>

      {/* SWAP */}
      <div className="flex justify-center my-6">
        <button
          className={`w-12 h-12 rounded-lg flex items-center justify-center transition ${
            darkMode
              ? "bg-white/20 text-white hover:bg-white/30"
              : "bg-black/10 text-black hover:bg-black/20"
          }`}
        >
          ⇅
        </button>
      </div>

      {/* TO */}
      <div className="mb-14 relative">
        <p
          className={`text-sm mb-2 ml-2 ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          To
        </p>

        <div
          className={`flex items-center justify-between h-16 rounded-xl px-4 ${
            darkMode ? "bg-white/15" : "bg-black/10"
          }`}
        >
          {/* Left (Currency selector) */}
          <button
            onClick={() => setToOpen(!toOpen)}
            className={`flex items-center gap-2 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <span className="text-lg">🇪🇺</span>
            <span className="font-regular">EUR</span>
            <span className="opacity-70">▼</span>
          </button>

          {/* Right (Output) */}
          <div
            className={`text-right w-28 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            €0.00
          </div>
        </div>

        {/* TO dropdown (static) */}
        {toOpen && (
          <div
            className={`absolute mt-2 w-full rounded-xl p-2 z-20 border ${
              darkMode
                ? "bg-black/20 backdrop-blur-xl border-white/25 text-white"
                : "bg-white shadow-lg border-black/25 text-black"
            }`}
          >
            <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:opacity-80">
              <span>🇪🇺</span>
              <span>EUR — Euro</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:opacity-80">
              <span>🇨🇦</span>
              <span>CAD — Canadian Dollar</span>
            </div>
            <div className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:opacity-80">
              <span>🇳🇬</span>
              <span>NGN — Nigerian Naira</span>
            </div>
          </div>
        )}
      </div>

      {/* RATE */}
      <p
        className={`text-xs text-center mt-6 ${
          darkMode ? "text-white/80" : "text-black/80"
        }`}
      >
        1 USD = 0.92 EUR
      </p>
    </div>
  );
}
