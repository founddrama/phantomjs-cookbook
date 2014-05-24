/*jshint devel:true, phantom:true*/
/**
 * PhantomJS Cookbook
 * Chapter 3 | Working with webpage Objects
 * Recipe 8  | Simulating keyboard input in PhantomJS
 */
var webpage = require('webpage').create();

webpage.viewportSize = { width: 1280, height: 800 };

function getStageValue() {
  return webpage.evaluate(function() {
    return document.querySelector('#stage').innerText || '<BLANK>';
  });
}

webpage.open('http://localhost:3000/input-demo', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  console.log('Starting #stage text is: ' + getStageValue());

  webpage.evaluate(function() {
    document.querySelector('#demo').focus();
  });

  webpage.sendEvent('keypress', 'phantomjs');
  webpage.sendEvent('keypress', webpage.event.key.Enter);

  console.log('After input, #stage value is: ' + getStageValue());

  phantom.exit();
});