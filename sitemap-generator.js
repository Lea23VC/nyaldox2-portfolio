// import { configureSitemap } from '@sergeymyssak/nextjs-sitemap'; // for typescript
const { configureSitemap } = require('@sergeymyssak/nextjs-sitemap');

const Sitemap = configureSitemap({
  baseUrl: 'https://daguito.online',
  exclude: ['/api/*'],
  excludeIndex: true,
  pagesConfig: {
    '/projects/*': {
      priority: '0.5',
      changefreq: 'daily',
    },
  },
  isTrailingSlashRequired: true,
  targetDirectory: __dirname + '/public',
  pagesDirectory: __dirname + '/pages',
});
Sitemap.generateSitemap();