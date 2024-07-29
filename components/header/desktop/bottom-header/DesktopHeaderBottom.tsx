"use client";

import { useState, useEffect, useRef } from "react";
import React from "react";
import NavDesktop from "./NavDesktop";
import Location from "./Location";

const DesktopHeaderBottom = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollHeight, setLastScrollHeight] = useState(150);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollHeight = window.scrollY;
      if (navRef.current) {
        setIsScrolled(currentScrollHeight > lastScrollHeight);
      }
      setLastScrollHeight(currentScrollHeight <= 150 ? 150 : currentScrollHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollHeight]);

  return (
    <nav
      ref={navRef}
      className={`hidden lg:flex px-4 bg-white items-center shadow border-b border-neutral-300 w-full justify-between transition-transform duration-500 ${
        isScrolled ? "-translate-y-full " : "translate-y-0"
      }`}
    >
      <NavDesktop />
      <Location />
    </nav>
  );
};

export default DesktopHeaderBottom;
