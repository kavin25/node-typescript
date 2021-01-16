const path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = {
  mode: "production",
  devtool: "eval-source-map",
  entry: "./src/app.ts",
  target: "node",
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: path.resolve(__dirname, "node_modules"),
        include: [path.resolve(__dirname, "src")],
      },
    ],
  },
  output: {
    publicPath: "/",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devServer: {
    publicPath: "/",
    contentBase: "dist",
    hot: true,
  },
};
