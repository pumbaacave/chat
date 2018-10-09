module.exports = {
  mode: "development",
  entry: ["./js/index.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "./../priv/static/js"
  },
	module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: "web",
  devtool: "eval-source-map"
};
