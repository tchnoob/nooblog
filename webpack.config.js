var path = require("path");

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "public"),
    publicPath: "/",
    // host: "localhost",
    overlay: true,
    port: 3000,
    // stats: "errors-only",
    // historyApiFallback: true,
    inline: true,
    hot: true,
  },
  entry: {
    bundle: "./src/index.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        // include: /stylesheets|node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
};
