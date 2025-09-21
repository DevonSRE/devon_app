import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["drive.google.com"],
    // remotePatterns: [new URL('https://drive.google.com/file/d/**')],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drive.google.com",
        port: "",
        pathname: "/file/d/**",
        search: "",
      },
    ],
  },
};

// export default nextConfig;

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
