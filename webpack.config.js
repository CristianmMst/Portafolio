const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "src/index.html" }),
<<<<<<< HEAD
    new MiniCssExtractPlugin({ filename: "styles/main.css" }),
  ],
  performance: {
    hints: false,
  },
=======
    new MiniCssExtractPlugin({ filename: "css/main.css" }),
  ],
>>>>>>> 0a11705d97ec97eb839438494dc928e2dc4402f4
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif$)/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/",
              useRelativePath: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [" ", ".js", ".jsx"],
  },
};
