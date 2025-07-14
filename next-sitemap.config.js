/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://mighty-five-agency.vercel.app', // ✅ your live URL
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/admin', '/api'],
};
