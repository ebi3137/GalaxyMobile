"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/dataApp.json";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="mt-12 pt-8 border pb-24 border-neutral-200 w-full">
      <div className="px-5 flex flex-col gap-5">
        <div className="flex justify-between">
          <Link href="/">
            <Image
              src="/logo-blue.png"
              alt="Logo"
              width={1000}
              height={199}
              className="w-32"
            />
          </Link>
          <button
            aria-label="Scroll back to top"
            onClick={scrollToTop}
            className="flex items-center gap-2 border rounded-lg px-4 py-2 border-neutral-300 justify-center"
          >
            <p className="text-xs text-neutral-400">بازگشت به بالا</p>
            <Image
              src="/images/footer/col1/arrowUp.svg"
              alt="Arrow"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="text-sm text-neutral-400 flex gap-5 justify-center">
          <p>تلفن پشتیبانی : ۰۹۱۷۰۱۲۶۲۰۸</p>
          <div>|</div>
          <p>۰۷۷-۳۷۲۲۶۴۴۶</p>
          <div>|</div>
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
        <div className="flex justify-around py-10">
          {data.footer3.map((footer3) => (
            <Link
              href={footer3.path}
              className="flex flex-col items-center gap-2"
            >
              <Image
                src={footer3.image}
                width={56}
                height={56}
                alt={footer3.label}
              />
              <p className="text-xs text-neutral-500">{footer3.label}</p>
            </Link>
          ))}
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col gap-5">
            <h3>با گلکسی موبایل</h3>
            <Link href="/" className="text-neutral-500 text-sm">اتاق خبر گلکسی موبایل</Link>
            <Link href="/" className="text-neutral-500 text-sm">فروش در گلکسی موبایل</Link>
            <Link href="/" className="text-neutral-500 text-sm">فرصت‌های شغلی</Link>
            <Link href="/" className="text-neutral-500 text-sm">گزارش تخلف در گلکسی موبایل</Link>
            <Link href="/" className="text-neutral-500 text-sm">تماس با گلکسی موبایل</Link>
            <Link href="/" className="text-neutral-500 text-sm">درباره گلکسی موبایل</Link>
          </div>
          <div className="flex flex-col gap-5">
            <h3>خدمات مشتریان</h3>
            <Link href="/" className="text-neutral-500 text-sm">پاسخ به پرسش‌های متداول</Link>
            <Link href="/" className="text-neutral-500 text-sm">رویه‌های بازگرداندن کالا</Link>
            <Link href="/" className="text-neutral-500 text-sm">شرایط استفاده</Link>
            <Link href="/" className="text-neutral-500 text-sm">حریم خصوصی</Link>
            <Link href="/" className="text-neutral-500 text-sm">گزارش باگ</Link>
          </div>
          <div className="flex flex-col gap-5">
            <h3>راهنمای خرید از گلکسی موبایل</h3>
            <Link href="/" className="text-neutral-500 text-sm">نحوه ثبت سفارش</Link>
            <Link href="/" className="text-neutral-500 text-sm">رویه ارسال سفارش</Link>
            <Link href="/" className="text-neutral-500 text-sm">شیوه‌های پرداخت</Link>
          </div>
          <div>
            <h3>همراه ما باشید!</h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
