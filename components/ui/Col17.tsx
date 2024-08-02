import Link from "next/link";
import React from "react";
import Image from "next/image";
import data from "@/data/dataApp.json";

const Col17 = () => {
  return (
    <div className="container max-w-[1336px] mx-auto lg:px-4 2xl:px-0 px-5">
      <div>
        <div className="justify-between flex py-4 px-5">
          <span>خواندنی‌ها</span>
          <Link href="/" className="flex items-center">
            <span className="text-xs text-blue-400">
              مطالب بیشتر در گلکسی مگ
            </span>
            <Image
              src="icons/less-than.svg"
              width={18}
              height={18}
              alt="مشاهده"
              className="filter-blue-400"
            />
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {data.col17.map((col17) => (
            <Link
              key={col17.label}
              href={col17.path}
              className="border rounded-lg flex flex-col shadow-md"
            >
              <Image
                src={col17.image}
                width={1200}
                height={760}
                alt={col17.label}
                className="rounded-lg shadow-md"
              />
              <p className="p-5 text-xs/loose text-neutral-600">
                {col17.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Col17;
