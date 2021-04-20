const globby = require('globby');

const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');

// pages that should not be in the sitemap
const blocklist = ['/newsletter-success', '/404'];

async function generateSitemap() {
  
}

export default generateSitemap;