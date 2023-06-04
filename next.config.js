/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const StylelintPlugin = require('stylelint-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
    config.plugins.push(new StylelintPlugin());
    return config;
  },
};

module.exports = nextConfig;
