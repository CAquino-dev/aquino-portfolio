import { Sun, Moon } from "phosphor-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative p-2.5 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 hover:from-green-100 hover:to-green-200 dark:hover:from-green-900/50 dark:hover:to-green-800/50 hover:text-green-600 dark:hover:text-green-400 shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
      aria-label="Toggle dark mode"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {isDark ? (
        <Sun size={20} className="relative z-10 transition-all duration-500 group-hover:rotate-90" />
      ) : (
        <Moon size={20} className="relative z-10 transition-all duration-500 group-hover:-rotate-90" />
      )}
    </button>
  );
}