var path = require('path');

module.exports = function (config) {
  config.set({
    basePath:'../',
    browsers: ['PhantomJS2'],
    coverageReporter: {
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'text'},
      ],
    },
    files: [
      {pattern: 'node_modules/cc2dhtml5/CCBoot.js', watched: false, served: true},
      {pattern: 'node_modules/cc2dhtml5/moduleConfig.json', watched: false, served: true, included: false},
      {pattern: 'src/index.html', watched: false, served: true},
      {pattern: 'src/project.json', watched: false, served: true, included: false},
      'test/tests.bundle.js',
    ],
    proxies: {
      '/project.json':'/base/src/project.json',
      '/frameworks/cocos2d-html5/moduleConfig.json':'/base/node_modules/cc2dhtml5/moduleConfig.json'
    },
    frameworks: [
      'jasmine',
    ],
    preprocessors: {
      'test/tests.bundle.js': ['jshint', 'webpack', 'sourcemap'],
    },
    reporters: ['spec', 'coverage'],
    jshintPreprocessor: {
      jshintrc: '.jshintrc'
    },
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /\.spec\.js$/,
            include: /test/,
            exclude: /(bower_components|node_modules)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
          {
            test: /\.js?$/,
            include: /src/,
            exclude: /(node_modules|bower_components|__tests__)/,
            loader: 'babel-istanbul',
            query: {
              cacheDirectory: true,
            },
          },
        ],
        loaders: [
          {
            test: /\.js$/,
            include: path.resolve(__dirname, './src'),
            exclude: /(bower_components|node_modules|__tests__)/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
        ],
      },
    },
  });
};
