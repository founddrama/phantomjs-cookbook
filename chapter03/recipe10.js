/*jshint devel:true, phantom:true*/
/**
 * PhantomJS Cookbook
 * Chapter 3 | Working with webpage Objects
 * Recipe 10 | Simulating mouse hovers in PhantomJS
 */
var webpage = require('webpage').create();

webpage.viewportSize = { width: 1280, height: 800 };

webpage.onConsoleMessage = function(m) {
  console.log(m);
  phantom.exit();
};

webpage.open('http://localhost:3000/hover-demo', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  var coords = webpage.evaluate(function() {
    var box = document.querySelector('.hover-demo');

    return { x: box.offsetLeft, y: box.offsetTop };
  });

  webpage.sendEvent('mousemove', coords.x + 10, coords.y + 10);
});