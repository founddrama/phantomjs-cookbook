/*jshint devel:true, phantom:true*/

// PRELIMINARY!

var page = require('webpage').create(),
    url  = 'http://blog.founddrama.net/';

page.viewportSize = {width: 1280, height: 800};

page.onUrlChanged = function(targetUrl) {
  console.log('New URL: ' + targetUrl);
};

page.onLoadFinished = function(status) {
  if (status === 'success') {
    if (page.url !== url) {
      phantom.exit();
    }

    var coords = page.evaluate(function() {
      var firstLink = document.querySelector('.post p a');

      return { x: firstLink.offsetLeft, y: firstLink.offsetTop };
    });

    page.sendEvent('click', coords.x + 1, coords.y + 1);
  } else {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }
};

page.open(url);