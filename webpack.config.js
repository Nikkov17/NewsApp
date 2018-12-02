const path = require('path');

const PATHS = {
  source: path.join(__dirname, ''),
  build: path.join(__dirname, 'build'),
};

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, ''),
    compress: true,
    port: 9000,
    stats: 'errors-only'
  },
  entry: {
    index: `${PATHS.source}/app/index.js`
  },
  output: {
    path: PATHS.build,
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/build' 
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
            "style-loader",
            "css-loader",
            "sass-loader"
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.json$/,
        loader: path.resolve('./utils/jsonloader.js')
      }
    ],
  }
};