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
