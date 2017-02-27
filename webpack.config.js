
var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const path = require('path');
const webpack = require('webpack');
module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module:{
    rules:[
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.(jpg|png)$/, loader: "file-loader"},
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};



// var HtmlWebpackPlugin = require('html-webpack-plugin')
// var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
//   template: __dirname + '/app/index.html',
//   filename: 'index.html',
//   inject: 'body'
// });
//
// module.exports = {
//   entry: [
//     './app/index.js'
//   ],
//   output: {
//     path: __dirname + '/dist',
//     filename: "index_bundle.js"
//   },
//   module: {
//     loaders: [
//       {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
//       {test: /\.scss$/, exclude: /node_modules/, loaders: ["style-loader", "css-loader", "sass-loader"]},
//       {test: /\.jpg$/, loader: "file-loader"}
//     ],
//     // rules: [{
//     //   test: /\.scss$/,
//     //   use: [{
//     //       loader: "style-loader" // creates style nodes from JS strings
//     //   }, {
//     //       loader: "css-loader" // translates CSS into CommonJS
//     //   }, {
//     //       loader: "sass-loader" // compiles Sass to CSS
//     //   }]
//     // }]
//   },
//   plugins: [HTMLWebpackPluginConfig]
// };
