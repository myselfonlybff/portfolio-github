const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const basePath = process.env.NODE_ENV === 'production' && repoName ? `/${repoName}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
