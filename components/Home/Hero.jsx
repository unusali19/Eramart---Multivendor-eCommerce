import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-cover bg-center md:min-h-[65vh]"
      style={{
        backgroundImage:
          "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">
          
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Best Collection for <br />
            Home Decoration
          </h1>

          <p className="mt-4 text-sm leading-6 text-gray-200 sm:text-base md:text-lg">
            Discover premium quality home decor products that bring elegance,
            comfort, and modern style to your living space.
            Shop the latest trends with unbeatable prices.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
            >
              Shop Now
            </Link>

            <Link
              href="/categories"
              className="rounded-xl border border-white px-6 py-3 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              View Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;