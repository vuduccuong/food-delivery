const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development", //production
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    publicPath: "/dist",
    path: path.resolve(__dirname, "dist"),
  },

  devServer: {
    static: __dirname + "/dist/",
    open: true,
    host: "localhost",
    port: 5001,
    https: false,
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        exclude: [/node_modules/],
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      esmodules: true,
                    },
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "index.css",
    }),
  ],
};
