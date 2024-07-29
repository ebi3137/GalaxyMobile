import Link from "next/link";
import Image from "next/image";
import React from "react";

const LogoDesktop = () => {
  return (
    <div>
      <Link href="/">
        <Image
        className="h-8 w-28 object-contain"
          src="/logo-blue.png"
          width={1000}
          height={199}
          alt="لوگوی گلکسی"
        />
      </Link>
    </div>
  );
};

export default LogoDesktop;
