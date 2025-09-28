/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.pexels.com" },
      { hostname: "example.com" },      // add other domains here
      { hostname: "cdn.example.net" },  // example additional domain
    ],
  },
};

export default nextConfig;
