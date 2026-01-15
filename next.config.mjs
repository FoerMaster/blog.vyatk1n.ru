import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/content/blog',
        permanent: true,
      },
    ]
  },
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
