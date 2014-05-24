/**
 * PhantomJS Cookbook
 * Chapter 4 | Unit Testing with PhantomJS
 * Recipe 7  | Generating code coverage reports with Istanbul and the Karma test runner
 */
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      '../lib/string-utils.js',
      '../lib/string-utils-spec.js'
    ],
    preprocessors: {
      '../lib/string-utils.js': 'coverage'
    },
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      type: 'html',
      dir: 'coverage/'
    },
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
