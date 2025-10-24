"use client";

import { cn } from "@/utils/cn";
import { Content } from "@prismicio/client";
import Image from "next/image";
import React, { useState } from "react";
import {
  HiBars3,
  HiMagnifyingGlass,
  HiShoppingBag,
  HiUser,
  HiXMark,
} from "react-icons/hi2";
import TransitionLink from "./TransitionLink";

interface NavIconsProps {
  className?: string;
  tabIndex?: number;
}

const NavIcons = ({ className, tabIndex }: NavIconsProps) => {
  return (
    <div className={cn("flex items-center gap-8", className)}>
      <a
        href="#"
        className="text-white"
        aria-label="Search"
        tabIndex={tabIndex}
      >
        <HiMagnifyingGlass size={24} />
      </a>
      <a
        href="#"
        className="text-white"
        aria-label="Account"
        tabIndex={tabIndex}
      >
        <HiUser size={24} />
      </a>
      <a href="#" className="text-white" aria-label="Cart" tabIndex={tabIndex}>
        <HiShoppingBag size={24} />
      </a>
    </div>
  );
};

type NavBarProps = {
  settings: Content.SettingsDocument;
};

const NavBar = ({ settings }: NavBarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <header>
      <div className="luxury-navbar fixed top-0 left-0 z-50 w-full bg-black text-white">
        <div className="flex items-center justify-between p-2 md:p-4">
          <button
            onClick={toggleDrawer}
            aria-label="Menu"
            className="cursor-pointer p-2 text-white transition-colors duration-300 hover:bg-white/20"
          >
            <HiBars3 size={24} />
          </button>
          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <TransitionLink href="/luxury-homepage">
              <Image
                src="/media/luxury/logo.svg"
                alt="royale paris"
                width={180}
                height={30}
                className="w-32 md:w-44"
              />
            </TransitionLink>
          </div>
          <div className="flex">
            <NavIcons className="hidden md:flex" />
          </div>
        </div>
      </div>

      <div
        className={cn(
          "nav-drawer-blur fixed inset-0 z-40 bg-black/40 opacity-0 transition-all duration-500",
          isDrawerOpen
            ? "pointer-events-auto opacity-100 backdrop-blur-xs"
            : "pointer-events-none backdrop-blur-none",
        )}
        onClick={toggleDrawer}
        aria-hidden="true"
      />

      <div
        className={cn(
          "nav-drawer fixed top-0 left-0 z-50 h-full w-72 bg-neutral-900 p-6 transition-transform duration-500",
          isDrawerOpen ? "translate-x-0" : "-translate-x-full",
        )}
        role="dialog"
        aria-modal={isDrawerOpen}
        aria-label="Main Navigation"
      >
        <div className="mb-6 flex justify-end">
          <button
            onClick={toggleDrawer}
            aria-label="Close Menu"
            tabIndex={isDrawerOpen ? 0 : -1}
            className="p-2 text-white transition-colors duration-300 hover:bg-white/10"
          >
            <HiXMark size={24} />
          </button>
        </div>

        <nav className="space-y-4" aria-label="Main Navigation">
          {settings.data.navigation_link.map((link) => (
            <TransitionLink
              key={link.key}
              field={link}
              onClick={() => setIsDrawerOpen(false)}
              className="block border-b border-white/10 py-2 text-xl font-semibold tracking-wide text-white uppercase hover:text-gray-300"
              tabIndex={isDrawerOpen ? 0 : -1}
            />
          ))}

          <div className="pt-4 md:hidden">
            <NavIcons
              tabIndex={isDrawerOpen ? 0 : -1}
              className="justify-around"
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
