"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import data from "@/data/dataApp.json";
import Link from "next/link";
import Image from "next/image";

const Col4: React.FC = () => {
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
    <div className="container max-w-[1336px] mx-auto lg:px-4 2xl:px-0">
      <div className="relative items-center flex">
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
          className={`absolute lg:right-36 right-2 bg-white rounded-full p-2 border border-neutral-300 cursor-pointer transition  duration-500 ${
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
        <div className="lg:rounded-2xl bg-blue-900 pb-5 lg:pt-5 flex-col flex overflow-hidden">
          <Link
            href="/"
            className="lg:hidden flex justify-between  px-5 pt-5 pb-3"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/icons/Amazing.svg"
                width={24}
                height={24}
                alt="شگفت انگیز"
              />
              <Image
                src="/icons/amazing2.svg"
                width={108}
                height={20}
                alt="شگفت انگیز"
              />
              <div className="flex gap-1">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex gap-1">
                    <div className="w-6 h-6 bg-white rounded"></div>
                    {index < 2 && (
                      <div className="text-white font-extrabold">:</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex text-white text-xs whitespace-nowrap items-center">
              مشاهده همه
              <Image
                src="/icons/less-than.svg"
                width={16}
                height={16}
                alt="icon"
              />
            </div>
          </Link>
          <div className="items-center flex">
            <Link
              href="/"
              className="gap-2 lg:flex hidden flex-col items-center px-4 rounded-xl"
            >
              <Image
                src="/icons/Amazings.svg"
                width={88}
                height={88}
                alt="شگفت انگیز"
              />
              <div className="flex gap-1">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="flex gap-1">
                    <div className="w-6 h-6 bg-white rounded"></div>
                    {index < 2 && (
                      <div className="text-white font-extrabold">:</div>
                    )}
                  </div>
                ))}
              </div>
              <Image
                src="/icons/Amazing.svg"
                width={80}
                height={80}
                alt="شگفت انگیز"
                className="block"
              />
              <div className="flex pt-3 text-white text-xs whitespace-nowrap items-center justify-center">
                مشاهده همه
                <Image
                  src="/icons/less-than.svg"
                  width={16}
                  height={16}
                  alt="icon"
                />
              </div>
            </Link>
            <div
              ref={scrollRef}
              className="items-center flex gap-4 px-4 overflow-x-auto scroll-smooth  scroll-hidden"
            >
              {data.col4.map((col4) => (
                <Link
                  key={col4.label}
                  href={col4.path}
                  className="gap-2 flex flex-col items-center bg-white py-2 px-4 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <Image
                    src={col4.image}
                    width={114}
                    height={114}
                    alt={col4.label}
                    className="lg:w-[132px] lg:h-[132px] object-contain"
                  />
                  <h3 className="h-10 text-xs text-neutral-500 line-clamp-2 leading-relaxed">
                    {col4.label}
                  </h3>
                  <div className="flex gap-10">
                    <span className="items-center justify-center text-xs h-5 w-[34px] flex px-1 bg-blue-700 text-white rounded-xl">
                      {col4.off}٪
                    </span>
                    <div className="flex gap-1 justify-center items-center">
                      <span className="text-sm text-neutral-700">
                        {col4.price}
                      </span>
                      <Image
                        src="/icons/toman.svg"
                        width={16}
                        height={16}
                        alt="تومان"
                      />
                    </div>
                  </div>
                  <span className="text-xs line-through text-neutral-400 mr-16">
                    {col4.oldPrice}
                  </span>
                </Link>
              ))}

              <div className="bg-white px-12 py-20 lg:px-12 lg:py-20 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Link href="/" className="gap-4 flex flex-col items-center">
                  <div className="border-2 p-2 border-sky-400 rounded-full">
                    <Image
                      src="/icons/arrow-left-blue.svg"
                      width={32}
                      height={32}
                      alt="icon"
                    />
                  </div>
                  <div className="whitespace-nowrap text-neutral-500 text-sm">
                    مشاهده همه
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Col4;
