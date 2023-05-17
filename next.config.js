/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output:'export',
  images:{
    domains:['maxv2.apexmaicol.online'],
    unoptimized:true
  }
}

module.exports = nextConfig
