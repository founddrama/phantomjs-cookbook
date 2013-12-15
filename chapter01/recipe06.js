/*jshint phantom:true, devel:true */
var page  = require('webpage').create(),
    count = 0,
    until = 2;

page.onResourceReceived = function(res) {
  if (res.stage === 'end') {
    console.log(JSON.stringify(res, undefined, 2));
  }
};

page.onLoadStarted = function() {
  count += 1;
  console.log('Run ' + count + ' of ' + until + '.');
};

page.onLoadFinished = function(status) {
  if (status === 'success') {
    if (count < until) {
      console.log('Go again.\n');
      page.reload();
    } else {
      console.log('All done.');
      phantom.exit();
    }
  } else {
    console.error('Could not open page! (Is it running?)');
    phantom.exit(1);
  }
};

page.open('http://localhost:3000/cache-demo');