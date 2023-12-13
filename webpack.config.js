const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    "lit-select": ["./src/lit-select.js"],
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
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'lit-css-loader',
        options: {
          specifier: 'lit-element' // defaults to `lit`
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-inline-loader",
          },
        ],
      },
      {
        test: /\.(woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "fonts/", // Puedes cambiar la carpeta de salida según tus necesidades
          },
        },
      },
    ],
  },
};
