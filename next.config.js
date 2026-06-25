/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Instagram Graph API-аас ирэх медиа URL-ууд динамик domain-той тул
      // wildcard-аар зөвшөөрнө. Production дээр илүү нарийн scrap.fbcdn.net
      // тодорхой domain-уудаар хязгаарлахыг зөвлөж байна.
      { protocol: "https", hostname: "**.cdninstagram.com" },
      { protocol: "https", hostname: "**.fbcdn.net" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
};

module.exports = nextConfig;
