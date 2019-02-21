const path = require("path");

// plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");

const CONSTANTS = require("../../constants.js");

const htmlPluginSettings = {
  inject: true,
  hash: true,
  template: path.resolve(__dirname, "index.html")
};

module.exports = {
  entry: "./index.js",
  output: {
    filename: 'main.js',
    path: CONSTANTS.ROOT_DIST,
  },
  resolve: {
    modules: [__dirname, "node_modules"],
    extensions: [".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      ...htmlPluginSettings,
      filename: "index.html"
    })
  ]
};
