/** @type {import('next').NextConfig} */
const nextConfig = {
     module: {
    rules: [
      {
        test: /\.node$/,
        use: 'file-loader',
      },
      // ... other rules ...
    ],
  },
}

module.exports = nextConfig
