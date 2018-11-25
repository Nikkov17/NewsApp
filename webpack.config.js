const path = require('path');

const PATHS = {
  source: path.join(__dirname, ''),
  build: path.join(__dirname, 'docs'),
};

module.exports = {
  mode: 'production',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000,
    stats: 'errors-only'
  },
  entry: `${PATHS.source}/js/index.js`,
  output: {
    path: PATHS.build,
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
    ],
  }
};