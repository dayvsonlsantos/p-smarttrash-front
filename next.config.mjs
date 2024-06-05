// next.config.mjs
import dotenv from 'dotenv';
dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://ec2-18-221-92-144.us-east-2.compute.amazonaws.com:8080/ob/:path*`, // Proxy para o backend
      }
    ]
  }
};

export default nextConfig;
