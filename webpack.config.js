var config = {
  entry: ['./src/main.js'],
  output: {
    'filename': './dist/test.js',
    'libraryTarget': 'commonjs2',
    'library': 'test'
  },
  module: {
    loaders: [
      {
        test: /\.es6/,
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
  console.log('webpack in development mode');
  config.devtool = 'inline-source-map';
  config.output.filename = './build/calculator.js';
}
else if(process.env.NODE_ENV==='dist'){
  config.output.filename = './dist/calculator.js';
}

module.exports = config;
