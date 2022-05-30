/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');
dotenv.config({path:".env"});

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['s2.coinmarketcap.com', 's3.coinmarketcap.com', 'cdn.sanity.io', 'encrypted-tbn0.gstatic.com','assets.coingecko.com','thumbnail.imgbin.com']
  },
  env: {
    NEXT_PUBLIC_SERVER: process.env.NEXT_PUBLIC_SERVER,
    NEXT_PUBLIC_APP_ID: process.env.NEXT_PUBLIC_APP_ID,
    NEXT_BACKEND_CMC_API_KEY: process.env.NEXT_BACKEND_CMC_API_KEY,
  }
}
