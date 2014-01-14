/*jshint devel:true, phantom:true*/

var webpage = require('webpage').create(),
    url     = 'http://localhost:3000/';

webpage.viewportSize = { width: 1280, height: 800 };

webpage.onUrlChanged = function(targetUrl) {
  console.log('Latest URL: ' + targetUrl);
};

webpage.onLoadFinished = function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  if (webpage.url !== url) {
    console.log('URL changed; exiting...');
    phantom.exit();
  }

  var coords = webpage.evaluate(function() {
    var firstLink = document.querySelector('a');

    return {
      x: firstLink.offsetLeft,
      y: firstLink.offsetTop
    };
  });

  webpage.sendEvent('click', coords.x, coords.y);
};

webpage.open(url);