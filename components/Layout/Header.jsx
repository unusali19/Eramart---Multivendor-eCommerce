"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";

import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { categoriesData } from "../staticData/data";

const Header = ({ activeHeading }) => {
  const [sticky, setSticky] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= TOP HEADER ================= */}
      <header className="hidden md:block border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src={logo}
                alt="Logo"
                width={140}
                height={50}
                className="h-auto w-auto"
                priority
              />
            </Link>

            {/* Search */}
            <div className="relative hidden flex-1 lg:block">
              <input
                type="text"
                placeholder="Search products..."
                className="h-11 w-full rounded-xl border border-gray-300 bg-gray-50 px-4 pr-12 text-sm outline-none transition focus:border-blue-600 focus:bg-white"
              />
              <AiOutlineSearch
                size={22}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>

            {/* Seller Button */}
            <Link
              href="/shop-create"
              className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <span className="flex items-center gap-1">
                Become Seller <IoIosArrowForward />
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* ================= DESKTOP NAVBAR ================= */}
      <nav
        className={`hidden md:block w-full bg-[#3321c8] text-white transition-all duration-300 ${
          sticky ? "fixed top-0 left-0 z-50 shadow-lg" : "relative"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Categories */}
          <div className="relative hidden lg:block">
            <button
              onClick={() => setDropDown(!dropDown)}
              className="flex h-11 w-60 items-center justify-between rounded-lg bg-white px-4 text-sm font-semibold text-gray-800"
            >
              <span className="flex items-center gap-2">
                <BiMenuAltLeft size={24} />
                All Categories
              </span>
              <IoIosArrowDown />
            </button>

            {dropDown && (
              <div className="absolute left-0 top-12 z-50 w-72 rounded-xl bg-white p-2 shadow-xl">
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              </div>
            )}
          </div>

          {/* Navbar */}
          <div className="flex-1 px-6">
            <Navbar active={activeHeading} />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="relative rounded-full p-2 hover:bg-white/10">
              <AiOutlineHeart size={24} />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs">
                0
              </span>
            </button>

            <button className="relative rounded-full p-2 hover:bg-white/10">
              <AiOutlineShoppingCart size={24} />
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs">
                0
              </span>
            </button>

            <Link
              href="/login"
              className="rounded-full p-2 hover:bg-white/10"
            >
              <CgProfile size={24} />
            </Link>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE HEADER ================= */}
      <div
        className={`md:hidden w-full bg-white transition-all duration-300 ${
          sticky ? "fixed top-0 left-0 z-50 shadow-md" : "relative"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-4">
          {/* Menu */}
          <button onClick={() => setMobileMenu(true)}>
            <BiMenuAltLeft size={30} />
          </button>

          {/* Logo */}
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={40}
              priority
            />
          </Link>

          {/* Cart */}
          <button className="relative">
            <AiOutlineShoppingCart size={26} />
            <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
              0
            </span>
          </button>
        </div>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[999] bg-black/50 md:hidden">
          <div className="h-full w-[82%] max-w-sm bg-white p-4 shadow-2xl">
            {/* Top */}
            <div className="mb-6 flex items-center justify-between">
              <button className="relative">
                <AiOutlineHeart size={26} />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  0
                </span>
              </button>

              <button onClick={() => setMobileMenu(false)}>
                <RxCross1 size={24} />
              </button>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search products..."
                className="h-11 w-full rounded-xl border border-gray-300 px-4 pr-12 outline-none focus:border-blue-600"
              />
              <AiOutlineSearch
                size={22}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>

            {/* Menu */}
            <div className="mb-6">
              <Navbar active={activeHeading} />
            </div>

            {/* Seller */}
            <Link
              href="/shop-create"
              className="mb-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
            >
              Become Seller
            </Link>

            {/* Auth */}
            <div className="flex gap-2 text-base font-medium text-gray-700">
              <Link href="/login">Login</Link>
              <span>/</span>
              <Link href="/sign-up">Sign Up</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;