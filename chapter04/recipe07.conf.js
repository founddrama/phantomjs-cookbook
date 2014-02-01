module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: ['../lib/string-utils*.js'],
    preprocessors: {
      '../lib/string-utils.js': 'coverage'
    },
    port: 9876,
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    colors: true,
    browsers: ['PhantomJS'],
    captureTimeout: 60000,
    singleRun: true
  });
};
