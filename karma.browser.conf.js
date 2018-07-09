// Karma configuration
// Generated on Tue Dec 22 2015 13:52:35 GMT+0100 (CET)
/* eslint-disable */

var serverInfo  = require('./test/server.integration.json');
var buildFile   = 'karma.browser.js';

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],
    // list of files / patterns to load in the browser
    files: [
      'dist/' + buildFile,
      'test/bootstrap.js',
      'test/spec/**/*.spec.js'
    ],
    // list of files to exclude
    exclude: [
    ],
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: [ 'progress', 'coverage-istanbul' ],
    coverageIstanbulReporter: {
      reports: [ 'lcov', 'html' ],
      fixWebpackSourcePaths: true
    },
    // web server port
    port: 9876,
    proxies: {
      '/rest': serverInfo.host + ':' + serverInfo.port + '/rest'
    },
    // enable / disable colors in the output (reporters and logs)
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,
    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJSCustom'],
    customLaunchers: {
      PhantomJSCustom: {
        base:'PhantomJS',
        debug: false,
        options: {
          onCallback: function (data) {
            if (data.type === 'clearCookies') {
              page.clearCookies();
            }
          }
        }
      }
    },
    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,
    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
