const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  entry: {
    index: "./src/main.ts",
  },
  output: {
    filename: "build.[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        exclude: /.node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  mode: "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".vue"],
  },
  devServer: {
    port: 3034,
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
    }),
    new VueLoaderPlugin(),
  ],
};
