/*jshint phantom:true, devel:true */
/**
 * PhantomJS Cookbook
 * Chapter 1 | Getting Started with PhantomJS
 * Recipe 8  | Debugging a PhantomJS script
 */
var page = require('webpage').create();

page.onResourceReceived = function(res) {
  if (res.stage === 'end') {
    console.log(JSON.stringify(res, undefined, 2));
  }
};

page.open('http://localhost:3000/cache-demo', function(status) {
  if (status === 'success') {
    console.log('All done.');
    phantom.exit();
  } else {
    console.error('Could not open page! (Is it running?)');
    phantom.exit(1);
  }
});