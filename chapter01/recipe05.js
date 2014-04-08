/*jshint phantom:true, devel:true */
var webpage = require('webpage').create();

webpage.open('http://localhost:3000/cookie-demo', function(status) {
    if (status === 'success') {
      phantom.cookies.forEach(function(cookie, i) {
        for (var key in cookie) {
          console.log('[cookie:' + i + '] ' + key + ' = ' + cookie[key]);
        }
      });
    
      phantom.exit();
    } else {
      console.error('Could not open the page! (Is it running?)');
      phantom.exit(1);
    }
  });