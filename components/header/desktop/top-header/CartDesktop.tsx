import Link from "next/link";
import Image from "next/image";
import React from "react";

const CartDesktop = () => {
  return (
    <div>
      <Link className="inline-flex pr-2 lg:p-2" href="/">
        <Image width={24} height={24} src={"/icons/cartDesktop.svg"} alt="cart" />
      </Link>
    </div>
  );
};

export default CartDesktop;
