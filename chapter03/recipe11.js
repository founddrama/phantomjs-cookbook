/*jshint devel:true, phantom:true*/

var webpage = require('webpage').create(),
    url     = 'http://localhost:3000/css-demo',
    cssRx   = /\.css\??.*$/i,
    count   = 0;

webpage.viewportSize = { width: 1024, height: 768 };

webpage.clipRect = {
  top:    0,
  left:   0,
  width:  1280,
  height: 800
};

webpage.onLoadStarted = function() {
  count += 1;
};

webpage.onResourceRequested = function(requestData, networkRequest) {
  if (count > 1 && cssRx.test(requestData.url)) {
    console.log('Dropping CSS for ' + url);
    networkRequest.abort();
  }
};

webpage.onLoadFinished = function(status) {
  if (status === 'fail') {
    console.error(url + ' did not open successfully');
    phantom.exit(1);
  }

  if (count <= 1) {
    console.log('Rendering ' + url + ' with CSS...');
    webpage.render('demo-with-css.png');
    webpage.reload();
  } else {
    console.log('Rendering ' + url + ' without CSS...');
    webpage.render('demo-without-css.png');
    phantom.exit();
  }
};

webpage.open(url);