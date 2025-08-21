"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // потрібно для SSR, щоб уникнути "глюків"
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-xl bg-gray-200 p-2 text-gray-800 transition dark:bg-gray-700 dark:text-gray-100"
    >
      {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeSwitcher;
