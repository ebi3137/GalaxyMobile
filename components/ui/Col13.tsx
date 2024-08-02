"use client";

import Image from "next/image";
import data from "@/data/dataApp.json";
import Link from "next/link";
import React, { useCallback, useEffect, useRef, useState } from "react";

const Col13: React.FC = () => {
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
  }, []);
  return (
    <div className=" container max-w-[1336px] mx-auto lg:px-4 2xl:px-0 ">
      <div className=" flex flex-col justify-center items-center lg:border border-solid border-neutral-200 rounded-2xl pt-6 pb-2 gap-5">
        <div className=" flex items-center gap-2">
          <Image
            src="icons/topBrands.svg"
            alt="داغ ترین چند ساعت گذشته"
            width={24}
            height={24}
          />
          <p className="text-neutral-900 text-xl/loose">محبوب‌ترین برندها</p>
        </div>

        <div className="relative w-full flex items-center">
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
            ref={scrollRef}
            className="flex gap-5 items-center overflow-x-auto w-full scroll-hidden pb-4 px-4"
          >
            {data.col13.map((col13) => (
              <Link
                key={col13.label}
                href={col13.path}
                className=" flex items-center justify-center shrink-0"
              >
                <Image
                  src={col13.image}
                  width={80}
                  height={80}
                  alt={col13.label}
                  className=" border border-solid border-neutral-300 shadow-md  lg:w-32 lg:h-20  w-24 h-16 rounded-full object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Col13;
