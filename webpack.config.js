const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    "lit-select": ["./src/lit-select-nuevo.js"],
  },
  output: {
    filename: "bundle[contenthash].js",
  },
  devServer: {
    static: { directory: path.resolve(__dirname, "dist") },
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Lite App",
      filename: "index.html",
      template: "src/template.html",
      hash: true,
    }),
    new CleanWebpackPlugin(),
  ],
};
