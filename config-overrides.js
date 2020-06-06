const {
  override,
  fixBabelImports,
  addDecoratorsLegacy,
  addLessLoader,
} = require("customize-cra");
const modifyVars = require('./nx')
module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars
  })
);
