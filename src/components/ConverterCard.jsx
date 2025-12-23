import { useState, useEffect, useRef } from "react";

// Comprehensive list of currencies (160+ supported by exchangerate-api.com)
// Alphabetically sorted
const currencies = [
  { code: "AED", name: "UAE Dirham", country: "ae", symbol: "د.إ" },
  { code: "AFN", name: "Afghan Afghani", country: "af", symbol: "؋" },
  { code: "ALL", name: "Albanian Lek", country: "al", symbol: "L" },
  { code: "AMD", name: "Armenian Dram", country: "am", symbol: "֏" },
  { code: "ANG", name: "Netherlands Antillean Guilder", country: "cw", symbol: "ƒ" },
  { code: "AOA", name: "Angolan Kwanza", country: "ao", symbol: "Kz" },
  { code: "ARS", name: "Argentine Peso", country: "ar", symbol: "$" },
  { code: "AUD", name: "Australian Dollar", country: "au", symbol: "$" },
  { code: "AWG", name: "Aruban Florin", country: "aw", symbol: "ƒ" },
  { code: "AZN", name: "Azerbaijani Manat", country: "az", symbol: "₼" },
  { code: "BAM", name: "Bosnia-Herzegovina Convertible Mark", country: "ba", symbol: "KM" },
  { code: "BBD", name: "Barbadian Dollar", country: "bb", symbol: "$" },
  { code: "BDT", name: "Bangladeshi Taka", country: "bd", symbol: "৳" },
  { code: "BGN", name: "Bulgarian Lev", country: "bg", symbol: "лв" },
  { code: "BHD", name: "Bahraini Dinar", country: "bh", symbol: ".د.ب" },
  { code: "BIF", name: "Burundian Franc", country: "bi", symbol: "Fr" },
  { code: "BMD", name: "Bermudan Dollar", country: "bm", symbol: "$" },
  { code: "BND", name: "Brunei Dollar", country: "bn", symbol: "$" },
  { code: "BOB", name: "Bolivian Boliviano", country: "bo", symbol: "Bs." },
  { code: "BRL", name: "Brazilian Real", country: "br", symbol: "R$" },
  { code: "BSD", name: "Bahamian Dollar", country: "bs", symbol: "$" },
  { code: "BTN", name: "Bhutanese Ngultrum", country: "bt", symbol: "Nu." },
  { code: "BWP", name: "Botswanan Pula", country: "bw", symbol: "P" },
  { code: "BYN", name: "Belarusian Ruble", country: "by", symbol: "Br" },
  { code: "BZD", name: "Belize Dollar", country: "bz", symbol: "$" },
  { code: "CAD", name: "Canadian Dollar", country: "ca", symbol: "$" },
  { code: "CDF", name: "Congolese Franc", country: "cd", symbol: "Fr" },
  { code: "CHF", name: "Swiss Franc", country: "ch", symbol: "Fr" },
  { code: "CLP", name: "Chilean Peso", country: "cl", symbol: "$" },
  { code: "CNY", name: "Chinese Yuan", country: "cn", symbol: "¥" },
  { code: "COP", name: "Colombian Peso", country: "co", symbol: "$" },
  { code: "CRC", name: "Costa Rican Colón", country: "cr", symbol: "₡" },
  { code: "CUP", name: "Cuban Peso", country: "cu", symbol: "$" },
  { code: "CVE", name: "Cape Verdean Escudo", country: "cv", symbol: "$" },
  { code: "CZK", name: "Czech Koruna", country: "cz", symbol: "Kč" },
  { code: "DJF", name: "Djiboutian Franc", country: "dj", symbol: "Fr" },
  { code: "DKK", name: "Danish Krone", country: "dk", symbol: "kr" },
  { code: "DOP", name: "Dominican Peso", country: "do", symbol: "$" },
  { code: "DZD", name: "Algerian Dinar", country: "dz", symbol: "د.ج" },
  { code: "EGP", name: "Egyptian Pound", country: "eg", symbol: "£" },
  { code: "ERN", name: "Eritrean Nakfa", country: "er", symbol: "Nfk" },
  { code: "ETB", name: "Ethiopian Birr", country: "et", symbol: "Br" },
  { code: "EUR", name: "Euro", country: "eu", symbol: "€" },
  { code: "FJD", name: "Fijian Dollar", country: "fj", symbol: "$" },
  { code: "FKP", name: "Falkland Islands Pound", country: "fk", symbol: "£" },
  { code: "FOK", name: "Faroese Króna", country: "fo", symbol: "kr" },
  { code: "GBP", name: "British Pound", country: "gb", symbol: "£" },
  { code: "GEL", name: "Georgian Lari", country: "ge", symbol: "₾" },
  { code: "GGP", name: "Guernsey Pound", country: "gg", symbol: "£" },
  { code: "GHS", name: "Ghanaian Cedi", country: "gh", symbol: "₵" },
  { code: "GIP", name: "Gibraltar Pound", country: "gi", symbol: "£" },
  { code: "GMD", name: "Gambian Dalasi", country: "gm", symbol: "D" },
  { code: "GNF", name: "Guinean Franc", country: "gn", symbol: "Fr" },
  { code: "GTQ", name: "Guatemalan Quetzal", country: "gt", symbol: "Q" },
  { code: "GYD", name: "Guyanaese Dollar", country: "gy", symbol: "$" },
  { code: "HKD", name: "Hong Kong Dollar", country: "hk", symbol: "$" },
  { code: "HNL", name: "Honduran Lempira", country: "hn", symbol: "L" },
  { code: "HRK", name: "Croatian Kuna", country: "hr", symbol: "kn" },
  { code: "HTG", name: "Haitian Gourde", country: "ht", symbol: "G" },
  { code: "HUF", name: "Hungarian Forint", country: "hu", symbol: "Ft" },
  { code: "IDR", name: "Indonesian Rupiah", country: "id", symbol: "Rp" },
  { code: "ILS", name: "Israeli Shekel", country: "il", symbol: "₪" },
  { code: "IMP", name: "Manx Pound", country: "im", symbol: "£" },
  { code: "INR", name: "Indian Rupee", country: "in", symbol: "₹" },
  { code: "IQD", name: "Iraqi Dinar", country: "iq", symbol: "ع.د" },
  { code: "IRR", name: "Iranian Rial", country: "ir", symbol: "﷼" },
  { code: "ISK", name: "Icelandic Krona", country: "is", symbol: "kr" },
  { code: "JEP", name: "Jersey Pound", country: "je", symbol: "£" },
  { code: "JMD", name: "Jamaican Dollar", country: "jm", symbol: "$" },
  { code: "JOD", name: "Jordanian Dinar", country: "jo", symbol: "د.ا" },
  { code: "JPY", name: "Japanese Yen", country: "jp", symbol: "¥" },
  { code: "KES", name: "Kenyan Shilling", country: "ke", symbol: "Sh" },
  { code: "KGS", name: "Kyrgystani Som", country: "kg", symbol: "с" },
  { code: "KHR", name: "Cambodian Riel", country: "kh", symbol: "៛" },
  { code: "KID", name: "Kiribati Dollar", country: "ki", symbol: "$" },
  { code: "KMF", name: "Comorian Franc", country: "km", symbol: "Fr" },
  { code: "KRW", name: "South Korean Won", country: "kr", symbol: "₩" },
  { code: "KWD", name: "Kuwaiti Dinar", country: "kw", symbol: "د.ك" },
  { code: "KYD", name: "Cayman Islands Dollar", country: "ky", symbol: "$" },
  { code: "KZT", name: "Kazakhstani Tenge", country: "kz", symbol: "₸" },
  { code: "LAK", name: "Laotian Kip", country: "la", symbol: "₭" },
  { code: "LBP", name: "Lebanese Pound", country: "lb", symbol: "ل.ل" },
  { code: "LKR", name: "Sri Lankan Rupee", country: "lk", symbol: "Rs" },
  { code: "LRD", name: "Liberian Dollar", country: "lr", symbol: "$" },
  { code: "LSL", name: "Lesotho Loti", country: "ls", symbol: "L" },
  { code: "LYD", name: "Libyan Dinar", country: "ly", symbol: "ل.د" },
  { code: "MAD", name: "Moroccan Dirham", country: "ma", symbol: "د.م." },
  { code: "MDL", name: "Moldovan Leu", country: "md", symbol: "L" },
  { code: "MGA", name: "Malagasy Ariary", country: "mg", symbol: "Ar" },
  { code: "MKD", name: "Macedonian Denar", country: "mk", symbol: "ден" },
  { code: "MMK", name: "Myanma Kyat", country: "mm", symbol: "K" },
  { code: "MNT", name: "Mongolian Tugrik", country: "mn", symbol: "₮" },
  { code: "MOP", name: "Macanese Pataca", country: "mo", symbol: "P" },
  { code: "MRU", name: "Mauritanian Ouguiya", country: "mr", symbol: "UM" },
  { code: "MUR", name: "Mauritian Rupee", country: "mu", symbol: "₨" },
  { code: "MVR", name: "Maldivian Rufiyaa", country: "mv", symbol: "ރ." },
  { code: "MWK", name: "Malawian Kwacha", country: "mw", symbol: "MK" },
  { code: "MXN", name: "Mexican Peso", country: "mx", symbol: "$" },
  { code: "MYR", name: "Malaysian Ringgit", country: "my", symbol: "RM" },
  { code: "MZN", name: "Mozambican Metical", country: "mz", symbol: "MT" },
  { code: "NAD", name: "Namibian Dollar", country: "na", symbol: "$" },
  { code: "NGN", name: "Nigerian Naira", country: "ng", symbol: "₦" },
  { code: "NIO", name: "Nicaraguan Córdoba", country: "ni", symbol: "C$" },
  { code: "NOK", name: "Norwegian Krone", country: "no", symbol: "kr" },
  { code: "NPR", name: "Nepalese Rupee", country: "np", symbol: "₨" },
  { code: "NZD", name: "New Zealand Dollar", country: "nz", symbol: "$" },
  { code: "OMR", name: "Omani Rial", country: "om", symbol: "ر.ع." },
  { code: "PAB", name: "Panamanian Balboa", country: "pa", symbol: "B/." },
  { code: "PEN", name: "Peruvian Nuevo Sol", country: "pe", symbol: "S/." },
  { code: "PGK", name: "Papua New Guinean Kina", country: "pg", symbol: "K" },
  { code: "PHP", name: "Philippine Peso", country: "ph", symbol: "₱" },
  { code: "PKR", name: "Pakistani Rupee", country: "pk", symbol: "₨" },
  { code: "PLN", name: "Polish Zloty", country: "pl", symbol: "zł" },
  { code: "PYG", name: "Paraguayan Guarani", country: "py", symbol: "₲" },
  { code: "QAR", name: "Qatari Rial", country: "qa", symbol: "ر.ق" },
  { code: "RON", name: "Romanian Leu", country: "ro", symbol: "lei" },
  { code: "RSD", name: "Serbian Dinar", country: "rs", symbol: "дин." },
  { code: "RUB", name: "Russian Ruble", country: "ru", symbol: "₽" },
  { code: "RWF", name: "Rwandan Franc", country: "rw", symbol: "Fr" },
  { code: "SAR", name: "Saudi Riyal", country: "sa", symbol: "ر.س" },
  { code: "SBD", name: "Solomon Islands Dollar", country: "sb", symbol: "$" },
  { code: "SCR", name: "Seychellois Rupee", country: "sc", symbol: "₨" },
  { code: "SDG", name: "Sudanese Pound", country: "sd", symbol: "£" },
  { code: "SEK", name: "Swedish Krona", country: "se", symbol: "kr" },
  { code: "SGD", name: "Singapore Dollar", country: "sg", symbol: "$" },
  { code: "SHP", name: "Saint Helena Pound", country: "sh", symbol: "£" },
  { code: "SLE", name: "Sierra Leonean Leone", country: "sl", symbol: "Le" },
  { code: "SOS", name: "Somali Shilling", country: "so", symbol: "Sh" },
  { code: "SRD", name: "Surinamese Dollar", country: "sr", symbol: "$" },
  { code: "SSP", name: "South Sudanese Pound", country: "ss", symbol: "£" },
  { code: "STN", name: "São Tomé and Príncipe Dobra", country: "st", symbol: "Db" },
  { code: "SYP", name: "Syrian Pound", country: "sy", symbol: "£" },
  { code: "SZL", name: "Swazi Lilangeni", country: "sz", symbol: "L" },
  { code: "THB", name: "Thai Baht", country: "th", symbol: "฿" },
  { code: "TJS", name: "Tajikistani Somoni", country: "tj", symbol: "ЅМ" },
  { code: "TMT", name: "Turkmenistani Manat", country: "tm", symbol: "m" },
  { code: "TND", name: "Tunisian Dinar", country: "tn", symbol: "د.ت" },
  { code: "TOP", name: "Tongan Pa'anga", country: "to", symbol: "T$" },
  { code: "TRY", name: "Turkish Lira", country: "tr", symbol: "₺" },
  { code: "TTD", name: "Trinidad and Tobago Dollar", country: "tt", symbol: "$" },
  { code: "TVD", name: "Tuvaluan Dollar", country: "tv", symbol: "$" },
  { code: "TWD", name: "New Taiwan Dollar", country: "tw", symbol: "$" },
  { code: "TZS", name: "Tanzanian Shilling", country: "tz", symbol: "Sh" },
  { code: "UAH", name: "Ukrainian Hryvnia", country: "ua", symbol: "₴" },
  { code: "UGX", name: "Ugandan Shilling", country: "ug", symbol: "Sh" },
  { code: "USD", name: "US Dollar", country: "us", symbol: "$" },
  { code: "UYU", name: "Uruguayan Peso", country: "uy", symbol: "$" },
  { code: "UZS", name: "Uzbekistan Som", country: "uz", symbol: "so'm" },
  { code: "VES", name: "Venezuelan Bolívar", country: "ve", symbol: "Bs." },
  { code: "VND", name: "Vietnamese Dong", country: "vn", symbol: "₫" },
  { code: "VUV", name: "Vanuatu Vatu", country: "vu", symbol: "Vt" },
  { code: "WST", name: "Samoan Tala", country: "ws", symbol: "T" },
  { code: "XAF", name: "Central African CFA Franc", country: "cm", symbol: "Fr" },
  { code: "XCD", name: "East Caribbean Dollar", country: "lc", symbol: "$" },
  { code: "XOF", name: "West African CFA Franc", country: "sn", symbol: "Fr" },
  { code: "XPF", name: "CFP Franc", country: "pf", symbol: "Fr" },
  { code: "YER", name: "Yemeni Rial", country: "ye", symbol: "﷼" },
  { code: "ZAR", name: "South African Rand", country: "za", symbol: "R" },
  { code: "ZMW", name: "Zambian Kwacha", country: "zm", symbol: "ZK" },
  { code: "ZWL", name: "Zimbabwean Dollar", country: "zw", symbol: "$" },
];

export default function ConverterCard({ darkMode }) {
  // Helper function to get initial state from URL or defaults
  const getInitialState = () => {
    const params = new URLSearchParams(window.location.search);
    const fromCode = params.get('from');
    const toCode = params.get('to');
    const amountParam = params.get('amount');

    const fromCurrency = fromCode 
      ? currencies.find(c => c.code === fromCode.toUpperCase()) || currencies.find(c => c.code === "USD")
      : currencies.find(c => c.code === "USD");
    
    const toCurrency = toCode
      ? currencies.find(c => c.code === toCode.toUpperCase()) || currencies.find(c => c.code === "EUR")
      : currencies.find(c => c.code === "EUR");

    const amount = (amountParam && !isNaN(amountParam)) ? amountParam : "";

    return { fromCurrency, toCurrency, amount };
  };

  const initialState = getInitialState();

  const [fromCurrency, setFromCurrency] = useState(initialState.fromCurrency);
  const [toCurrency, setToCurrency] = useState(initialState.toCurrency);
  const [amount, setAmount] = useState(initialState.amount);

  const [fromOpen, setFromOpen] = useState(false);
  const [toOpen, setToOpen] = useState(false);

  const [rate, setRate] = useState(null);
  const [converted, setConverted] = useState("0.00");
  const [loading, setLoading] = useState(false);

  // Refs for click outside detection
  const fromDropdownRef = useRef(null);
  const toDropdownRef = useRef(null);

  /* ===============================
     UPDATE URL WHEN STATE CHANGES
  =============================== */
  useEffect(() => {
    // Build URL with current state
    const params = new URLSearchParams();
    params.set('from', fromCurrency.code);
    params.set('to', toCurrency.code);
    if (amount) {
      params.set('amount', amount);
    }

    // Update URL without reloading the page
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.replaceState({}, '', newUrl);
  }, [fromCurrency, toCurrency, amount]);

  /* ===============================
     CLICK OUTSIDE TO CLOSE DROPDOWNS
  =============================== */
  useEffect(() => {
    function handleClickOutside(event) {
      if (fromDropdownRef.current && !fromDropdownRef.current.contains(event.target)) {
        setFromOpen(false);
      }
      if (toDropdownRef.current && !toDropdownRef.current.contains(event.target)) {
        setToOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  /* ===============================
     FETCH EXCHANGE RATE using ExchangeRate-API.com (Free version)
  =============================== */
  useEffect(() => {
    async function fetchRate() {
      setLoading(true);
      try {
        // Using the free exchangerate-api.com endpoint
        const res = await fetch(
          `https://open.er-api.com/v6/latest/${fromCurrency.code}`
        );
        const data = await res.json();
        
        if (data.result === "success") {
          const fetchedRate = data.rates[toCurrency.code];
          setRate(fetchedRate);

          // Recalculate conversion with new rate if amount exists
          if (amount && fetchedRate) {
            setConverted((amount * fetchedRate).toFixed(2));
          } else if (!amount) {
            setConverted("0.00");
          }
        }
      } catch (error) {
        console.error("Exchange rate error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchRate();
  }, [fromCurrency, toCurrency]);

  /* ===============================
     RECALCULATE when rate changes
  =============================== */
  useEffect(() => {
    if (rate && amount) {
      setConverted((amount * rate).toFixed(2));
    }
  }, [rate, amount]);

  /* ===============================
     HANDLE INPUT - Real-time conversion
  =============================== */
  const handleAmountChange = (e) => {
    const value = e.target.value;
    setAmount(value);

    if (rate && value) {
      setConverted((value * rate).toFixed(2));
    } else {
      setConverted("0.00");
    }
  };

  /* ===============================
     SWAP
  =============================== */
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    
    // Also swap the amounts for better UX
    if (converted && converted !== "0.00") {
      setAmount(converted);
      setConverted(amount || "0.00");
    }
  };

  return (
    <div
      className={`w-full max-w-md rounded-2xl sm:rounded-3xl px-6 sm:px-10 py-8 sm:py-12 relative backdrop-blur-x2 shadow-xl border ${
        darkMode
          ? "bg-white/10 border-white/25"
          : "bg-white/70 border-black/25"
      }`}
    >
      {/* Soft glow */}
      <div
        className={`absolute inset-0 rounded-2xl sm:rounded-3xl blur-3xl -z-10 ${
          darkMode ? "bg-white/5" : "bg-white/40"
        }`}
      />

      {/* FROM */}
      <div className="mb-10 sm:mb-14 relative" ref={fromDropdownRef}>
        <p className={`text-xs sm:text-sm mb-2 ml-2 ${darkMode ? "text-white" : "text-black"}`}>
          From
        </p>

        <div
          className={`flex items-center justify-between h-14 sm:h-16 rounded-xl px-3 sm:px-4 ${
            darkMode ? "bg-white/15" : "bg-black/10"
          }`}
        >
          <button
            onClick={() => setFromOpen(!fromOpen)}
            className={`flex items-center gap-1.5 sm:gap-2 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <img 
              src={`https://flagcdn.com/w40/${fromCurrency.country}.png`}
              alt={`${fromCurrency.name} flag`}
              className="w-6 h-5 sm:w-8 sm:h-6 object-cover rounded"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="font-medium text-sm sm:text-base">{fromCurrency.code}</span>
            <span className="opacity-70 text-xs">▼</span>
          </button>

          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="0.00"
            className={`bg-transparent text-right outline-none w-24 sm:w-32 text-base sm:text-lg font-medium ${
              darkMode ? "text-white placeholder-white/40" : "text-black placeholder-black/40"
            }`}
          />
        </div>

        {fromOpen && (
          <div
            className={`absolute mt-2 w-full rounded-xl p-2 z-20 border max-h-48 sm:max-h-60 overflow-y-auto ${
              darkMode
                ? "bg-black/30 backdrop-blur-xl border-white/25 text-white"
                : "bg-white shadow-lg border-black/25 text-black"
            }`}
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: darkMode ? 'rgba(255,255,255,0.3) transparent' : 'rgba(0,0,0,0.3) transparent'
            }}
          >
            {currencies.map((currency) => (
              <div
                key={currency.code}
                onClick={() => {
                  setFromCurrency(currency);
                  setFromOpen(false);
                }}
                className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 cursor-pointer rounded-lg transition ${
                  darkMode ? "hover:bg-white/10" : "hover:bg-black/5"
                } ${fromCurrency.code === currency.code ? (darkMode ? "bg-white/15" : "bg-black/10") : ""}`}
              >
                <img 
                  src={`https://flagcdn.com/w40/${currency.country}.png`}
                  alt={`${currency.name} flag`}
                  className="w-6 h-4 sm:w-7 sm:h-5 object-cover rounded flex-shrink-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span className="text-xs sm:text-sm truncate">
                  {currency.code} — {currency.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SWAP */}
      <div className="flex justify-center my-4 sm:my-6">
        <button
          onClick={handleSwap}
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center transition text-lg sm:text-xl ${
            darkMode
              ? "bg-white/20 text-white hover:bg-white/30"
              : "bg-black/10 text-black hover:bg-black/20"
          }`}
        >
          ⇅
        </button>
      </div>

      {/* TO */}
      <div className="mb-10 sm:mb-14 relative" ref={toDropdownRef}>
        <p className={`text-xs sm:text-sm mb-2 ml-2 ${darkMode ? "text-white" : "text-black"}`}>
          To
        </p>

        <div
          className={`flex items-center justify-between h-14 sm:h-16 rounded-xl px-3 sm:px-4 ${
            darkMode ? "bg-white/15" : "bg-black/10"
          }`}
        >
          <button
            onClick={() => setToOpen(!toOpen)}
            className={`flex items-center gap-1.5 sm:gap-2 ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <img 
              src={`https://flagcdn.com/w40/${toCurrency.country}.png`}
              alt={`${toCurrency.name} flag`}
              className="w-6 h-5 sm:w-8 sm:h-6 object-cover rounded"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="font-medium text-sm sm:text-base">{toCurrency.code}</span>
            <span className="opacity-70 text-xs">▼</span>
          </button>

          <div
            className={`text-right w-24 sm:w-32 text-base sm:text-lg font-medium ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            {loading ? (
              <span className="opacity-50">...</span>
            ) : (
              <>
                {toCurrency.symbol}
                {converted}
              </>
            )}
          </div>
        </div>

        {toOpen && (
          <div
            className={`absolute mt-2 w-full rounded-xl p-2 z-20 border max-h-48 sm:max-h-60 overflow-y-auto ${
              darkMode
                ? "bg-black/30 backdrop-blur-xl border-white/25 text-white"
                : "bg-white shadow-lg border-black/25 text-black"
            }`}
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: darkMode ? 'rgba(255,255,255,0.3) transparent' : 'rgba(0,0,0,0.3) transparent'
            }}
          >
            {currencies.map((currency) => (
              <div
                key={currency.code}
                onClick={() => {
                  setToCurrency(currency);
                  setToOpen(false);
                }}
                className={`flex items-center gap-2 sm:gap-3 px-2 sm:px-3 py-2 cursor-pointer rounded-lg transition ${
                  darkMode ? "hover:bg-white/10" : "hover:bg-black/5"
                } ${toCurrency.code === currency.code ? (darkMode ? "bg-white/15" : "bg-black/10") : ""}`}
              >
                <img 
                  src={`https://flagcdn.com/w40/${currency.country}.png`}
                  alt={`${currency.name} flag`}
                  className="w-6 h-4 sm:w-7 sm:h-5 object-cover rounded flex-shrink-0"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
                <span className="text-xs sm:text-sm truncate">
                  {currency.code} — {currency.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RATE */}
      <p
        className={`text-xs text-center mt-4 sm:mt-6 ${
          darkMode ? "text-white/80" : "text-black/80"
        }`}
      >
        {loading ? (
          "Loading rate..."
        ) : rate ? (
          `1 ${fromCurrency.code} = ${rate.toFixed(4)} ${toCurrency.code}`
        ) : (
          "Rate unavailable"
        )}
      </p>
    </div>
  );
}