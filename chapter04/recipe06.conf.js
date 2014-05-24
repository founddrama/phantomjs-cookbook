/**
 * PhantomJS Cookbook
 * Chapter 4 | Unit Testing with PhantomJS
 * Recipe 6  | Running Jasmine unit tests with the Karma test runner
 */
module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    files: [
      '../lib/string-utils.js',
      '../lib/string-utils-spec.js'
    ],
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
