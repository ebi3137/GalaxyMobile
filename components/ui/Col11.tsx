import Link from "next/link";
import React from "react";
import Image from "next/image";
import data from "@/data/dataApp.json";

const Col11 = () => {
  return (
    <div className="container max-w-[1336px] mx-auto lg:px-4 2xl:px-0">
      <div className="px-10 py-5 rounded-2xl flex flex-col xl:flex-row justify-between gap-5 bg-neutral-200 items-center mx-5 lg:mx-0 bg-[url('/images/col11/freshPattern.svg')] bg-no-repeat" >
          <Link
            href="/"
            className="flex items-center gap-3 sm:gap-0 lg:gap-5 lg:flex-row flex-col"
          >
            <div className="flex items-center sm:gap-5 sm:flex-row flex-col">
              <Image
                src="/images/col11/1.webp"
                alt="fresh"
                width={66}
                height={64}
              />
              <Image
                src="/images/col11/2.svg"
                alt="fresh"
                width={250}
                height={28}
              />
            </div>
            <div className="bg-green-700 px-3 rounded-full">
              <p className="text-white text-sm/loose">تا ۶۵٪ تخفیف</p>
            </div>
          </Link>
        <div className="flex items-center gap-5 lg:flex-row flex-col">
          <div className="md:flex md:flex-row gap-5 grid grid-rows-2 grid-flow-col">
            {data.col11.map((col11) => (
              <Link
                key={col11.label}
                href={col11.path}
                className="relative bg-white p-2 rounded-full"
              >
                <Image
                  src={col11.image}
                  alt={col11.label}
                  width={58}
                  height={58}
                  className=" rounded-full"
                />
                <div className="absolute bg-red-600 rounded-full px-2 flex py-0.5 bottom-0 right-0">
                  <span className="text-white text-xs">{col11.off}</span>
                </div>
              </Link>
            ))}
          </div>
            <Link
              href="/"
              className="bg-white px-5 py-3 rounded-full flex gap-2 items-center"
            >
              <span className="text-xs/loose text-green-700">
                بیش از ۴۰ کالا
              </span>
              <Image
                className="filter-green-700"
                src="/icons/arrowLeft.svg"
                width={24}
                height={24}
                alt="Arrow Left"
              />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Col11;
