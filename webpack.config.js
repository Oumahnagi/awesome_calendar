const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:"development",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title:"custom template",
      template:"./src/public/index.html"
    })
    ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 2001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
},

}
