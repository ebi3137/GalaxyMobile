"use client";

import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import data from "@/data/dataApp.json";

const Col1: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState({
    hidePrev: true,
    hideNext: false,
  });

  const handleClick = useCallback((direction: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * 108,
        behavior: "smooth",
      });
    }
  }, []);
  const handleScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setScrollPosition({
        hidePrev: scrollLeft >= 0,
        hideNext: scrollLeft <= 1 + clientWidth - scrollWidth,
      });
    }
  }, []);

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => {
        currentRef.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return (
    <div className="relative container max-w-[1336px] mx-auto lg:px-4 2xl:px-0 pt-4 items-center flex">
      <button
        className={`absolute left-2 bg-white rounded-full p-2 border border-neutral-300 cursor-pointer transition duration-500 ${
          scrollPosition.hideNext ? "hidden" : ""
        }`}
        onClick={() => handleClick(-1)}
      >
        <Image
          src="/icons/less-than.svg"
          height={24}
          width={24}
          alt="Arrow Icon"
          className="filter-neutral-500 filter-neutral-950-hover"
        />
      </button>
      <button
        className={`absolute right-2 bg-white rounded-full p-2 border border-neutral-300 cursor-pointer transition  duration-500 ${
          scrollPosition.hidePrev ? "hidden" : ""
        }`}
        onClick={() => handleClick(1)}
      >
        <Image
          src="/icons/greater-than.svg"
          height={24}
          width={24}
          alt="Arrow Icon"
          className="filter-neutral-500 filter-neutral-950-hover"
        />
      </button>
      <div
        className="flex overflow-x-auto scroll-hidden scroll-smooth "
        ref={scrollRef}
        onScroll={handleScroll}
      >
        {data.col1.map((col1) => (
          <Link
            key={col1.label}
            href={col1.path}
            className="mx-3 flex flex-col gap-3"
          >
            <div className="bg-gradient-to-r from-pink-800 to-purple-800 p-0.5 rounded-full">
              <div className="w-20 h-20 bg-white items-center flex justify-center rounded-full">
                <Image
                  src={col1.image}
                  alt={col1.label}
                  width={74}
                  height={74}
                  className="rounded-full"
                />
              </div>
            </div>
            <span className="sm:text-xs/6 text-center text-[10px] text-neutral-600 line-clamp-2 leading-loose">
              {col1.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Col1;
