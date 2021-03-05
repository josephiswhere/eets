const path = require("path");
// const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: { path: path.resolve(__dirname, "build"), filename: "bundle.js" },
  mode: process.env.NODE_ENV || "development",
  // target: 'node',
  devServer: {
    contentBase: path.join(__dirname, "src"),
    publicPath: "/",
    proxy: {
      "/api/*": {
        target: "http://[::1]:3000",
        changeOrigin: true,
        secure: false,
        logLevel: "debug",
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/plugin-proposal-class-properties"], //Babel will know how to deal with class properties.
          },
        },
      },
      {
        test: /\.scss?/,
        // exclude: /\.module\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    // fallback: {
    //   "fs": false
    // },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
