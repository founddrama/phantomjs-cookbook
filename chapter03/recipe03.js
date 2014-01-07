/*jshint devel:true, phantom:true */
var webpage  = require('webpage').create(),
    url      = 'http://localhost:3000/post-demo',
    postData = JSON.stringify({
          "foo": "bar",
          "now": new Date().getTime()
        });

webpage.customHeaders = { "Content-Type":"application/json" };

webpage.onInitialized = function() {
  webpage.customHeaders = {};
};

webpage.open(url, 'POST', postData, function(status) {
  if (status === 'success') {
    console.log('Successful post to ' + url);
    phantom.exit(0);
  } else {
    console.error('Something went wrong posting to ' + url);
    phantom.exit(1);
  }
});
