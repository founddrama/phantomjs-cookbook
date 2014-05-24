/**
 * PhantomJS Cookbook
 * Chapter 7 | Generating Images and Documents with PhantomJS
 * Recipe 2  | Saving images as Base64 from PhantomJS
 */
var webpage = require('webpage').create(),
    args    = require('system').args,
    format  = args[1] || 'jpeg';

webpage.viewportSize = { width: 1024, height: 768 };

webpage.open('http://localhost:3000/', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  console.log(webpage.renderBase64(format));

  phantom.exit();
});