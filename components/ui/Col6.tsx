import React from "react";
import data from "@/data/dataApp.json";
import Link from "next/link";
import Image from "next/image";

const Col6 = () => {
  const categories = [
    {
      title: "گوشی موبایل",
      subtitle: "بر اساس سلیقه شما",
      items: data.col6.col1,
    },
    {
      title: "کیف و کاور گوشی",
      subtitle: "بر اساس سلیقه شما",
      items: data.col6.col2,
    },
    {
      title: "ساعت هوشمند",
      subtitle: "بر اساس سلیقه شما",
      items: data.col6.col3,
    },
    {
      title: "سایر لوازم خودرو",
      subtitle: "بر اساس سلیقه شما",
      items: data.col6.col4,
    },
  ];

  return (
    <div className="container max-w-[1336px] mx-auto lg:px-4 2xl:px-0 ">
      <div className="flex flex-col lg:flex-row items-center lg:border border-solid border-neutral-200 rounded-2xl">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`px-5 py-2 border-solid border-neutral-200 flex-col flex gap-2 ${
              index === 0 ? "" : "lg:border-r"
            }`}
          >
            <div>
              <h4 className="text-neutral-800 text-base/loose">{cat.title}</h4>
              <p className="text-neutral-400 text-xs/loose">{cat.subtitle}</p>
            </div>
            <div className="grid grid-cols-2 gap-px bg-neutral-200">
              {cat.items.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  className="p-2 bg-white"
                >
                  <Image
                    src={item.image}
                    alt={item.label}
                    width={300}
                    height={300}
                  />
                </Link>
              ))}
            </div>
            <Link href="/" className="flex items-center justify-center mb-3">
              <span className="filter-blue-400 text-xs/loose">مشاهده</span>
              <Image
                src="icons/less-than.svg"
                width={18}
                height={18}
                alt="مشاهده"
                className="filter-blue-400"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Col6;
