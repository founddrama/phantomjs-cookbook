/*jshint devel:true, phantom:true*/

// PRELIMINARY!

var page = require('webpage').create(),
    url  = 'http://blog.founddrama.net/';

page.viewportSize = {width: 1280, height: 800};

page.onLoadFinished = function(status) {
  if (status === 'success') {
    if (page.url !== url) {
      phantom.exit();
    }

    var coords = page.evaluate(function() {
      var firstLink = document.querySelector('.post');

      return { x: firstLink.offsetLeft, y: firstLink.offsetTop };
    });

    page.sendEvent('mousemove', coords.x + 10, coords.y + 10);
    setTimeout(function() {
      page.render('mousemove.png');
      phantom.exit();
    }, 2000);
  } else {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }
};

page.open(url);