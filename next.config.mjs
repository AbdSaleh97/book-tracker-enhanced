/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'cdn.rareblocks.xyz', 
        'example.com', 
        'th.bing.com', // Add the domain here
      ],
      deviceSizes: [640, 768, 1024, 1280],
      imageSizes: [16, 32, 48, 64, 96],
    },
  };
  
  export default nextConfig;
  