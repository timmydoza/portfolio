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
        loaders: ["style", "css", "sass"]
      },

      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file'
        // query: {
        //   name: 'static/media/[name].[hash:8].[ext]'
        // }
      }
    ]
  }
}
