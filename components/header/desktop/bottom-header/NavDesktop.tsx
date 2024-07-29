"use client";

import React, { useEffect, useRef, useState } from "react";
import data from "@/data/dataApp.json";
import Link from "next/link";
import Image from "next/image";
import CategoryNav from "./CategoryNav";

const NavDesktop = () => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const handleMouseEnter = () => setSubmenuOpen(true);
  const handleMouseLeave = () => setSubmenuOpen(false);

  const [underlineStyle, setUnderlineStyle] = useState({
    width: 0,
    left: 0,
    transitionDuration: "0.5s",
    bottom: 0,
  });

  const navWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseEnter = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const targetRect = target.getBoundingClientRect();
      const wrapperRect = navWrapperRef.current?.getBoundingClientRect();

      if (wrapperRect) {
        setUnderlineStyle({
          width: targetRect.width,
          left: targetRect.left - wrapperRect.left,
          transitionDuration: "0.2s",
          bottom: 0,
        });
      }
    };

    const handleMouseLeave = () => {
      setUnderlineStyle({
        width: 0,
        left: underlineStyle.left,
        transitionDuration: "0.2s",
        bottom: underlineStyle.bottom,
      });
    };

    const navWrapper = navWrapperRef.current;
    if (navWrapper) {
      const navItems = navWrapper.querySelectorAll(".nav-item");
      navItems.forEach((item) => {
        item.addEventListener("mouseenter", handleMouseEnter);
        item.addEventListener("mouseleave", handleMouseLeave);
      });

      return () => {
        navItems.forEach((item) => {
          item.removeEventListener("mouseenter", handleMouseEnter);
          item.removeEventListener("mouseleave", handleMouseLeave);
        });
      };
    }
  }, [underlineStyle.left, underlineStyle.bottom]);

  return (
    <div className="relative nav-wrapper flex items-center " ref={navWrapperRef}>
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="nav-item h-10 flex items-center pl-3">
        <div className="cursor-pointer flex gap-1 items-center text-sm">
          <Image
            src="/icons/categories.svg"
            width={20}
            height={20}
            alt="دسته‌بندی کالاها"
          />
          <p>دسته‌بندی کالاها</p>
        </div>
        {submenuOpen && (<><CategoryNav/><div className="fixed left-0 right-0 top-[168px] bottom-0 bg-neutral-700 opacity-60 pointer-events-none z-40" /> </>)}
      </div>
      <div className="flex items-center before:w-[.075rem] before:h-4 before:bg-neutral-300 after:w-[.075rem] after:h-4 after:bg-neutral-300 px-2 text-neutral-500">
        {data.navDesktop.map((tab) => (
          <Link
            key={tab.label}
            href={tab.path}
            className={`flex text-xs items-center mx-3 gap-1 nav-item h-10 ${tab['data-id'] === "5" ? "hidden xl:flex" : ""}`}
          >
            {tab.icon && (
              <Image src={tab.icon} width={18} height={18} alt={tab.label}/>
            )}
            <span>{tab.label}</span>
          </Link>
        ))}
      </div>
      <div className="flex gap-6 text-xs items-center text-neutral-500">
        <Link href="/faq" className="flex nav-item">
          سوالی دارید؟
        </Link>
        <Link href="/seller-introduction" className="nav-item">
          در گلکسی بفروشید!
        </Link>
      </div>
      <div
        className="absolute  bg-red-500 h-[2px] rounded-md digiTransition pointer-events-none"
        style={{
          width: underlineStyle.width,
          left: underlineStyle.left,
          transitionDuration: underlineStyle.transitionDuration,
          bottom: underlineStyle.bottom,
        }}
      />
    </div>
  );
};

export default NavDesktop;
