import React from "react";
import Image from "next/image";
import data from "@/data/dataApp.json";
import Link from "next/link";

const Col12 = () => {
  return (
    <div className="container max-w-[1336px] mx-auto lg:px-4 2xl:px-0">
      <div className=" flex flex-col justify-center items-center lg:border border-solid border-neutral-200 rounded-2xl py-4 px-2 gap-5">
        <div className="flex items-center gap-2">
          <Image
            src="icons/off.svg"
            alt="داغ ترین چند ساعت گذشته"
            width={24}
            height={24}
            className="filter-red-500"
          />
          <p className="text-neutral-900 text-xl/loose">
            منتخب محصولات تخفیف و حراج
          </p>
        </div>
        <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-1">
          {data.col12.map((col12) => (
            <Link
              key={col12.label}
              href={col12.path}
              className="px-2 py-3 gap-4 flex flex-col border rounded-lg"
            >
              <div className=" flex mx-6">
                <Image
                  src={col12.image}
                  width={150}
                  height={150}
                  alt={col12.label}
                />
              </div>

              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xs text-white rounded-2xl px-2 py-0.5 bg-blue-700">
                      {col12.off}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-base/loose text-neutral-700">
                      {col12.newPrice}
                    </span>
                    <div>
                      <Image
                        src="/icons/toman.svg"
                        width={16}
                        height={16}
                        alt="تومان"
                      />
                    </div>
                  </div>
                </div>
                <span className="text-xs/loose block text-left text-neutral-400 line-through pl-5">
                  {col12.oldPrice}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Col12;
