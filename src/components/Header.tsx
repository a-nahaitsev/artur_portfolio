"use client";

import Navigation from "./Navigation/Navigation";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import { Theme } from "@/types/types";
import { cn } from "@/utils/cn";
import { useTheme } from "next-themes";
import React from "react";

const Header = () => {
  const { theme } = useTheme();

  return (
    <div
      className={cn(
        "px-8 max-w-screen-2xl mx-auto flex flex-wrap gap-8 items-center relative z-10",
        theme === Theme.Dark ? "bg-black/50" : "bg-gray-100",
      )}
    >
      <Navigation />
      <ThemeSwitcher />
    </div>
  );
};

export default Header;
