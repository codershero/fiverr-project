/** @type {import('next').NextConfig} */
const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPlugins([
  [
    withPWA,
    {
      pwa: {
        disable: process.env.NODE_ENV === "development",
        dest: "public",
        runtimeCaching,
        buildExcludes: [/middleware-manifest\.json$/],
      },
    },
  ],
  {
    images: {
      domains: ["cdn.sanity.io"],
      loader: "akamai",
      path: "",
    },
  },
  {
    reactStrictMode: true,
  },
]);
