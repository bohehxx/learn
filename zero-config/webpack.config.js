const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
  entry: "./src/index.js",
  mode: "development",
  devtool: false,
  plugins: [
    // 添加 plugin
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebPackPlugin({template: './src/index.html'}),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    hot:true,
},
  module: {
    rules: [
        {
            test: /\.js$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [path.resolve(__dirname, 'src')], // 指定检查的目录
          
        },
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader"
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          "less-loader" // 将 Less 编译为 CSS
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      }
    ]
  }
};
