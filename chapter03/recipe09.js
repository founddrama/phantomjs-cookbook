/*jshint devel:true, phantom:true*/

// PRELIMINARY!

var page = require('webpage').create(),
    url  = 'https://twitter.com/founddrama';

page.viewportSize = {width: 1280, height: 800};
page.scrollPosition = {top: 0, left: 0};

page.open(url, function(status) {
  if (status === 'success') {
    var i = 0,
        top,
        queryFn = function() {
          return document.body.scrollHeight;
        };

    setInterval(function() {
      page.render('twitter-' + (++i) + '.png');

      top = page.evaluate(queryFn);

      console.log('top = ' + top);
      page.scrollPosition = { top: top + 1, left: 0 };
      
      if (i >= 5) {
        phantom.exit(0);
      }
    }, 3000);
  } else {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }
});