const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    typescript: path.resolve("typescript/index.ts")
  }, 
  output: {
    filename: "[name].js",
    path: path.resolve("build/typescript")
  },
  devServer: {
    watchOptions: {
      poll: true
    },
    open: true,
    port: 8081
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "index.html"),
      filename: "index.html"
    })
  ]
};
