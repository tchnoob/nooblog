const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    publicPath: "/nooblog",
  },
  devServer: {
    proxy: {
      "/post/recent": {
        target: "http://localhost:3000",
        pathRewrite: {
          "/post/recent/": "/post/?_sort=date&_order=desc&_limit=",
        },
      },
      "/post/tag": {
        target: "http://localhost:3000",
        pathRewrite: {
          "/post/tag/": "/post/?tag=",
        },
      },
      "/post/id": {
        target: "http://localhost:3000",
        pathRewrite: {
          "/post/id/": "/post/?id=",
        },
      },
    },
    contentBase: "./src",
    inline: true,
    // disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_module/,
        use: ["babel-loader"],
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};
