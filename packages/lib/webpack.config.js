const path = require("path");

const VARS = {
  PACKAGE: __dirname,
  DIST: path.resolve(__dirname, "dist")
};

module.exports = {
  entry: "./index.js",
  output: {
    filename: 'lib.js',
    path: VARS.DIST,
    library: 'index',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  resolve: {
    modules: [VARS.PACKAGE, "node_modules"],
    extensions: [".js", ".json"]
  },
  externals: {
    react: "react",
    lodash: "lodash"
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
      }
    ]
  }
};
