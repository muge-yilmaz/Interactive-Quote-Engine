/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // TypeScript hatalarını derleme anında yoksayar
    ignoreBuildErrors: true,
  },
  eslint: {
    // ESLint uyarılarını derleme anında yoksayar
    ignoreDuringBuilds: true,
  },
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;
