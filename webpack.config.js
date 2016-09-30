module.exports = {
  entry: [ "./src/app.js" ]
  , module: {
    loaders: [
      {
        test: /\.js/
        , exclude: /node_modules/
        , loader: "babel"
      }
      , {
        test: /\.css/
        , exclude: /node_modules/
        , loader: "style!css"
      }
      , {
        test: /\.html$/
        , loader: "html"
      }
    ]
  }
  , resolve: {
    extensions: [ "", ".js", ".css" ]
  }
  , output: {
    path: __dirname + "/"
    , filename: "bundle.js"
  }
};