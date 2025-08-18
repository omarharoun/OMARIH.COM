/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["ui"],
  experimental: {
    optimizePackageImports: ["react-native-web"],
  },
  webpack: (config) => {
    // Alias react-native to react-native-web for web build
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      'react-native$': 'react-native-web',
    };
    return config;
  },
};
module.exports = nextConfig;
