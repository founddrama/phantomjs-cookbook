/*jshint devel:true, phantom:true*/
/**
 * PhantomJS Cookbook
 * Chapter 3 | Working with webpage Objects
 * Recipe 13 | Submitting Ajax requests from PhantomJS
 */
var webpage = require('webpage').create();

webpage.onResourceReceived = function(response) {
  if (response.stage === 'end') {
    console.log('Content-Type: ' + response.contentType);
  }
};

webpage.open('http://localhost:3000/ajax-demo', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  console.log(webpage.plainText);
  phantom.exit();
});