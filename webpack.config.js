var autoprefixer = require('autoprefixer');

module.exports = {
  entry: './src/js/app.jsx',

  output: {
    filename: 'bundle.js',
    path: './build'
  },

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /\node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.scss$/,
        loaders: ["style", "css", "postcss", "sass"]
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
