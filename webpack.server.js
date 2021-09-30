//define what we want to tell webpack

const path = require("path");
const webpacknodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node", //targetting node , working with node*(minimize size of bundle)
  entry: "./server.js", //entry point
  output: {
    filename: "bundle.js", //file output by webpack
    path: path.resolve(__dirname, "build"), //where we want it
    publicPath: "/build",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: [
            "react",
            "stage-0",
            [
              "env",
              {
                target: { browers: ["last 2 versions"] }, //support only last 2 version of web browsers
              },
            ],
          ],
        },
      },
    ],
  },
  externals: [webpacknodeExternals()],
};
