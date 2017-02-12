// Karma configuration

var path = require("path");

module.exports = function(config) {

  var sourcePreprocessors = ['webpack', 'coverage'];
  var sourceReporters = ['progress', 'istanbul']

  function isDebug(argument) {
    return argument === '--debug';
  }

  if (process.argv.some(isDebug)) {
    sourcePreprocessors = ['webpack'];
    sourceReporters = ['progress'];
  }

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-route/angular-route.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'admin/admin.js',
      'admin/tests/tests.webpack.js'
    ],

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'admin/admin.js': sourcePreprocessors,
      'admin/tests/tests.webpack.js': ['webpack']
    },

    webpack: {
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel',
        }, {
          loader: "style-loader!css-loader!less-loader",
          test: /\.less$/,
        }
          , {
          test: /\.html$/,
          loader: 'raw-loader'
        }],

        postLoaders: [{ //delays coverage til after tests are run, fixing transpiled source coverage error
          test: /\.js$/,
          loader: 'istanbul-instrumenter',
          include: path.resolve('admin/'),
        }]
      },

      noParse: /angular\/angular.js/
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: sourceReporters,

    istanbulReporter: {
      dir: 'coverage',
      reporters: [
        { type: 'html', subdir: '.' },
        { type: 'text' }
      ]
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
