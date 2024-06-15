import createNextIntlPlugin from 'next-intl/plugin';
// import pwa from 'next-pwa';

// const withPWA = pwa({
//   dest: 'public',
//   // register: true,
//   // skipWaiting: true,
//   disable: process.env.NODE_ENV === 'development',
  
// });

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextIntl(nextConfig);
