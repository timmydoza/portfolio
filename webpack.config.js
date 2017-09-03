var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': '"' + process.env.NODE_ENV + '"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer
        ],
        context: __dirname //https://github.com/webpack-contrib/css-loader/issues/413#issuecomment-283944881
      }
    })
  ],

  entry: './src/entry.js',

  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },

  module: {
    rules: [
      {
        exclude: /\node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.scss$/,
        loaders: [
          "style-loader?source-map",
          "css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]",
          { loader: "postcss-loader", options: {sourceMap: true}},
          { loader: "sass-loader?sourceMap", options: {includePaths: ['./src/sass']}}
        ]
      },

      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
        query: {
          name: 'img/[name].[hash:8].[ext]'
        }
      }
    ]
  }
}
