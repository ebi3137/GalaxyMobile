import React from "react";
import Image from "next/image";

const Location = () => {
  return (
    <div className="flex gap-2 items-center text-neutral-700 cursor-pointer h-10">
      <Image
        width={20}
        height={20}
        src={"/icons/location.svg"}
        alt={"location"}
      />
      <div className="text-xs text-neutral-500">
        لطفا شهر خود را انتخاب کنید
      </div>
    </div>
  );
};

export default Location;
