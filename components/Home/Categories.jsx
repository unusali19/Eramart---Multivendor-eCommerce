"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { brandingData, categoriesData } from "../staticData/data";
import { IoIosArrowForward } from "react-icons/io";

const Categories = () => {
  return (
    <section className="w-full bg-[#F4F6FB] py-12 sm:py-16">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-10">

        {/* ══════════════════════════════════════════
            BRANDING / TRUST BAR
        ══════════════════════════════════════════ */}
        <div className="mb-10 hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {brandingData?.map((item, index) => (
            <div
              key={index}
              className="
                flex items-center gap-4 px-5 py-4
                bg-white rounded-2xl
                border border-gray-100
                shadow-[0_2px_12px_rgba(0,0,0,0.05)]
                hover:shadow-[0_4px_20px_rgba(26,14,166,0.1)]
                hover:-translate-y-0.5
                transition-all duration-200
                group
              "
            >
              {/* Icon bubble */}
              <div
                className="
                  w-11 h-11 rounded-xl shrink-0
                  bg-[#EEF0FD] text-[#1a0ea6]
                  flex items-center justify-center
                  group-hover:bg-[#1a0ea6] group-hover:text-white
                  transition-all duration-200
                "
              >
                {item.icon}
              </div>

              <div>
                <h3 className="text-[0.85rem] font-bold text-gray-800 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[0.75rem] text-gray-500 mt-0.5 leading-snug">
                  {item.Description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile trust bar — horizontal scroll */}
        <div className="flex sm:hidden gap-3 mb-8 overflow-x-auto pb-1 scrollbar-hide -mx-4 px-4">
          {brandingData?.map((item, index) => (
            <div
              key={index}
              className="
                flex items-center gap-3 px-4 py-3
                bg-white rounded-2xl shrink-0
                border border-gray-100
                shadow-sm
              "
            >
              <div className="w-9 h-9 rounded-xl bg-[#EEF0FD] text-[#1a0ea6] flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-[0.78rem] font-bold text-gray-800 whitespace-nowrap">{item.title}</p>
                <p className="text-[0.7rem] text-gray-500 whitespace-nowrap">{item.Description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════
            CATEGORIES SECTION
        ══════════════════════════════════════════ */}
        <div className="bg-white rounded-3xl shadow-[0_2px_24px_rgba(0,0,0,0.06)] overflow-hidden">

          {/* Section header */}
          <div className="flex items-center justify-between px-6 sm:px-8 pt-7 pb-5 border-b border-gray-100">
            <div>
              <p className="text-[0.68rem] font-bold tracking-[0.16em] text-[#1a0ea6] uppercase mb-1">
                Explore
              </p>
              <h2 className="text-[1.25rem] sm:text-[1.5rem] font-extrabold text-gray-900 leading-tight">
                Shop by Category
              </h2>
            </div>
            <Link
              href="/products"
              className="
                hidden sm:flex items-center gap-1.5
                text-[0.8rem] font-semibold text-[#1a0ea6]
                px-4 py-2 rounded-xl
                border border-[#1a0ea6]/20 bg-[#EEF0FD]
                hover:bg-[#1a0ea6] hover:text-white hover:border-[#1a0ea6]
                transition-all duration-200
              "
            >
              View All <IoIosArrowForward size={14} />
            </Link>
          </div>

          {/* Grid */}
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-3 sm:gap-4">
              {categoriesData?.map((item) => (
                <CategoryCard key={item.id} item={item} />
              ))}
            </div>
          </div>

          {/* Mobile "View all" */}
          <div className="sm:hidden px-4 pb-5">
            <Link
              href="/products"
              className="
                flex items-center justify-center gap-1.5 w-full
                py-3 rounded-xl
                bg-[#1a0ea6] text-white
                text-[0.85rem] font-bold
                hover:bg-[#130b7d] active:scale-[0.98]
                transition-all duration-150
              "
            >
              View All Categories <IoIosArrowForward size={14} />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

/* ── Category Card ──────────────────────────────────── */
const CategoryCard = ({ item }) => (
  <Link
    href={`/products?category=${item.title}`}
    className="
      group relative flex flex-col items-center justify-between
      rounded-2xl overflow-hidden
      bg-[#F8F9FE] hover:bg-white
      border border-transparent hover:border-[#1a0ea6]/15
      shadow-none hover:shadow-[0_6px_24px_rgba(26,14,166,0.12)]
      p-3 sm:p-4
      transition-all duration-250 cursor-pointer
      active:scale-[0.97]
    "
  >
    {/* Image container */}
    <div
      className="
        relative w-full aspect-square max-w-[88px]
        mb-3
        transition-transform duration-300
        group-hover:scale-110
      "
    >
      <Image
        src={item.image_Url}
        alt={item.title}
        fill
        className="object-contain drop-shadow-sm"
      />
    </div>

    {/* Label */}
    <h5
      className="
        text-center text-[0.75rem] sm:text-[0.8rem] font-bold
        text-gray-700 group-hover:text-[#1a0ea6]
        leading-tight transition-colors duration-200
        line-clamp-2
      "
    >
      {item.title}
    </h5>

    {/* Hover pill indicator */}
    <div
      className="
        mt-2 h-1 w-0 rounded-full bg-[#1a0ea6]
        group-hover:w-6
        transition-all duration-300
      "
    />
  </Link>
);

export default Categories;