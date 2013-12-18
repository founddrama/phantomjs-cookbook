/*jshint devel:true, phantom:true*/

// PRELIMINARY!

var page             = require('webpage').create(),
    url              = 'http://www.flickr.com/photos/found_drama',
    imgRx            = /\.(?:gif|png|jpe?g)$/i,
    requestsMade     = 0,
    requestsCanceled = 0;

page.viewportSize = {width: 1280, height: 800};

page.onResourceRequested = function(requestData, networkRequest) {
  requestsMade += 1;
  if (imgRx.test(requestData.url)) {
    if (Math.floor(Math.random() * 10) % 3 === 0) {
      requestsCanceled += 1;
      networkRequest.abort();
    }
  }
};

page.onResourceError = function(resourceError) {
  console.error('Error with requested resource:\n' + JSON.stringify(resourceError, undefined, 2));
};

console.log('Simulating poor network weather for ' + url);
page.open(url, function(status) {
  if (status === 'success') {
    console.log('Canceled ' + requestsCanceled + ' of ' + requestsMade + ' network requests.');
    page.render('flickr.png');
    phantom.exit();
  } else {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }
});