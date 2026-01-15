import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/content/:path*.mdx',
        destination: '/llms.mdx/content/:path*',
      },
    ];
  },
};

export default withMDX(config);
