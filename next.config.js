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
    formats: ['image/avif', 'image/webp'],  // support modern formats
    unoptimized: true, // <-- directly yahan rakhna hai, experimental ke andar nahi
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
};

module.exports = nextConfig;
