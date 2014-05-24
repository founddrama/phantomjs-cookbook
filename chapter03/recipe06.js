/*jshint devel:true, phantom:true */
/**
 * PhantomJS Cookbook
 * Chapter 3 | Working with webpage Objects
 * Recipe 6  | Recording debugger messages
 */
var webpage = require('webpage').create();

webpage.onConsoleMessage = function(message, lineNum, sourceId) {
  console.log('[phantomjs:page] ' + message);
};

webpage.evaluate(function(url) {
  console.log('Hello from inside of ' + url);
}, webpage.url);

phantom.exit();
