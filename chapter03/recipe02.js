/*jshint devel:true, phantom:true*/
var page = require('webpage').create();

page.open('http://blog.founddrama.net/', function(status) {
  if (status === 'success') {
    console.log('webpage opened successfully');
    phantom.exit(0);
  } else {
    // status === 'fail'
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }
});