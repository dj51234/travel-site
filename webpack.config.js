module.exports = {
  entry: "./app/assets/js/app.js",
  output:  {
    filename: "app/temp/assets/js/bundle.js"
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
