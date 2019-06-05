const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");

// fix: prevents error when .css files are required by node
if (typeof require !== "undefined") {
  require.extensions[".css"] = file => {};
}

module.exports = {
  distDir: "dist",
  webpack(config, ...args) {
    config = withCss().webpack(config, ...args);
    config = withSass().webpack(config, ...args);
    return config;
  }
};
