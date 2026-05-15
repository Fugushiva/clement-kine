/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://clement-geneau.vercel.app',
  generateRobotsTxt: false,
  exclude: ['/mentions-legales', '/politique-confidentialite', '/politique-cookies'],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', disallow: '/' }],
  },
}
