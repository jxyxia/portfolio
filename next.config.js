const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static export mode
  images: {
    unoptimized: true, // ✅ Disable image optimization for static export
    domains: ["images.unsplash.com"], // If you're using images from Unsplash
  },
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio" : "",
};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig.experimental = {
    swcPlugins: [[require.resolve("tempo-devtools/swc/0.90"), {}]],
  };
}

module.exports = nextConfig;
