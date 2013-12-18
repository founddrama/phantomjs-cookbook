/*jshint devel:true, phantom:true*/

// PRELIMINARY!

var page = require('webpage').create();

page.onResourceReceived = function(response) {
  console.log(JSON.stringify(response, undefined, 2));
};

page.open('http://localhost:3000/ajax-demo', function(status) {
  if (status === 'success') {
    // c/w page.content
    console.log(page.plainText);
    phantom.exit();
  } else {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }
});