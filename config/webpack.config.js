var config = {
  entry: ['./src/Calculator.js'],
  output: {
    'filename': './generated/dist/calculator.js',
    'libraryTarget': 'commonjs2',
    'library': 'calculator'
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
  config.devtool = 'inline-source-map';
  config.output.filename = './generated/build/calculator.js';
}
else if(process.env.NODE_ENV==='dist'){
  config.output.filename = './generated/dist/calculator.js';
}

module.exports = config;
