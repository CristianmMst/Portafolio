const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const DovEnv = require("dotenv-webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "assets/images/[name][ext]",
  },
  plugins: [
    new DovEnv(),
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new MiniCssExtractPlugin({ filename: "styles/main.css" }),
  ],
  module: {
    rules: [
      {
        test: /\.js|.jsx$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
        },
      },
      {
        test: /.(css|sass|scss)$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        type: "asset",
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "image-webpack-loader",
        options: {
          mozjpeg: {
            progressive: true,
            quality: 65,
          },
          optipng: {
            enabled: true,
          },
          pngquant: {
            quality: [0.65, 0.9],
            speed: 4,
          },
          gifsicle: {
            interlaced: false,
          },
          webp: {
            quality: 75,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [" ", ".js", ".jsx"],
  },
};
