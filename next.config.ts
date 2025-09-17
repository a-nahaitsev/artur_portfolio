import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config, { dev }) => {
    // only apply in production (build)
    if (!dev) {
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        type: "asset/source", // built-in replacement for raw-loader
      });
    }
    return config;
  },

  turbopack: {
    rules: {
      "*.{glsl,vs,fs,vert,frag}": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
