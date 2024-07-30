import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import data from "@/data/dataApp.json";

interface Category {
  label: string;
  path: string;
  icon: string;
  mobileProductList?: ProductList[];
}

interface ProductList {
  label: string;
  path: string;
  icon: string;
  categoryMobilePhone?: SubCategory[];
}

interface SubCategory {
  label: string;
  path: string;
  icon: string;
  mobileBrands?: Brand[];
}

interface Brand {
  label: string;
  path: string;
}

const CategoryNav: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const handleMouseEnter = (category: Category) => {
    setActiveCategory(category);
  };

  const handleMouseLeave = () => {
    setActiveCategory(null);
  };

  return (
    <div className="flex w-max submenu-responsive bg-white max-h-[65vh] absolute top-full z-50 border shadow-xl rounded-bl-xl">
      <div className="scrollbar-container overflow-auto flex w-[200px] flex-col bg-neutral-100">
        {data.categoryNavRight.map((category: Category) => (
          <div
            key={category.label}
            className="hover:bg-white delay-150 duration-150"
            onMouseEnter={() => handleMouseEnter(category)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={category.path}
              className="gap-2 flex items-center text-xs filter-red py-4 delay-150 px-2"
            >
              <Image
                src={category.icon}
                alt={category.label}
                width={18}
                height={18}
              />
              <span>{category.label}</span>
            </Link>
          </div>
        ))}
      </div>

      {activeCategory && (
        <div
          className="scrollbar-container overflow-auto flex-col py-1 px-5 gap-4 flex pb-10 mb-4"
          onMouseEnter={() => setActiveCategory(activeCategory)}
          onMouseLeave={handleMouseLeave}
        >
          {activeCategory.mobileProductList?.map((productList) => (
            <div key={productList.label}>
              <Link
                href={productList.path}
                className="text-xs flex text-sky-500 my-1 py-3"
              >
                {productList.label}
                <Image
                  src={productList.icon}
                  alt={productList.label}
                  width={16}
                  height={16}
                />
              </Link>
              <ul className="grid xl:grid-cols-4 grid-cols-3 gap-5">
                {productList.categoryMobilePhone?.map((subCategory) => (
                  <li key={subCategory.label}>
                    <Link
                      href={subCategory.path}
                      className="filter-red text-sm flex py-2 gap-1 items-center before:w-[0.125rem] before:h-[14px] before:ml-2 before:bg-red-500"
                    >
                      {subCategory.label}
                      <Image
                        src={subCategory.icon}
                        alt={subCategory.label}
                        width={16}
                        height={16}
                      />
                    </Link>
                    <ul className="pr-4">
                      {subCategory.mobileBrands?.map((brand) => (
                        <li key={brand.label}>
                          <Link
                            href={brand.path}
                            className="text-xs text-neutral-500 filter-red"
                          >
                            {brand.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryNav;
