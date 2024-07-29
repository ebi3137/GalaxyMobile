"use client";

import { useState, useEffect } from "react";
import LogoDesktop from "./desktop/top-header/LogoDesktop";
import SearchDesktop from "./desktop/top-header/SearchDesktop";
import SearchMobile from "./mobile/SearchMobile";
import AuthDesktop from "./desktop/top-header/AuthDesktop";
import CartDesktop from "./desktop/top-header/CartDesktop";
import Banner from "./Banner";
import AppMobile from "./mobile/AppMobile";
import Location from "./desktop/bottom-header/Location";
import NavDesktop from "./desktop/bottom-header/NavDesktop";

const Header = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Downscroll
        setIsScrolledDown(true);
      } else {
        // Upscroll
        setIsScrolledDown(false);
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed shadow flex flex-col bg-white z-10 h-[25%] lg:translate-y-0 transition-transform duration-500 ${
        isScrolledDown ? "-translate-y-[57%]" : "translate-y-0"
      }`}
    >
      <Banner />
      <AppMobile />
      <SearchMobile />
      <div id="headerDesktop" className="w-full flex-col hidden  lg:flex">
        <div
          id="h_top"
          className="h-[68px] px-4 flex w-full justify-between bg-white z-10"
        >
          <div id="h_t_right" className="flex gap-5 items-center">
            <LogoDesktop />
            <SearchDesktop />
          </div>
          <div id="h_t_left" className="flex items-center">
            <AuthDesktop />
            <span className="bg-neutral-200 mx-3 w-px h-6"></span>
            <CartDesktop />
          </div>
        </div>
        <nav
          id="h_bottom"
          className={`px-4 bg-white flex items-center absolute top-[128px] shadow left-0 w-full justify-between mr-1 transition-transform duration-500 ${
            isScrolledDown ? "-translate-y-full" : "translate-y-0"
          }`}
        >
          <div className="flex gap-3 items-center">
            <NavDesktop />
          </div>
          <Location />
        </nav>
      </div>
    </header>
  );
};

export default Header;
