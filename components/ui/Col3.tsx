"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import data from "@/data/dataApp.json";

const Col3: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = useCallback(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      const { scrollLeft, scrollWidth, clientWidth } = currentRef;
      const scrolledPercentage =
        (scrollLeft / (scrollWidth - clientWidth)) * 50;
      setScrollPercentage(scrolledPercentage);
    }
  }, []);
  useEffect(() => {
    const currentRef = scrollRef.current;
    currentRef?.addEventListener("scroll", handleScroll);
    return () => currentRef?.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="container max-w-[1336px] mx-auto lg:px-4 2xl:px-0">
      <div
        className="overflow-x-auto py-2 flex items-start justify-around scroll-hidden"
        ref={scrollRef}
      >
        {data.col3.map((col3) => (
          <Link
            key={col3.label}
            href={col3.path}
            className="flex flex-col gap-2 mx-4 w-14"
          >
            <div  className="w-14 h-14">
            <Image src={col3.image} alt={col3.label} width={52} height={52}/>

            </div>
            <span className="sm:text-xs/6 text-center text-[10px] text-neutral-600 line-clamp-2 leading-loose">
              {col3.label}
            </span>
          </Link>
        ))}
        <div className="flex flex-col items-center text-xs text-neutral-600 gap-2 mx-4">
          <div className="bg-neutral-200 h-[52px] w-[52px] rounded-full flex justify-center items-center">
            <Image
              alt="بیشتر"
              src="/images/col3/3dot.svg"
              width={32}
              height={32}
            />
          </div>
          <span>بیشتر</span>
        </div>
      </div>
      <div className="lg:hidden mx-auto w-5 h-1 bg-neutral-200 rounded-3xl relative">
        <div
          className="w-1/2 h-full rounded-3xl bg-neutral-700 absolute"
          style={{ right: `${0 - scrollPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default Col3;
