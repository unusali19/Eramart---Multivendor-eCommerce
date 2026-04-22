import React from "react";

const Sponsored = () => {
  const brands = [
    {
      name: "Sony",
      img: "https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png",
    },
    {
      name: "Dell",
      img: "https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png",
    },
    {
      name: "LG",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png",
    },
    {
      name: "Apple",
      img: "https://www.vectorlogo.zone/logos/apple/apple-ar21.png",
    },
    {
      name: "Gift",
      img: "https://static.vecteezy.com/system/resources/previews/011/996/555/original/3d-black-headphone-illustration-ecommerce-icon-png.png",
    },
  ];

  return (
    <div className="hidden sm:block py-12">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title */}
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-8">
          Trusted by Leading Brands
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {brands.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 flex items-center justify-center group cursor-pointer border border-gray-100"
            >
              <img
                src={item.img}
                alt={item.name}
                className="h-10 md:h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsored;