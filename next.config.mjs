/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/v1/search/:path*',
            destination: 'https://openapi.naver.com/v1/search/:path*',
          },
        ];
      },
};

export default nextConfig;
