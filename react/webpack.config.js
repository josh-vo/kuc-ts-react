const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = (env = {}) => {
  return {
    entry: {
      react: path.resolve("react/index.tsx")
    },
    output: {
      filename: "[name].js",
      path: path.resolve("build/react")
    },
    devtool: "source-map",
    devServer: {
      open: true,
      port: 8080,
      historyApiFallback: true,
      watchOptions: {
        poll: true
      }
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: path.resolve(__dirname, "index.html"),
        filename: "index.html"
      })
    ],
    resolve: {
      extensions: [".tsx", ".ts", ".js", ".css",".jsx"]
    },
    module: {
      rules: [
        {
          test: /\.(tsx|jsx|js)$/,
          use: [
            {
              loader: "babel-loader"
            }
          ]
        },
        {
          test: /\.css$/,
          use: [{ loader: "style-loader" }, { loader: "css-loader" }]
        }
      ]
    },

    // watch: env.watch,
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          include: /\.min\.js$/
        })
      ]
    }
  };
};
