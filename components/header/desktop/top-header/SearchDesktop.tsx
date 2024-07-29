import React from "react";
import Image from "next/image";

const SearchDesktop = () => {
  return (
    <div className="w-[600px] gap-4 items-center flex py-2 bg-[#f0f0f1] rounded-lg px-4">
      <Image
        className="cursor-pointer"
        width={24}
        height={24}
        alt="search"
        src={"/icons/search.svg"}
      />
      <span className=" text-neutral-400 text-xs leading-7">جستجو</span>
    </div>
  );
};

export default SearchDesktop;
