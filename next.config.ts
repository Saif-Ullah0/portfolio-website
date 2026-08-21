const nextConfig = {
  reactStrictMode: false,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;