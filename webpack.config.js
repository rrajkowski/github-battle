var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  //__webpack_public_path__ : 'http://' + process.env.IP || '0.0.0.0:' + process.env.PORT || '8080',
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body',

});

module.exports = {
  devServer:{
    contentBase: PATHS.build,
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || '8080'
  },
  entry: [
    //'webpack-dev-server/client?http://0.0.0.0:80',
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
