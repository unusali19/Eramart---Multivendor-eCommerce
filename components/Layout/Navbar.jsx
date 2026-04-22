import React from "react";
import Link from "next/link";
import { navItems } from "../staticData/data";

const Navbar = ({ active, mobile = false }) => {
  if (mobile) {
    return (
      <nav className="flex flex-col gap-0.5">
        {navItems?.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className={`
              flex items-center px-3 py-2.5 rounded-xl text-[0.875rem] font-semibold
              transition-all duration-150
              ${active === index + 1
                ? "bg-[#EEF0FD] text-[#1a0ea6]"
                : "text-gray-700 hover:bg-gray-50 hover:text-[#1a0ea6]"
              }
            `}
          >
            {active === index + 1 && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#1a0ea6] mr-2.5 shrink-0" />
            )}
            {item.title}
          </Link>
        ))}
      </nav>
    );
  }

  // Desktop / nav bar variant
  return (
    <nav className="flex items-center gap-1">
      {navItems?.map((item, index) => (
        <Link
          key={index}
          href={item.url}
          className={`
            relative px-4 py-1.5 rounded-lg text-[0.875rem] font-semibold
            transition-all duration-150 whitespace-nowrap
            ${active === index + 1
              ? "text-white bg-white/15"
              : "text-white/80 hover:text-white hover:bg-white/10"
            }
          `}
        >
          {item.title}
          {active === index + 1 && (
            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#22c55e]" />
          )}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;