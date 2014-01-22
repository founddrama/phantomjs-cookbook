/*jshint devel:true, phantom:true*/
var webpage = require('webpage').create();

webpage.open('http://blog.founddrama.net/', function(status) {
  switch (status) {
    case 'success':
      console.log('webpage opened successfully');
      phantom.exit(0);
      break;
    case 'fail':
      console.error('webpage did not open successfully');
      phantom.exit(1);
      break;
    default:
      console.error('webpage opened with unknown status: ' + status);
      phantom.exit(1);
  }
});