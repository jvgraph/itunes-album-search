// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin"); //  -> ADDED IN THIS STEP

// Constant with our paths
const paths = {
  DIST: path.resolve(__dirname, "dist"),
  SRC: path.resolve(__dirname, "src"),
  JS: path.resolve(__dirname, "src/js")
};

// Webpack configuration
module.exports = {
  entry: path.join(paths.SRC, "index.js"),
  output: {
    path: paths.DIST,
    filename: "app.bundle.js"
  },
  // Tell webpack to use html plugin
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(paths.SRC, "index.html")
    }),
    new ExtractTextPlugin("app.bundle.css"), // CSS will be extracted to this bundle file -> ADDED IN THIS STEP
    new webpack.ProvidePlugin({
      React: "react",
      ReactDOM: "react-dom",
      PropTypes: "prop-types",
      _: "lodash",
      classNames: "classnames",
      queryString: "query-string"
    })
  ],
  // Loaders configuration
  // We are telling webpack to use "babel-loader" for .js and .jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      // CSS loader for CSS files
      // Files will get handled by css loader and then passed to the extract text plugin
      // which will write it to the file we defined above
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      // File loader for image assets -> ADDED IN THIS STEP
      // We'll add only image extensions, but you can things like svgs, fonts and videos
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: ["file-loader"]
      }
    ]
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true
  },
  resolve: {
    extensions: [".js", ".jsx"]
  }
};
