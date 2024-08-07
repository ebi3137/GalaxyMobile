"use client";

import React, {  useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import data from "@/data/dataApp.json";



const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  const [showMore, setShowMore] = useState<string | null>(null);
  const toggleShowMore = useCallback((index:string) => setShowMore((prev) => (prev === index ? null : index)), []);

  return (
    <footer className=" lg:mt-12 pt-8 lg:border-y border-neutral-200 lg:pb-0 pb-20">
      <div className="px-5 flex flex-col gap-3">
        <div className="flex lg:justify-between justify-center">
          <Link href="/" className="hidden lg:inline-block">
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
            className="flex items-center gap-2 lg:border rounded-lg px-4 py-2 border-neutral-300 justify-center"
          >
            <p className="text-xs text-blue-400 lg:text-neutral-400">بازگشت به بالا</p>
            <Image
              src="/images/footer/col1/arrowUp.svg"
              alt="Arrow"
              width={24}
              height={24}
              className="filter-blue-400 lg:grayscale"
            />
          </button>
        </div>
        <div className="lg:flex hidden text-sm text-neutral-400  gap-5 justify-center">
          <p>تلفن پشتیبانی : ۰۹۱۷۰۱۲۶۲۰۸</p>
          <div>|</div>
          <p>۰۷۷-۳۷۲۲۶۴۴۶</p>
          <div>|</div>
          <p>۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</p>
        </div>
        <div className="lg:hidden flex justify-between items-center border-b pb-4 pt-3">
        <div className="flex gap-2 pr-2">
          <Image src="/icons/support.svg" alt="support" width={28} height={28} />
          <div className="flex flex-col gap-2 items-center text-xs">
            <span className=" text-neutral-500">۷ روز هفته، ۲۴ ساعت</span>
            <span>تماس با پشتیبانی</span>
          </div>
          </div>
          <Link href="/" className="border rounded-lg px-4 py-3 text-xs border-neutral-400">
          تماس
          </Link>
        </div>
        <div className="lg:hidden flex justify-between items-center border-b pb-3">
        <div className="flex gap-2 pr-2">
          <Image src="/logo-shape-blue.png" alt="Logo" width={40} height={40} className="object-contain border rounded-lg p-1 border-blue-800"/>
          <div className="flex flex-col gap-2 items-center text-xs">
            <span className=" text-neutral-500">تجربه خرید بهتر در</span>
            <h1>اپلیکیشن گلکسی</h1>
          </div>
          </div>
          <Link href="/" className="bg-black text-white rounded-lg px-4 py-3 text-xs">
          دانلود
          </Link>
        </div>
        <div className="hidden lg:flex justify-around py-10">
          {data.footer3.map((footer3) => (
            <Link
              key={footer3.label}
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

        <div className="flex flex-col gap-3 divide-y lg:flex-row justify-around">
          <div className="flex flex-col gap-3">
            <button onClick={()=>toggleShowMore("index1")} className="flex justify-between items-center text-xs">
              <h3>با گلکسی موبایل</h3>
              <Image src="/icons/arrowUp.svg" alt="Arrow" width={24} height={24} className={`brightness-50 ${showMore === "index1" ? "" : "rotate-180"}`}/>
            </button>
            <div className={` flex-col gap-5 text-neutral-500 text-xs ${showMore === "index1" ? "flex" : "hidden"}`}>
            <Link href="/" >
              اتاق خبر گلکسی موبایل
            </Link>
            <Link href="/">
              فروش در گلکسی موبایل
            </Link>
            <Link href="/">
              فرصت‌های شغلی
            </Link>
            <Link href="/">
              گزارش تخلف در گلکسی موبایل
            </Link>
            <Link href="/">
              تماس با گلکسی موبایل
            </Link>
            <Link href="/">
              درباره گلکسی موبایل
            </Link>
            </div>
          </div>


          <div className="flex flex-col gap-5 pt-5">
          <button onClick={()=>toggleShowMore("index2")} className="flex justify-between items-center text-xs">
            <h6>خدمات مشتریان</h6>
            <Image src="/icons/arrowUp.svg" alt="Arrow" width={24} height={24} className={`brightness-50 ${showMore === "index1" ? "" : "rotate-180"}`}/>
            </button>
            <div className={` flex-col gap-5 text-neutral-500 text-xs ${showMore === "index2" ? "flex" : "hidden"}`}>
            <Link href="/">
              پاسخ به پرسش‌های متداول
            </Link>
            <Link href="/">
              رویه‌های بازگرداندن کالا
            </Link>
            <Link href="/">
              شرایط استفاده
            </Link>
            <Link href="/">
              حریم خصوصی
            </Link>
            <Link href="/">
              گزارش باگ
            </Link>
          </div>
          </div>





          <div className="flex flex-col gap-5 pt-5">
          <button onClick={()=>toggleShowMore("index3")} className="flex justify-between items-center text-xs">
            <h3>راهنمای خرید از گلکسی موبایل</h3>
            <Image src="/icons/arrowUp.svg" alt="Arrow" width={24} height={24} className={`brightness-50 ${showMore === "index3" ? "" : "rotate-180"}`}/>
            </button>
            <div className={` flex-col gap-5 text-neutral-500 text-xs ${showMore === "index3" ? "flex" : "hidden"}`}>
            <Link href="/">
              نحوه ثبت سفارش
            </Link>
            <Link href="/">
              رویه ارسال سفارش
            </Link>
            <Link href="/">
              شیوه‌های پرداخت
            </Link>
          </div>
          </div>



          <div className="lg:flex hidden flex-col gap-10">
            <h3>همراه ما باشید!</h3>
            <div className="flex gap-10">
              {data.footer4.map((footer4) => (
                <Link key={footer4.label} href={footer4.path}>
                  <Image
                    src={footer4.image}
                    width={40}
                    height={40}
                    alt={footer4.label}
                  />
                </Link>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <h4>با ثبت ایمیل، از جدید‌ترین تخفیف‌ها با‌خبر شوید</h4>
              <form className="flex gap-2">
                <label className="grow flex">
                  <input
                    className="grow bg-neutral-200 pr-5 py-3 rounded-lg focus:outline-none text-neutral-600"
                    placeholder="ایمیل شما"
                  />
                </label>
                <button className="text-white bg-neutral-300 rounded-lg p-3 ">
                  ثبت
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-5 ">
          <button onClick={()=>toggleShowMore("index4")} className="flex justify-between items-center text-xs">
            <h1>شرکای تجاری</h1>
            <Image src="/icons/arrowUp.svg" alt="Arrow" width={24} height={24} className={`brightness-50 ${showMore === "index4" ? "" : "rotate-180"}`}/>
          </button>
          <div className={`grid grid-cols-3 gap-px bg-neutral-200 ${showMore === "index4" ? "flex" : "hidden"}`}>
          {data.footer7.map((footer7)=>(
            <Link key={footer7.label} href={footer7.label} className="font-black text-lg text-center  bg-white py-5">{footer7.label}</Link>
          ))}
        </div>
        </div>
        
        <div className="hidden lg:flex bg-blue-950 px-5 justify-between py-3 rounded-lg">
          <div className="flex items-center gap-5">
            <Image
              src="/logo-shape-blue.png"
              width={50}
              height={50}
              alt="Logo"
            />
            <p className="text-xl text-white"> دانلود اپلیکیشن گلکسی‌موبایل</p>
          </div>
          <div className="flex gap-5 items-center">
            {data.footer5.map((footer5) => (
              <Link key={footer5.label} href={footer5.path}>
                <Image
                  src={footer5.image}
                  width={142}
                  height={44}
                  alt={footer5.label}
                  className="rounded-lg"
                />
              </Link>
            ))}
            <Link href="/" className="rounded-lg bg-white">
              <Image
                src="/images/footer/col5/more.svg"
                width={42}
                height={44}
                alt="More"
              />
            </Link>
          </div>
        </div>

        
        <div className="flex mt-3 py-8 border-y lg:justify-between  gap-20">
          <div className="flex flex-col gap-2">
            <h1 className="text-xs/10 ">
              فروشگاه اینترنتی گلکسی‌موبایل، بررسی، انتخاب و خرید آنلاین
            </h1>
          <div className={`text-xs/7 text-neutral-500 relative before:flex before:absolute before:right-0 before:left-0 before:bottom-0 before:h-20 before:bg-gradient-to-b before:from-transparent before:to-white ${showMore === "index5" ? "" : "line-clamp-3"}`}>
          
<p>
              یک<strong> خرید</strong> اینترنتی مطمئن، نیازمند فروشگاهی است که
              بتواند کالاهایی متنوع، باکیفیت و دارای قیمت مناسب را در مدت زمان ی
              کوتاه به دست مشتریان خود برساند و ضمانت بازگشت کالا هم داشته باشد؛
              ویژگی‌هایی که فروشگاه اینترنتی گلکسی‌موبایل سال‌هاست بر روی آن‌ها
              کار کرده و توانسته از این طریق مشتریان ثابت خود را داشته باشد.
              <br />
              یکی از مهم‌ترین دغدغه‌های کاربران گلکسی‌موبایل یا هر فروشگاه‌
              اینترنتی دیگری، این است که کالای خریداری شده چه زمانی به دستشان
              می‌رسد. گلکسی‌موبایل شیوه‌های مختلفی از ارسال را متناسب با فروشنده
              کالا،‌ مقصد کالا و همچنین نوع کالا در اختیار کاربران خود قرار
              می‌دهد. هر یک&nbsp;از{" "}
              <Link className="text-blue-600" href="https://www.galaxymobile.com/landing/delivery/">
                روش های ارسال گلکسی موبایل
              </Link>{" "}
              شرایط و ویژگی‌های خاص خود را دارند که ممکن است گاهی برای کاربران
              جدید، مبهم و پیچیده به نظر برسند. برای آگاهی بیشتر مشتریان از
              خدمات گلکسی‌موبایل، این فروشگاه اینترنتی در بخشی از وب‌سایت خود
              راهنمای کاملی از شیوه‌‌های ارسال را به صورت ساده و به دور از
              پیچیدگی، قرار داده است که شامل 8 نوع ارسال کالا به روش‌های زیر
              است: ارسال امروز، دریافت حضوری، دریافت از گنجه، ارسال توسط
              فروشنده، ارسال عادی، ارسال کالاهای بزرگ، سنگین و فوق سنگین، ارسال
              سریع سوپرمارکتی، ارسال با پست
            </p>

            <p>کدام محصولات در گلکسی‌موبایل قابل سفارش هستند؟</p>

            <p>
              تقریبا می‌توان گفت محصولی وجود ندارد که گلکسی‌موبایل برای مشتریان
              خود در سراسر کشور فراهم نکرده باشد. شما می‌توانید در تمامی روزهای
              هفته و تمامی شبانه روز&nbsp;گلکسی‌موبایل که محصولات دارای تخفیف عالی
              می‌شوند، سفارش خود را به سادگی ثبت کرده و در روز و محدوده زمانی
              مناسب خود، درب منزل تحویل بگیرید. بعضی از گروه‌های اصلی و زیر
              مجموعه‌های پرطرفدار محصولات گلکسی‌موبایل شامل مواردی می‌شود که در
              ادامه به معرفی آن‌ها می‌پردازیم که&nbsp;امکان{" "}
              <Link className="text-blue-600" href="https://www.galaxymobile.com/landing/sameday-delivery/">
                <strong>ارسال امروز</strong>
              </Link>{" "}
              برای آن ها وجود دارد.&nbsp;
            </p>

            <p>کالای گلکسیتال</p>

            <p>
              انواع گوشی موبایل از برندهای مختلفی مثل آیفون، &nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-mobile-phone/samsung/"
                target="_blank"
              >
                گوشی سامسونگ
              </Link>
              ،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-mobile-phone/nokia/"
                target="_blank"
              >
                گوشی نوکیا
              </Link>
              ،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-mobile-phone/xiaomi/"
                target="_blank"
              >
                گوشی شیائومی
              </Link>
              ،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-mobile-phone/huawei/"
                target="_blank"
              >
                گوشی هواوی
              </Link>
              ، و...، انواع کنسول بازی ps4 و ps5، انواع تبلت‌های پرطرفدار
              مثل&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-tablet/samsung/"
                target="_blank"
              >
                تبلت سامسونگ
              </Link>
              &nbsp;نوت 10، انواع هندزفری مثل&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-headphone/"
                target="_blank"
              >
                هندزفری بی سیم
              </Link>
              ،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-tv2/"
                target="_blank"
              >
                تلوزیون
              </Link>
              &nbsp;از برندهای مختلف مثل تلویزیون سامسونگ، سونی و...، انواع
              مانیتور، کیس، کیبورد، مودم از برندهای مختلف مثل&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-3g-4g-and-5g-modem-Router/mtn-irancell/"
                target="_blank"
              >
                مودم ایرانسل
              </Link>
              ،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-lighting-antenna/"
                target="_blank"
              >
                آنتن
              </Link>
              &nbsp;و ... تنها بخشی از محصولاتی هستند که زیر مجموعه کالای
              گلکسیتال در گلکسی‌موبایل قرار دارند.
            </p>

            <p>خودرو، ابزار و تجهیزات صنعتی</p>

            <p>
              انواع خودروهای ایرانی و خارجی از برندهای مطرحی مثل هوندا، کیا
              و...، موتور سیکلت از برندهایی مثل کویر موتور و...، لوازم جانبی
              خودرو مثل سیستم صوتی تصویر، ضبط و...، لوازم یدکی مثل دیسک و صفحه
              کلاج و... و لوازم مصرفی خودرو مثل&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-car-coating/sana-3d/"
                target="_blank"
              >
                کفپوش سانا
              </Link>
              &nbsp;در این گروه قرار می‌گیرند.
            </p>

            <p>مد و پوشاک</p>

            <p>
              محصولاتی مثل انواع لباس مثل لباس مجلسی زنانه و مردانه، لباس راحتی،
              لباس ورزشی، اکسسوری، کیف، کفش، عینک آفتابی، لباس زیر، شال و روسری
              و... جزو مواردی هستند که می‌توانید آن‌ها را از برندهای مطرح ایرانی
              و خارجی موجود در گلکسی موبایل مثل آدیداس، نایکی، دبنهامز، آلدو،
              درسا و... خریداری کنید.
            </p>

            <p>اسباب بازی کودک و نوزاد</p>

            <p>
              در این دسته از کالاهای گلکسی‌موبایل، انواع لوازم بهداشتی و حمام کودک
              و نوزاد، انواع پوشاک و کفش،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-tablet/"
                target="_blank"
              >
                تبلت
              </Link>
              ،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-toys/"
                target="_blank"
              >
                اسباب‌بازی
              </Link>
              ، لوازم اتاق خواب کودک، لوازم ایمنی، لوازم شخصی و غذا خوری و ...
              قرار می‌گیرد تا خرید را برای پدر و مادرها به کاری سریع و آسان
              تبدیل کند.
            </p>

            <p>کالاهای سوپر مارکتی</p>

            <p>
              هر چیزی از مواد خوراکی که به آن نیاز دارید، در&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/main/food-beverage/"
                target="_blank"
              >
                سوپرمارکت
              </Link>
              &nbsp;گلکسی‌موبایل پیدا می‌شود، محصولات پرطرفداری مثل&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-peanut-butter/"
                target="_blank"
              >
                کره بادام‌زمینی
              </Link>
              ،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-honey/"
                target="_blank"
              >
                عسل
              </Link>
              ،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-sauce-dressing/"
                target="_blank"
              >
                سس
              </Link>
              ،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-coffee/"
                target="_blank"
              >
                قهوه
              </Link>
              ،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-saffron/"
                target="_blank"
              >
                زعفران
              </Link>
              ، شکلات، انواع نان و ... از برندهای معتبر و معروفی مثل&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/brand/nestle/"
                target="_blank"
              >
                نستله
              </Link>
              ، نوتلا، استارباکس، مزمز، چی توز و ... همگی در اختیار شما هستند و
              تا رسیدن به آشپزخانه شما تنها چند کلیک فاصله دارند.
            </p>

            <p>زیبایی و سلامت</p>

            <p>
              انواع لوازم آرایش مثل لاک، رنگ مو، لوازم آرایش لب، چشم، صورت و...
              همگی در گلکسی‌موبایل موجود هستند. همچنین محصولات بهداشتی مثل انواع
              شامپو، کرم،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-face-masque/"
                target="_blank"
              >
                ماسک صورت
              </Link>
              ، ضد تعریق،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-hair-mask/"
                target="_blank"
              >
                ماسک مو
              </Link>
              &nbsp; و...، انواع لوازم شخصی برقی، ست هدیه، بهترین انواع عطر و
              اسپری، انواع زیورآلات طلا و نقره مثل&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-women-gold-jewelry-sets/"
                target="_blank"
              >
                سرویس طلا
              </Link>
              ، سرویس نقره و... به همراه وسایل مراقبت شخصی طبی در گروه زیبایی و
              سلامت گلکسی‌موبایل قرار می‌گیرد. در این بخش برندهای مطرحی مثل اسنس،
              پنبه ریز، سینره و... حضور دارند.
            </p>

            <p>خانه و آشپزخانه</p>

            <p>
              یکی از متنوع‌ترین بخش‌های گلکسی‌موبایل، بخش لوازم خانه و آشپزخانه
              است که از محصولاتی مثل صندلی گیمینگ در بخش صندلی‌ها گرفته تا
              انواع&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-household-furniture/"
                target="_blank"
              >
                مبل راحتی
              </Link>
              ، انواع آبگرمکن مثل&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-water-heater/butane/"
                target="_blank"
              >
                آبگرمکن بوتان
              </Link>
              ، لباسشویی‌های متنوع مثل انواع&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-washing-machines/snowa/"
                target="_blank"
              >
                لباسشویی اسنوا
              </Link>
              ، شیرآلات مختلف مثل شیرآلات قهرمان و...، ظروف و همچنین لوازم برقی
              آشپزخانه مثل توستر و... را شامل می‌شود و امکان خریدی عالی را برای
              مشتریان فراهم کرده است. در بخش لوازم خانگی گلکسی‌موبایل، برندهای
              معتبری مثل تفال، اخوان، فیلیپس، ال جی، اسنوا، جی پلاس و... حضور
              دارند.
            </p>

            <p>کتاب، لوازم تحریر و هنر</p>

            <p>
              بخش هنر، کتاب، رمان و لوازم تحریر گلکسی‌موبایل نیز یکی از متنوع‌ترین
              بخش‌های این فروشگاه اینترنتی است. انواع کتاب و مجله،{" "}
              <Link className="text-blue-600" href="https://www.galaxymobile.com/landing/language-learning-books/">
                کتاب زبان
              </Link>
              ، بازی، لوازم تحریر با طرح‌های مختلف مانند{" "}
              <Link className="text-blue-600" href="https://www.galaxymobile.com/tags/miraculous/">
                دختر کفشدوزکی
              </Link>
              ، سازهایی مثل&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-pianos/"
                target="_blank"
              >
                پیانو
              </Link>
              ،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-dulcimer/"
                target="_blank"
              >
                سنتور
              </Link>
              ،&nbsp;
              <Link className="text-blue-600"
                href="https://www.galaxymobile.com/search/category-percussion/"
                target="_blank"
              >
                هنگ درام
              </Link>
              &nbsp; و... با بهترین قیمت‌ها و از بهترین برندها در دسترس شما قرار
              دارند.
            </p>

            <p>ورزش و سفر</p>

            <p>
              هر نوع وسیله و لباس ورزشی که فکرش را کنید، انواع وسایل کمپینگ و
              کوهنوردی، ساک و قمقمه ورزشی و... در این بخش قرار می‌گیرند. همچنین
              شما می‌توانید وسایل مد نظر خود را بر اساس نوع ورزش (آبی، هوازی،
              بدنسازی و...) در دسته‌بندی‌های گلکسی‌موبایل پیدا کنید.
            </p>

            <p>محصولات بومی و محلی</p>

            <p>
              و در آخر گلکسی‌موبایل از طریق به فروش رساندن محصولات بومی و سنتی
              متفاوتی مثل انواع خوراکی، گلیم و گبه، ابزار و ... تلاش کرده تا بین
              هنر ایرانی و متقاضیان آن کوتاه‌ترین راه را پیدا کند. در این بخش
              شما می‌توانید انواع محصولات از جمله ظروف زیبای مخصوص به&nbsp;سفره
              هفت‌سین&nbsp; و پذیرایی از مهمانان در روزهای&nbsp;نوروز، انواع
              آیینه و شمعدان و هر آن چیزی را که برای خلق زیبایی در روزهای بهاری
              به آن نیاز دارید، با قیمت مناسب و تنوع بسیار بالا انتخاب کنید.
              همچنین در صفحه{" "}
              <strong>
                <Link className="text-blue-600" href="https://www.galaxymobile.com/tags/">برچسب ها</Link>
              </strong>
              ، امکان مشاهده و خرید انواع محصولات با طرح های بومی وجود
              دارد.&nbsp;&nbsp;گلکسی‌موبایل همچنین برای اینکه حال و هوای عید را به
              اعضای خود هدیه کند،&nbsp;تقویم ۱۴۰۱، انواع ایده&nbsp;عکس پروفایل
              عید نوروز،&nbsp;آهنگ‌های عید نوروز&nbsp;و موزیک‌های شاد بهاری،
              وسایل مربوط به&nbsp;خانه‌تکانی&nbsp;و&nbsp;انواع لباس های
              عید&nbsp; را برای شما فراهم کرده است تا بتوانید در کنار خرید خود،
              از این حال و هوای تازه نهایت لذت را ببرید.
            </p>
            <p>&nbsp;<br/> &nbsp;</p>
          </div>
          <button onClick={()=>toggleShowMore("index5")} className="grayscale lg:grayscale-0 flex items-center cursor-pointer">
              <span className="text-blue-400  text-xs/loose">{showMore === "index5" ? "مشاهده کمتر" : "مشاهده بیشتر"}</span>
              <Image
                src="icons/less-than.svg"
                width={18}
                height={18}
                alt="مشاهده"
                className="filter-blue-400 h-4 "
              />
          </button>
          </div>
          <div className="hidden lg:flex gap-2 items-start">
            {data.footer6.map((footer6)=>(
              <Link key={footer6.label} href={footer6.path} className="w-28 h-28 border items-center flex justify-center rounded-lg">
                <Image src={footer6.image} width={75} height={75} alt={footer6.label}/>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden lg:flex py-4 text-xs text-neutral-400 justify-center">
          <p>برای استفاده از مطالب گلکسی موبایل، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست. تمام حقوق اين وب‌سايت نیز برای شرکت دنیای تکنولوژی (فروشگاه آنلاین گلکسی موبایل) است.
          </p>
        </div>
      </div>
      <div className=" hidden lg:flex bg-neutral-100 w-full flex-col mt-5">
      <div className="flex justify-around">
        {data.footer7.map((footer7)=>(
          <Link key={footer7.label} href={footer7.path} className="grow px-4 py-5 border items-center justify-center flex text-lg font-black text-neutral-600 ">
           <span>{footer7.label}</span>
          </Link>
        ))}
      </div>
      </div>
      
      
    </footer>
  );
};

export default Footer;
