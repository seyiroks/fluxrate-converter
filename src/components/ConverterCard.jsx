export default function ConverterCard() {
  return (
    <div
      className="w-full max-w-lg
                 bg-white/10 backdrop-blur-2xl
                 border border-white/20
                 rounded-3xl
                 shadow-[0_30px_90px_rgba(0,0,0,0.4)]
                 px-7 py-8"
    >
      {/* Header */}
      <h2 className="text-center text-white text-lg font-medium tracking-wide mb-8">
        Currency Converter
      </h2>

      {/* FROM */}
      <div className="space-y-3">
        <p className="text-white/70 text-sm">From</p>

        <div
          className="flex items-center
                    min-h-[64px]
                    bg-white/15
                    border border-white/20
                    rounded-2xl
                    px-5"

        >
          {/* Currency selector */}
          <div className="flex items-center gap-3 flex-1">
            <div className="w-7 h-7 rounded-full bg-white/40" />
            <span className="text-white text-sm">USD</span>
            <span className="text-white/60 text-sm">▼</span>
          </div>

          {/* Amount input */}
          <div className="flex items-center gap-1 text-white">
            <span className="text-white/60">$</span>
            <input
              type="text"
              placeholder="1,000"
              className="bg-transparent
                        w-28 text-right
                        text-white text-base
                        placeholder-white/40
                        leading-none
                        focus:outline-none"

            />
          </div>
        </div>
      </div>

      {/* SWAP */}
      <div className="flex justify-center mt-10 my-2">
        <button
          className="w-12 h-12
                     rounded-xl
                     bg-white/20
                     border border-white/30
                     backdrop-blur-md
                     text-white text-lg
                     hover:bg-white/30 transition"
        >
          ⇅
        </button>
      </div>

      {/* TO */}
      <div className="space-y-3">
        <p className="text-white/70 text-sm">To</p>

        <div
          className="flex items-center
                    min-h-[64px]
                    bg-white/15
                    border border-white/20
                    rounded-2xl
                    px-5"

        >
          {/* Currency selector */}
          <div className="flex items-center gap-3 flex-1">
            <div className="w-7 h-7 rounded-full bg-white/40" />
            <span className="text-white text-sm">GHS</span>
            <span className="text-white/60 text-sm">▼</span>
          </div>

          {/* Output */}
          <div className="text-white text-right w-28 text-base leading-none">
            12,340
          </div>
        </div>
      </div>

      {/* RATE */}
      <p className="text-center text-white/50 text-sm mt-8">
        1 USD = 12.34 GHS
      </p>
    </div>
  );
}
