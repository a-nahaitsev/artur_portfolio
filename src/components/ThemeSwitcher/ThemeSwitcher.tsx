"use client";

import { Theme } from "@/types/types";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)}
      className="cursor-pointer rounded-xl bg-gray-200 px-2 py-1 text-gray-800 transition dark:bg-gray-700 dark:text-gray-100"
    >
      {theme === Theme.Dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeSwitcher;
