/** @type {import('next').NextConfig} */

const nextConfig = {

  allowedDevOrigins: ['13.232.215.228'],

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },

}

export default nextConfig
