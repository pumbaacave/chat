module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: ["./js/index.js"],
  output: {
    filename: "bundle.js",
    path: __dirname + "./../priv/static/js"
  },
	module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'inline-source-map'
};
