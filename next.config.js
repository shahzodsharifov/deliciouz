/** @type {import('next').NextConfig} */
 const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents:  true | {
      ssr: "false",
      displayName: "false"
    }
  },
  i18n: {
    locales: ["uz" , "ru", "en"],
    defaultLocale: "uz",
    localeDetection: false,
  }
}

export default nextConfig
 
