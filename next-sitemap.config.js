/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nowhow.ai',
  generateRobotsTxt: true,
  exclude: [
    '/admin*', 
    '/api*', 
    '/my-portfolio', 
    '/auth/*', 
    '/profile*',
    '/create-use-case'
  ],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.nowhow.ai'}/api/sitemap.xml`,
    ],
    policies: [
      { userAgent: '*', allow: '/' },
      { 
        userAgent: '*', 
        disallow: [
          '/admin', 
          '/api/*', 
          '/my-portfolio',
          '/auth/*',
          '/profile',
          '/create-use-case'
        ] 
      },
    ]
  },
}