const webpack = require('webpack');

const devConfig = {
  mode: 'development', 
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port:8080,
    hot: true,
    // hotOnly: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
            }
          },
        'sass-loader', 
        'postcss-loader',
        ]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  }
}

module.exports = devConfig;