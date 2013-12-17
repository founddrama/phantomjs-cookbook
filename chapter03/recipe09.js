/*jshint devel:true, phantom:true*/

// PRELIMINARY!

var page = require('webpage').create(),
    url  = 'http://blog.founddrama.net/';

page.viewportSize = {width: 1280, height: 800};

page.onUrlChanged = function(targetUrl) {
  console.log('URL: ' + targetUrl);
};

page.onLoadFinished = function(status) {
  if (status === 'success') {
    if (page.url !== url) {
      phantom.exit();
    }

    page.evaluate(function() {
      // search input
      document.querySelector('#s').focus();
    });

    page.sendEvent('keypress', 'phantomjs');
    page.sendEvent('keypress', page.event.key.Enter);
  } else {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }
};

page.open(url);