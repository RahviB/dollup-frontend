import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // 🛍 Allow WooCommerce product images from your domain
    domains: ["dollupboutique.com"],
    formats: ["image/avif", "image/webp"], // ✅ still valid for modern image formats
  },
  // ✅ No need for experimental.appDir — it's default in Next 13+
};

export default nextConfig;
