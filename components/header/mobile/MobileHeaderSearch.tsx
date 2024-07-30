"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

const MobileHeaderSearch: React.FC = () => {
  const searchbarRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [initialTop, setInitialTop] = useState(0);

  useEffect(() => {
    if (searchbarRef.current) {
      setInitialTop(searchbarRef.current.offsetTop);
    }
    const handleScroll = () => {
      if (searchbarRef.current) {
        setIsSticky(window.scrollY > initialTop);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [initialTop]);

  return (
    <>
      <div
        ref={searchbarRef}
        className={`lg:hidden bg-white z-10 shadow border-b border-neutral-300 w-full p-2 transition-all  ${
          isSticky ? "fixed top-0 shadow border-b border-neutral-300" : ""
        }`}
      >
        <div className="flex items-center bg-neutral-100 rounded-lg px-2 py-2">
          <Image
            width={24}
            height={24}
            alt="Search Icon"
            src="/icons/search.svg"
          />
          <div className="flex items-center text-neutral-400 text-xs leading-7 whitespace-nowrap px-2 grow gap-2">
            جستجو در
            <Image
              className="w-[90px] h-[24px] object-contain"
              src="/logo-blue.png"
              alt="گلکسی"
              width={1000}
              height={199}
            />
          </div>
        </div>
      </div>
      {isSticky && (
        <div style={{ height: searchbarRef.current?.offsetHeight }} />
      )}
    </>
  );
};

export default MobileHeaderSearch;
