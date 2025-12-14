export default function ConverterCard() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white/10 backdrop-blur-x2 p-8 shadow-xl px-10">

      {/* FROM */}
      <div className="mb-10">
        <p className="text-sm text-white/70 mb-2">From</p>

        <div className="flex items-center justify-between h-14 rounded-xl bg-white/15 px-4">
          {/* Left */}
          <div className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 rounded-full bg-white/30" />
            <span className="font-regular font-small">USD</span>
            <span className="text-white/60">▼</span>
          </div>

          {/* Right */}
          <input
            type="text"
            placeholder="$0.00"
            className="bg-transparent text-right text-white outline-none w-24"
          />
        </div>
      </div>

      {/* SWAP */}
      <div className="flex justify-center my-3">
        <button className="w-10 h-10 rounded-lg bg-white/20 text-white flex items-center justify-center hover:bg-white/30 transition">
          ⇅
        </button>
      </div>

      {/* TO */}
      <div className="mb-10">
        <p className="text-sm text-white/70 mb-2">To</p>

        <div className="flex items-center justify-between h-14 rounded-xl bg-white/15 px-4">
          {/* Left */}
          <div className="flex items-center gap-2 text-white">
            <div className="w-6 h-6 rounded-full bg-white/30" />
            <span className="font-regular">EUR</span>
            <span className="text-white/60">▼</span>
          </div>

          {/* Right */}
          <div className="text-white/80 text-right w-24">
            €0.00
          </div>
        </div>
      </div>

      {/* RATE */}
      <p className="text-xs text-center text-white/60 mt-2">
        1 USD = 0.92 EUR
      </p>
    </div>
  );
}
