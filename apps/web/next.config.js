/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io"],
    loader: "custom",
  },
  // future: { webpack5: true },
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false, module: false };

  //   return config;
  // },
};
