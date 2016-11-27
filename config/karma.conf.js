var path = require('path');

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
      {pattern: 'node_modules/cctestutils/cocos2d/**/*.*', watched: false, served: true, included: false},
      {pattern: 'node_modules/cctestutils/res/**/*.png', watched: false, served: true, included: false},
      'test/tests.bundle.js',
    ],
    proxies: {
      '/project.json':'/base/node_modules/cctestutils/cocos2d/project.json',
      '/base/test/resource.js':'/base/node_modules/cctestutils/cocos2d/resource.js',
      '/base/test/res/':'/base/node_modules/cctestutils/res/',
      '/frameworks/cocos2d-html5/':'/base/node_modules/cc2dhtml5/'
    },
    frameworks: [
      'jasmine',
    ],
    preprocessors: {
      'test/tests.bundle.js': ['webpack', 'sourcemap'],
    },
    reporters: ['spec', 'coverage'],
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
