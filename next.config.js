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

  // async headers() {
  //   return [
  //     {
  //       // matching all API routes
  //       source: "/",
  //       headers: [
  //         { key: "Access-Control-Allow-Credentials", value: "true" },
  //         { key: "Access-Control-Allow-Origin", value: "*" },
  //         { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
  //         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  //       ]
  //     }
  //   ]
  // }
}

