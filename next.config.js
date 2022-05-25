/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['s2.coinmarketcap.com', 's3.coinmarketcap.com', 'cdn.sanity.io', 'encrypted-tbn0.gstatic.com']
  },
  env: {
    NEXT_PUBLIC_SERVER: process.env.NEXT_PUBLIC_SERVER,
    NEXT_PUBLIC_APP_ID: process.env.NEXT_PUBLIC_APP_ID
  }
}
