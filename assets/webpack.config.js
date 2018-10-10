module.exports = {
  mode: "development",
  entry: ["./src/index.js"],
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
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {url: false}},
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  target: "web",
  devtool: "inline-source-map"
};
