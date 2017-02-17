var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.scss$/, exclude: /node_modules/, loaders: ["style-loader", "css-loader", "sass-loader"]},
      {test: /\.jpg$/, loader: "file-loader"}
    ],
    // rules: [{
    //   test: /\.scss$/,
    //   use: [{
    //       loader: "style-loader" // creates style nodes from JS strings
    //   }, {
    //       loader: "css-loader" // translates CSS into CommonJS
    //   }, {
    //       loader: "sass-loader" // compiles Sass to CSS
    //   }]
    // }]
  },
  plugins: [HTMLWebpackPluginConfig]
};
