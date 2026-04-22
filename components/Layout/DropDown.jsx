import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const DropDown = ({ categoriesData, setDropDown }) => {
  return (
    <div
      className="
        w-[272px] bg-white rounded-2xl overflow-hidden
        border border-gray-100
        shadow-[0_16px_48px_rgba(0,0,0,0.14)]
        py-2
      "
    >
      {/* Header */}
      <div className="px-4 py-2.5 border-b border-gray-100 mb-1">
        <p className="text-[0.67rem] font-extrabold uppercase tracking-[0.16em] text-gray-400">
          All Categories
        </p>
      </div>

      {/* Items */}
      <div className="max-h-[360px] overflow-y-auto">
        {categoriesData?.map((item, index) => (
          <Link
            key={index}
            href={`/products?category=${item.title}`}
            onClick={() => setDropDown(false)}
            className="
              flex items-center gap-3 px-4 py-2.5
              hover:bg-[#F5F6FE] group
              transition-colors duration-150
            "
          >
            {/* Category image */}
            <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center shrink-0 overflow-hidden group-hover:bg-[#EEF0FD] transition-colors">
              {item.image_Url && (
                <Image
                  src={item.image_Url}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              )}
            </div>

            {/* Title */}
            <span className="flex-1 text-[0.85rem] font-semibold text-gray-700 group-hover:text-[#1a0ea6] transition-colors select-none">
              {item.title}
            </span>

            {/* Arrow */}
            <IoIosArrowForward
              size={13}
              className="text-gray-300 group-hover:text-[#1a0ea6] transition-colors shrink-0"
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropDown;