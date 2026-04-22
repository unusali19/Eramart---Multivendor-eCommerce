"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
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
  const [searchFocused, setSearchFocused] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 70);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setDropDown(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  return (
    <>
      {/* ── TOP BAR (desktop / tablet) ── */}
      <header className="hidden md:block bg-white border-b border-gray-100">
        <div className="mx-auto max-w-[1280px] px-4 lg:px-8">
          <div className="flex h-[72px] items-center justify-between gap-6">

            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image src={logo} alt="Logo" width={120} height={40} className="object-contain h-auto" priority />
            </Link>

            {/* Search */}
            <div
              className={`
                flex flex-1 max-w-[580px] items-center h-[46px] rounded-2xl overflow-hidden
                border-2 transition-all duration-200 bg-gray-50
                ${searchFocused
                  ? "border-[#1a0ea6] bg-white shadow-[0_0_0_4px_rgba(26,14,166,0.08)]"
                  : "border-gray-200 hover:border-gray-300"
                }
              `}
            >
              <AiOutlineSearch
                size={18}
                className={`ml-4 shrink-0 transition-colors duration-200 ${searchFocused ? "text-[#1a0ea6]" : "text-gray-400"}`}
              />
              <input
                type="text"
                placeholder="Search for products, brands, categories…"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="flex-1 h-full px-3 text-[0.875rem] text-gray-700 placeholder-gray-400 bg-transparent outline-none"
              />
              <button className="h-full px-5 bg-[#1a0ea6] hover:bg-[#130b7d] text-white text-[0.8rem] font-bold shrink-0 transition-colors duration-150">
                Search
              </button>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2 shrink-0">
              <Link
                href="/shop-create"
                className="
                  hidden lg:flex items-center gap-1.5 px-4 py-2.5 rounded-xl
                  border-2 border-[#1a0ea6] text-[#1a0ea6] text-[0.8rem] font-bold
                  hover:bg-[#1a0ea6] hover:text-white transition-all duration-200
                "
              >
                Become Seller <IoIosArrowForward size={13} />
              </Link>

              {[
                { icon: AiOutlineHeart, label: "Wishlist" },
                { icon: AiOutlineShoppingCart, label: "Cart" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="relative p-2.5 rounded-xl hover:bg-gray-100 transition-colors group"
                >
                  <Icon size={22} className="text-gray-600 group-hover:text-[#1a0ea6] transition-colors" />
                  <span className="absolute -top-0.5 -right-0.5 w-[18px] h-[18px] rounded-full bg-[#22c55e] text-white text-[10px] font-bold flex items-center justify-center">0</span>
                </button>
              ))}

              <Link href="/login" className="p-2.5 rounded-xl hover:bg-gray-100 transition-colors group">
                <CgProfile size={22} className="text-gray-600 group-hover:text-[#1a0ea6] transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ── DESKTOP NAV BAR ── */}
      <nav
        className={`
          hidden md:flex items-center w-full h-[54px]
          bg-[#1a0ea6] transition-all duration-300
          ${sticky ? "fixed top-0 left-0 z-50 shadow-xl shadow-[#1a0ea6]/30" : "relative"}
        `}
      >
        <div className="mx-auto flex h-full w-full max-w-[1280px] items-center justify-between px-4 lg:px-8 gap-4">

          {/* Sticky logo */}
          {sticky && (
            <Link href="/" className="shrink-0 mr-2">
              <Image src={logo} alt="Logo" width={82} height={28} className="object-contain brightness-0 invert" />
            </Link>
          )}

          {/* Categories dropdown */}
          <div ref={dropRef} className="relative shrink-0 hidden lg:block">
            <button
              onClick={() => setDropDown(!dropDown)}
              className="
                flex items-center gap-2.5 h-[38px] px-4
                bg-white/10 hover:bg-white/20 border border-white/20
                text-white text-[0.82rem] font-semibold rounded-xl
                transition-all duration-150 select-none
              "
            >
              <BiMenuAltLeft size={18} />
              All Categories
              <IoIosArrowDown
                size={14}
                className={`text-white/70 transition-transform duration-200 ${dropDown ? "rotate-180" : ""}`}
              />
            </button>
            {dropDown && (
              <div className="absolute top-[calc(100%+6px)] left-0 z-50">
                <DropDown categoriesData={categoriesData} setDropDown={setDropDown} />
              </div>
            )}
          </div>

          {/* Nav links */}
          <div className="flex-1">
            <Navbar active={activeHeading} />
          </div>

          {/* Sticky icons */}
          {sticky && (
            <div className="flex items-center gap-1 shrink-0">
              {[AiOutlineHeart, AiOutlineShoppingCart].map((Icon, i) => (
                <button key={i} className="relative p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <Icon size={21} className="text-white/90" />
                  <span className="absolute -top-0.5 -right-0.5 w-[16px] h-[16px] rounded-full bg-[#22c55e] text-white text-[9px] font-bold flex items-center justify-center">0</span>
                </button>
              ))}
              <Link href="/login" className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                <CgProfile size={21} className="text-white/90" />
              </Link>
            </div>
          )}

          {/* Become seller (non-sticky) */}
          {!sticky && (
            <Link
              href="/shop-create"
              className="
                shrink-0 flex items-center gap-1 px-3.5 py-1.5 rounded-xl
                bg-white/10 border border-white/20 text-white text-[0.78rem] font-bold
                hover:bg-white hover:text-[#1a0ea6] transition-all duration-200
              "
            >
              Become Seller <IoIosArrowForward size={13} />
            </Link>
          )}
        </div>
      </nav>

      {/* ── MOBILE HEADER ── */}
      <div
        className={`
          md:hidden w-full bg-white z-50
          ${sticky ? "fixed top-0 left-0 shadow-md" : "relative"}
          transition-all duration-300
        `}
      >
        <div className="flex items-center justify-between px-3 h-[56px] border-b border-gray-100">
          <button
            onClick={() => setMobileMenu(true)}
            className="p-2 rounded-xl hover:bg-gray-100 active:scale-95 transition-all"
          >
            <BiMenuAltLeft size={26} className="text-gray-700" />
          </button>
          <Link href="/">
            <Image src={logo} alt="Logo" width={90} height={30} className="object-contain" priority />
          </Link>
          <div className="flex items-center gap-0.5">
            <button className="relative p-2 rounded-xl hover:bg-gray-100 active:scale-95 transition-all">
              <AiOutlineShoppingCart size={23} className="text-gray-700" />
              <span className="absolute -top-0.5 -right-0.5 w-[17px] h-[17px] rounded-full bg-[#22c55e] text-white text-[9px] font-bold flex items-center justify-center">0</span>
            </button>
            <Link href="/login" className="p-2 rounded-xl hover:bg-gray-100 active:scale-95 transition-all">
              <CgProfile size={23} className="text-gray-700" />
            </Link>
          </div>
        </div>
        {/* Mobile search */}
        <div className="px-3 py-2 border-b border-gray-100">
          <div className="flex items-center h-[40px] rounded-xl border-2 border-gray-200 focus-within:border-[#1a0ea6] focus-within:shadow-[0_0_0_3px_rgba(26,14,166,0.07)] transition-all duration-200 bg-gray-50 focus-within:bg-white">
            <AiOutlineSearch size={17} className="ml-3 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search products…"
              className="flex-1 px-2 h-full text-[0.85rem] text-gray-700 placeholder-gray-400 bg-transparent outline-none"
            />
          </div>
        </div>
      </div>

      {/* ── MOBILE SIDEBAR ── */}
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm
          transition-opacity duration-300 md:hidden
          ${mobileMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setMobileMenu(false)}
      />

      {/* Drawer */}
      <div
        className={`
          fixed top-0 left-0 z-[70] h-full w-[82vw] max-w-[320px]
          bg-white flex flex-col shadow-2xl
          transition-transform duration-300 ease-out md:hidden
          ${mobileMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 py-4 bg-[#1a0ea6] shrink-0">
          <Link href="/" onClick={() => setMobileMenu(false)}>
            <Image src={logo} alt="Logo" width={86} height={28} className="object-contain brightness-0 invert" />
          </Link>
          <button
            onClick={() => setMobileMenu(false)}
            className="p-1.5 rounded-lg bg-white/15 hover:bg-white/25 transition-colors"
          >
            <RxCross1 size={17} className="text-white" />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto">

          {/* Auth quick links */}
          <div className="px-4 py-4 flex gap-2 border-b border-gray-100">
            <Link
              href="/login"
              onClick={() => setMobileMenu(false)}
              className="flex-1 text-center py-2.5 rounded-xl border-2 border-[#1a0ea6] text-[#1a0ea6] text-[0.8rem] font-bold hover:bg-[#1a0ea6] hover:text-white transition-all"
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              onClick={() => setMobileMenu(false)}
              className="flex-1 text-center py-2.5 rounded-xl bg-[#1a0ea6] text-white text-[0.8rem] font-bold hover:bg-[#130b7d] transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Nav links */}
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-[0.67rem] font-extrabold uppercase tracking-[0.16em] text-gray-400 mb-2 px-1">Menu</p>
            <div onClick={() => setMobileMenu(false)}>
              <Navbar active={activeHeading} mobile />
            </div>
          </div>

          {/* Categories */}
          <div className="px-4 py-3">
            <p className="text-[0.67rem] font-extrabold uppercase tracking-[0.16em] text-gray-400 mb-2 px-1">Categories</p>
            <div className="flex flex-col gap-0.5">
              {categoriesData?.slice(0, 9).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/products?category=${cat.title}`}
                  onClick={() => setMobileMenu(false)}
                  className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-gray-50 transition-colors group"
                >
                  {cat.image_Url && (
                    <Image src={cat.image_Url} alt={cat.title} width={26} height={26} className="rounded-lg object-cover shrink-0" />
                  )}
                  <span className="text-[0.85rem] font-semibold text-gray-700 group-hover:text-[#1a0ea6] transition-colors flex-1">
                    {cat.title}
                  </span>
                  <IoIosArrowForward size={13} className="text-gray-300 group-hover:text-[#1a0ea6] transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Drawer footer CTA */}
        <div className="px-4 py-4 border-t border-gray-100 bg-gray-50 shrink-0">
          <Link
            href="/shop-create"
            onClick={() => setMobileMenu(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#1a0ea6] hover:bg-[#130b7d] text-white text-[0.85rem] font-bold active:scale-[0.98] transition-all duration-150"
          >
            Become a Seller <IoIosArrowForward size={14} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;