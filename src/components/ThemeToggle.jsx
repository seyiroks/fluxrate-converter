export default function ThemeToggle() {
  return (
    <button
      className="
        w-10 h-10
        rounded-xl
        bg-white/20
        border border-white/30
        backdrop-blur-md
        flex items-center justify-center
        hover:bg-white/30
        transition
      "
      title="Toggle theme"
    >
      ☀️
    </button>
  );
}
