/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "indian-retailer.s3.ap-south-1.amazonaws.com" },
      { protocol: "https", hostname: "img.freepik.com" },
      { protocol: "https", hostname: "www.shift4shop.com" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
      { protocol: "https", hostname: "securecdn.pymnts.com" },
      { protocol: "https", hostname: "cdn.openpr.com" },
      { protocol: "https", hostname: "st-troy.mncdn.com" },
      { protocol: "https", hostname: "static.vecteezy.com" },
      { protocol: "https", hostname: "searchspring.com" },
    ],
  },
};

export default nextConfig;
