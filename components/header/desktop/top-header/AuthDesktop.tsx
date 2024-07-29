import Link from "next/link";
import Image from "next/image";
import React from "react";

const AuthDesktop = () => {
  return (
    <div>
      <Link href="/">
        <button className="flex items-center px-4 py-2 border border-solid rounded-lg ml-0 outline-none">
          <div className="ml-2">
            <Image
              src={"/icons/authDesktop.svg"}
              alt="LogIn"
              width={24}
              height={24}
            />
          </div>
          <span className="text-xs font-bold"> ورود | ثبت‌نام</span>
        </button>
      </Link>
    </div>
  );
};

export default AuthDesktop;
