import React, { useState } from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
  AiOutlineMail,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { HiLocationMarker, HiPhone } from "react-icons/hi";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../staticData/data";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0f0a5e] text-white">

      {/* ── Newsletter Banner ─────────────────────────────── */}
      <div className="relative overflow-hidden bg-[#1a0ea6]">
        {/* Decorative circles */}
        <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-12 right-20 w-64 h-64 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute top-4 right-4 w-24 h-24 rounded-full bg-[#22c55e]/10 pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-[0.7rem] font-bold tracking-[0.18em] text-[#22c55e] uppercase mb-1">
              Stay in the loop
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold leading-tight">
              Get deals, drops &amp; updates <br className="hidden sm:block" />
              straight to your inbox.
            </h2>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="w-full sm:w-auto flex gap-0 rounded-xl overflow-hidden border border-white/20 shadow-lg shadow-black/20"
          >
            {subscribed ? (
              <div className="flex items-center gap-2 px-5 py-3 bg-[#22c55e]/20 w-full sm:w-[340px]">
                <span className="text-[#22c55e] font-semibold text-sm">🎉 You're subscribed!</span>
              </div>
            ) : (
              <>
                <div className="flex items-center flex-1 bg-white/10 px-3">
                  <AiOutlineMail size={16} className="text-white/50 shrink-0" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email…"
                    className="bg-transparent text-white placeholder-white/40 text-sm px-2 py-3 outline-none w-full sm:w-[220px]"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#22c55e] hover:bg-[#16a34a] active:scale-95 transition-all duration-150 px-5 py-3 font-bold text-sm text-white whitespace-nowrap flex items-center gap-1.5"
                >
                  Subscribe <AiOutlineArrowRight size={14} />
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      {/* ── Main Footer Grid ──────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 lg:gap-8">

          {/* Brand column */}
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src={logo}
                width={110}
                height={38}
                alt="logo"
                className="object-contain "
              />
            </Link>
            <p className="text-white/60 text-[0.875rem] leading-7 max-w-[260px]">
              Your one-stop marketplace for everything you love — fast delivery, trusted sellers, unbeatable prices.
            </p>

            {/* Contact snippets */}
            <div className="mt-6 flex flex-col gap-2.5">
              <div className="flex items-center gap-2.5 text-white/50 text-[0.8rem]">
                <HiLocationMarker size={15} className="text-[#22c55e] shrink-0" />
                <span>123 Commerce St, Dhaka, BD</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/50 text-[0.8rem]">
                <HiPhone size={15} className="text-[#22c55e] shrink-0" />
                <span>+880 1700-000000</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/50 text-[0.8rem]">
                <AiOutlineMail size={15} className="text-[#22c55e] shrink-0" />
                <span>hello@eramart.com</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-2 mt-6">
              {[
                { icon: AiFillFacebook, color: "hover:bg-blue-600", label: "Facebook" },
                { icon: AiOutlineTwitter, color: "hover:bg-sky-500", label: "Twitter" },
                { icon: AiFillInstagram, color: "hover:bg-pink-600", label: "Instagram" },
                { icon: AiFillYoutube, color: "hover:bg-red-600", label: "YouTube" },
              ].map(({ icon: Icon, color, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className={`
                    w-9 h-9 rounded-lg flex items-center justify-center
                    bg-white/10 border border-white/10
                    ${color} hover:border-transparent
                    transition-all duration-200 active:scale-90
                  `}
                >
                  <Icon size={17} />
                </button>
              ))}
            </div>
          </div>

          {/* Company */}
          <FooterLinkColumn title="Company" links={footerProductLinks} />

          {/* Shop */}
          <FooterLinkColumn title="Shop" links={footercompanyLinks} />

          {/* Support */}
          <FooterLinkColumn title="Support" links={footerSupportLinks} />
        </div>
      </div>

      {/* ── Divider ───────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10">
        <div className="border-t border-white/10" />
      </div>

      {/* ── Bottom Bar ────────────────────────────────────── */}
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-[0.78rem]">

          <p>© 2026 <span className="text-white/70 font-semibold">Eramart</span>. All rights reserved.</p>

          <div className="flex items-center gap-1">
            {["Terms", "Privacy", "Cookie Policy"].map((item, i, arr) => (
              <React.Fragment key={item}>
                <Link
                  href={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="hover:text-white transition-colors px-2 py-1 rounded-md hover:bg-white/5"
                >
                  {item}
                </Link>
                {i < arr.length - 1 && <span className="text-white/20">·</span>}
              </React.Fragment>
            ))}
          </div>

          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt="Accepted payment methods"
            className="h-6 opacity-60 hover:opacity-90 transition-opacity"
          />
        </div>
      </div>
    </footer>
  );
};

/* ── Reusable link column ─────────────────────────── */
const FooterLinkColumn = ({ title, links }) => (
  <div>
    <h3 className="text-[0.75rem] font-extrabold tracking-[0.14em] uppercase text-white/40 mb-5">
      {title}
    </h3>
    <ul className="flex flex-col gap-3">
      {links?.map((item, i) => (
        <li key={i}>
          <Link
            href={item.link || "#"}
            className="
              text-[0.875rem] text-white/65 font-medium
              hover:text-white hover:pl-1
              transition-all duration-150
              flex items-center gap-1.5 group
            "
          >
            <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-150">
              <AiOutlineArrowRight size={11} className="text-[#22c55e]" />
            </span>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;