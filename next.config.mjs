import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  routeRules: {
    '/': {
      redirect: '/content/blog' // или 'https://example.com'
    },
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
