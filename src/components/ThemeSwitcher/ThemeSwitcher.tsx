"use client";

import { Theme } from "@/types";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)}
      className="cursor-pointer rounded-xl bg-gray-200 p-2 text-gray-800 transition dark:bg-gray-700 dark:text-gray-100"
    >
      {theme === Theme.Dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeSwitcher;
