import React from "react";
import Link from "next/link";
import Image from "next/image";

const Banner: React.FC = () => {
  return (
    <div className="w-full">
      <Link target="_blank" href="/" passHref rel="opener noreferrer">
          <Image
            className="hidden lg:block w-full h-15 object-cover"
            src="/images/banner/bannerDesktop.gif"
            width={2800}
            height={100}
            alt="Desktop Banner"
            priority
            unoptimized
          />
          <Image
            className="block lg:hidden w-full h-9 object-cover"
            src="/images/banner/bannerMobile.gif"
            width={1400}
            height={50}
            alt="Mobile Banner"
            priority
            unoptimized
          />
      </Link>
    </div>
  );
};

export default Banner;
