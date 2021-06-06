module.exports = {
  future: {
    webpack5: false,
  },
  images: {
    domains: ['i.imgur.com'],
  },
  use: [
    { loader: 'style-loader' },
    { loader: 'css-loader', options: { modules: true, importLoaders: 1, sourceMap: true } }
  ],
  experimental: {
    optimizeFonts: true,
    optimizeImages: true
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

