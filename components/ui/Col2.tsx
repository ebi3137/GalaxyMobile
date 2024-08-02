"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import data from "@/data/dataApp.json";
import Link from "next/link";
import Image from "next/image";

const Col2: React.FC = () => {
  const [showArrow, setShowArrow] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleScroll = useCallback(
    (direction: number) => {
      const currentRef = scrollRef.current;
      if (currentRef && !isScrolling) {
        const { clientWidth, scrollLeft, scrollWidth } = currentRef;
        let newScrollLeft = scrollLeft + direction * clientWidth;
        if (newScrollLeft <= 1 - scrollWidth) {
          newScrollLeft = 0;
        } else if (newScrollLeft > 0) {
          newScrollLeft = clientWidth - scrollWidth;
        }
        setIsScrolling(true);
        currentRef.scrollTo({
          left: newScrollLeft,
          behavior: "smooth",
        });

        const newSlide = Math.round(-newScrollLeft / clientWidth) + 1;
        setCurrentSlide(newSlide);

        setTimeout(() => {
          setIsScrolling(false);
        }, 700);
      }
    },
    [isScrolling]
  );

  const handleManualScroll = useCallback(() => {
    const currentRef = scrollRef.current;
    if (currentRef && !isScrolling) {
      setIsScrolling(true);
      const { clientWidth, scrollLeft } = currentRef;
      const newSlide = Math.round(-scrollLeft / clientWidth) + 1;
      setCurrentSlide(newSlide);
      setTimeout(() => {
        setIsScrolling(false);
      }, 100);
    }
  }, [isScrolling]);

  useEffect(() => {
    const currentRef = scrollRef.current;
    const interval = setInterval(() => {
      handleScroll(-1);
    }, 2000);
    if (currentRef) {
      currentRef.addEventListener("scroll", handleManualScroll);
    }
    return () => {
      clearInterval(interval);
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleManualScroll);
      }
    };
  }, [handleScroll, handleManualScroll]);

  return (
    <div
      onMouseEnter={() => setShowArrow(true)}
      onMouseLeave={() => setShowArrow(false)}
      className="relative w-full"
    >
      <div
        className={`absolute select-none bottom-12 right-12 gap-2 flex transition-opacity duration-200 ${
          showArrow ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => handleScroll(1)}
          aria-label="Next slide"
          className="bg-white rounded-full p-2 border border-neutral-300 cursor-pointer"
        >
          <Image
            src="/icons/greater-than.svg"
            height={24}
            width={24}
            alt="Arrow Icon"
            className="filter-neutral-950"
          />
        </button>
        <button
          onClick={() => handleScroll(-1)}
          aria-label="Previous slide"
          className="bg-white rounded-full p-2 border border-neutral-300 cursor-pointer"
        >
          <Image
            src="/icons/less-than.svg"
            height={24}
            width={24}
            alt="Arrow Icon"
            className="filter-neutral-950"
          />
        </button>
      </div>
      <div
        ref={scrollRef}
        className="scroll-hidden flex w-full overflow-x-auto snap-x snap-mandatory"
      >
        {data.col2.map((col2, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-center snap-always w-full"
          >
            <Link href={col2.path}>
              <Image
                title={col2.label}
                src={col2.image}
                alt={col2.label}
                width={2880}
                height={600}
                priority
                unoptimized
                className="xl:h-96 lg:h-72 h-64 object-cover "
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="absolute left-0 w-full text-center bottom-4">
        {data.col2.map((_, index) => (
          <span
            onClick={() => handleScroll(index + 1 - currentSlide)}
            key={index}
            className={`w-1 h-1 rounded-full m-1 cursor-pointer duration-300 ease-linear inline-block ${
              currentSlide === index + 1
                ? "bg-white w-4 h-1.5"
                : "bg-neutral-900 opacity-40 "
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Col2;
