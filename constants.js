const path = require('path');

module.exports = {
  ROOT: __dirname,
  ROOT_DIST: path.resolve(__dirname, "dist"),
  PACKAGES: path.resolve(__dirname, "packages"),
  PACKAGE_LIB: path.resolve(__dirname, "packages/lib"),
  PACKAGE_MAIN: path.resolve(__dirname, "packages/main"),
};