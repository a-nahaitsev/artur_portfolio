"use client";

import { Theme } from "@/types/types";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import { useEffect, useState } from "react";
import Navigation from "./Navigation/Navigation";

const Header = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="relative z-[1] mx-auto max-w-screen-2xl px-8">
      <div
        className={cn(
          "flex flex-wrap items-center gap-20 rounded-b-xl px-8 py-2",
          theme === Theme.Dark ? "bg-black/50" : "bg-gray-100",
        )}
      >
        <Navigation />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
