/** @type {import('next').NextConfig} */
const nextConfig = {
  // The CV lives at /en and /pt; send the bare domain to English
  async redirects() {
    return [{ source: "/", destination: "/en", permanent: false }];
  },
};

export default nextConfig;
