/*
 * @Author: liub
 * @Date: 2019-10-11 17:13:10
 * @LastEditors  : liub
 * @LastEditTime : 2020-03-13 14:00:52
 */
const path = require("path")
module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
}
