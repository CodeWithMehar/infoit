/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'img.icons8.com',
      'cdn.pixabay.com',
      'wpdemo.archiwp.com',
      'media.istockphoto.com',
      'secaitech.com',
      'cdn-icons-gif.flaticon.com',
      'infoitexpert.com',
      'img.freepik.com',
      'demo.bravisthemes.com',
    ],
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // yahan hona chahiye, sirf yahan
  },
  experimental: {
    allowFutureImage: true, // sirf ye line allowed hai
  },
};

module.exports = nextConfig;
