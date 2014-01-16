/*jshint devel:true, phantom:true*/

var webpage          = require('webpage').create(),
    url              = 'http://localhost:3000/cache-demo',
    imgRx            = /\.(?:gif|png|jpe?g)$/i,
    requestsMade     = 0,
    requestsCanceled = 0;

webpage.viewportSize = { width: 1280, height: 800 };

webpage.onResourceRequested = function(requestData, networkRequest) {
  if (imgRx.test(requestData.url)) {
    requestsMade += 1;
    if (Math.floor(Math.random() * 10) % 3 === 0) {
      requestsCanceled += 1;
      networkRequest.abort();
    }
  }
};

webpage.onResourceError = function(resourceError) {
  console.error('Error with requested resource:\n' + JSON.stringify(resourceError, undefined, 2));
};

console.log('Simulating poor network weather for ' + url);
webpage.open(url, function(status) {
  if (status === 'fail') {
    console.error(url + ' did not open successfully.');
    phantom.exit(1);
  }

  console.log('Canceled ' + requestsCanceled + ' of ' + requestsMade + ' image requests.');
  phantom.exit();
});