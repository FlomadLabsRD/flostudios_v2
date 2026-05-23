import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "flotravel.com" },
      { protocol: "https", hostname: "caipo.ai" },
      { protocol: "https", hostname: "moodchanger.ai" },
      { protocol: "https", hostname: "robocollective.ai" },
      { protocol: "https", hostname: "flolabs.international" },
    ],
  },
};

export default nextConfig;
