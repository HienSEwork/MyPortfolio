import { useEffect, useState } from "react";

const getPreferredTheme = () => {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const initial = getPreferredTheme();
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    window.localStorage.setItem("theme", next);
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
      className="fixed right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/70 text-ink shadow-[0_10px_30px_rgba(30,20,60,0.18)] backdrop-blur transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-black/40 dark:text-white"
    >
      {theme === "dark" ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M12 4.25a.75.75 0 0 1 .75.75V7a.75.75 0 0 1-1.5 0V5a.75.75 0 0 1 .75-.75ZM6.72 6.72a.75.75 0 0 1 1.06 0l1.42 1.42a.75.75 0 1 1-1.06 1.06L6.72 7.78a.75.75 0 0 1 0-1.06Zm10.08 0a.75.75 0 0 1 1.06 1.06l-1.42 1.42a.75.75 0 0 1-1.06-1.06l1.42-1.42ZM12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7ZM4.25 12a.75.75 0 0 1 .75-.75H7a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Zm12 0a.75.75 0 0 1 .75-.75H19a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75ZM6.72 17.28a.75.75 0 0 1 1.06 0l1.42 1.42a.75.75 0 1 1-1.06 1.06l-1.42-1.42a.75.75 0 0 1 0-1.06Zm9.44 0a.75.75 0 0 1 1.06 1.06l-1.42 1.42a.75.75 0 1 1-1.06-1.06l1.42-1.42ZM12 17a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-1.5 0v-1.25A.75.75 0 0 1 12 17Z" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M21 14.25A8.75 8.75 0 0 1 9.75 3a.75.75 0 0 0-.88.88A7.25 7.25 0 1 0 20.12 15.13a.75.75 0 0 0 .88-.88Z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
