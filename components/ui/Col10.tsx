"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import data from "@/data/dataApp.json";
import Link from "next/link";

const Col10 = () => {
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
    <div className="container max-w-[1336px] mx-auto lg:px-4 2xl:px-0">
      <div className="relative flex flex-col justify-center items-center lg:border border-solid border-neutral-200 rounded-2xl py-4 gap-5">
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
        <div className="flex items-center gap-2">
          <Image
            src="icons/bestSeller.svg"
            alt="داغ ترین چند ساعت گذشته"
            width={24}
            height={24}
            className="filter-orange-400"
          />
          <p className="text-neutral-900 text-xl/loose">
            داغ ترین چند ساعت گذشته
          </p>
        </div>
        <div
          ref={scrollRef}
          className="grid grid-rows-3 grid-flow-col gap-4 overflow-x-auto scroll-hidden w-full px-5"
        >
          {data.col10.map((col10) => (
            <Link
              key={col10.label}
              href={col10.path}
              className="flex items-center gap-3 min-w-80"
            >
              <Image
                src={col10.image}
                alt={col10.label}
                width={86}
                height={86}
              />
              <span className="text-cyan-500 text-2xl">{col10.count}</span>
              <div className=" relative -z-10 flex flex-col">
                <p className=" text-xs/loose text-neutral-500 line-clamp-2 ">
                  {col10.label}
                </p>
                <span className="w-full h-px bg-neutral-200 absolute -inset-y-7 "></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Col10;
