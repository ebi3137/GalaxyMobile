'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import data from "@/data/dataApp.json";

const NavMobile = () => {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;
  const navMobile = data.navMobile;

  return (
    <footer className="w-full fixed bottom-0 left-0 flex justify-around bg-white border-t-2 border-t-neutral-200 z-10 shadow-inner lg:hidden">
      {navMobile.map((tab) => (
        <div  key={tab.label}>
          <Link href={tab.path} className="flex flex-col items-center py-1 text-xs gap-1">
          <Image
            src={isActive(tab.path) ? tab.activeIcon : tab.icon}
            width={24}
            height={24}
            alt={tab.label}
          />
          <p className={isActive(tab.path) ? "text-neutral-900" : "text-neutral-400"}>
            {tab.label}
          </p>
        </Link>
        </div>
      ))}
    </footer>
  );
};

export default NavMobile;
