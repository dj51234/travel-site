module.exports = {
  entry: {
    app: "./app/assets/js/app.js",
    vendor: "./app/assets/js/vendor.js"
  },
  output:  {
    path: __dirname + "/app/temp/assets/js",
    filename: "[name].js"
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: 'es2015'
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}
