var path = require('path');
var webpackConfig = require('./webpack.test.config.js');
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    basePath:'../',
    browsers: ['PhantomJS2'],
    coverageReporter: {
      reporters: [
        { type: 'text'},
      ],
    },
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      {pattern: 'node_modules/cc2dhtml5/CCBoot.js', watched: false, served: true, included:true},
      {pattern: 'node_modules/cc2dhtml5/**/*.js', watched: false, served: true, included: false},
      {pattern: 'node_modules/cc2dhtml5/moduleConfig.json', watched: false, served: true, included: false},
      {pattern: 'src/startup/cocos2d/**/*.*', watched: false, served: true, included: false},
      {pattern: 'src/test/res/**/*.png', watched: false, served: true, included: false},
      'test/tests.bundle.js',
    ],
    proxies: {
      '/project.json':'/base/src/startup/cocos2d/project.json',
      '/base/test/resource.js':'/base/src/startup/cocos2d/resource.js',
      '/base/test/res/':'/base/src/test/res/',
      '/frameworks/cocos2d-html5/':'/base/node_modules/cc2dhtml5/'
    },
    frameworks: [
      'jasmine',
    ],
    preprocessors: {
      'test/tests.bundle.js': ['webpack', 'sourcemap'],
    },
    reporters: ['spec', 'coverage'],
    webpack: webpackConfig,
  });
  // Only include coverage if we are not in debug mode
  if (process.env.NODE_ENV ==='dist') {
    webpackConfig.module.preLoaders =  [
      {
        test: /\.js?$/,
        include: /src/,
        exclude: /(node_modules|bower_components|__tests__)/,
        loader: 'babel-istanbul',
        query: {
          cacheDirectory: true,
        },
      },
    ]
    config.set({
      reporters: ['coverage', 'spec'],
      coverageReporter: {
        reporters: [
          { type: 'text'},
        ],
      },
      webpack: webpackConfig
    });
  }
};
