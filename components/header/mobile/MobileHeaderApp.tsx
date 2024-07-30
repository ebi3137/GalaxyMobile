import React from "react";
import Image from "next/image";

const MobileHeaderApp: React.FC = () => {
  return (
    <div className="flex justify-between lg:hidden w-full pt-2 pl-2">
      <div className="flex items-center gap-2">
        <Image
          className="cursor-pointer m-2"
          width={20}
          height={20}
          alt="Close Icon"
          src="/icons/close.svg"
        />
        <div className="flex items-center gap-2">
          <Image
            className="object-contain"
            src="/logo-shape-blue.png"
            width={32}
            height={32}
            alt="Galaxy Icon"
          />
          <h5 className="text-xs xs:text-sm leading-7 whitespace-nowrap">
            اپلیکیشن گلکسی
          </h5>
        </div>
      </div>
      <button className="flex items-center justify-center bg-black text-white px-4 py-1 rounded-lg text-[10px] xs:text-xs">
        نصب
      </button>
    </div>
  );
};

export default MobileHeaderApp;
