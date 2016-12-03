var config = {
  cache: true,
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(bower_components|node_modules|generated)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          cacheDirectory: false,
        },
      },
    ],
  },
};

module.exports = config;
