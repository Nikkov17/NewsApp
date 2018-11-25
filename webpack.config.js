const path = require('path');

const PATHS = {
  source: path.join(__dirname, ''),
  build: path.join(__dirname, 'docs'),
};

module.exports = {
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