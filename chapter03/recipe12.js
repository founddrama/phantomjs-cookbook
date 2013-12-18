/*jshint devel:true, phantom:true*/

// PRELIMINARY!

var page  = require('webpage').create(),
    url   = 'http://blog.founddrama.net/',
    cssRx = /\.css\??.*$/i;

page.viewportSize = {width: 1280, height: 800};

page.onResourceRequested = function(requestData, networkRequest) {
  if (cssRx.test(requestData.url)) {
    networkRequest.abort();
  }
};

console.log('Dropping CSS for ' + url);
page.open(url, function(status) {
  if (status === 'success') {
    page.render('blog-no-css.png');
    phantom.exit();
  } else {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }
});