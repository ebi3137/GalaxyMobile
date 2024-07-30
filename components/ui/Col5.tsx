import React from "react";
import data from "@/data/dataApp.json";
import Link from "next/link";
import Image from "next/image";

const Col5 = () => {
  return (
    <div className="container max-w-[1336px] mx-auto lg:px-4 2xl:px-0">
      <div className=" flex flex-col items-center py-3 lg:pb-10 lg:pt-4">
      <h3 className="mb-6 lg:mb-9 text-center text-xl/loose">
        خرید بر اساس دسته‌بندی
      </h3>
      <div className="grid xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-5 grid-cols-3 gap-3 lg:space-x-8">
        {data.col5.map((col5) => (
          <Link
            key={col5.label}
            href={col5.path}
            className=" flex-col flex items-center gap-2 w-28"
          >
            <Image src={col5.image} alt={col5.label} width={100} height={100} />
            <span className=" text-xs/loose text-center line-clamp-2 text-neutral-900">
              {col5.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
    </div>
    
  );
};

export default Col5;
