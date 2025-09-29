"use client";

import Navigation from "./Navigation/Navigation";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import { Theme } from "@/types/types";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";

const Header = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="px-8 max-w-screen-2xl mx-auto relative z-[1]">
      <div
        className={cn(
          "flex flex-wrap gap-8 items-center rounded-b-xl py-2 px-8",
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
