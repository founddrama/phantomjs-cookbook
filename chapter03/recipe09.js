/*jshint devel:true, phantom:true*/

var webpage = require('webpage').create();

webpage.viewportSize = { width: 1280, height: 800 };
webpage.scrollPosition = { top: 0, left: 0 };

webpage.open('https://twitter.com/founddrama', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  var i = 0,
      top,
      queryFn = function() {
        return document.body.scrollHeight;
      };

  setInterval(function() {
    var filename = 'twitter-' + (++i) + '.png';
    console.log('Writing ' + filename + '...');
    webpage.render(filename);

    top = webpage.evaluate(queryFn);

    console.log('[' + i + '] top = ' + top);
    webpage.scrollPosition = { top: top + 1, left: 0 };

    if (i >= 5) {
      phantom.exit();
    }
  }, 3000);
});