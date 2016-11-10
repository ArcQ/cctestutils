var config = {
  entry: ['./src/cctestutils.js'],
  output: {
    'filename': './generated/dist/cctestutils.js',
    'libraryTarget': 'commonjs2',
    'library': 'test'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'] 
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
};

if(process.env.NODE_ENV==='dev'){
  config.devtool = 'inline-source-map';
  config.output.filename = './generated/build/cctestutils.js';
}
else if(process.env.NODE_ENV==='dist'){
  config.output.filename = './generated/dist/cctestutils.js';
}

module.exports = config;
