var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },

  module: {
    loaders: [
      {
        exclude: /\node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.scss$/,
        loaders: ["style", "css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]", "postcss", "sass"]
      },

      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file',
        query: {
          name: 'img/[name].[hash:8].[ext]'
        }
      }
    ]
  },
  postcss: [
    autoprefixer({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ]
    })
  ]
}
