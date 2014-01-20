/*jshint devel:true, phantom:true*/

var webpage = require('webpage').create();

webpage.onConsoleMessage = function(m) {
  console.log(m);

  if (/^Closing WebSocket/.test(m)) {
    phantom.exit();
  }
};

webpage.open('http://localhost:3000/', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  webpage.evaluateAsync(function() {
    var ws = new WebSocket('ws://localhost:3000/');

    function stringify(o) {
      return JSON.stringify(o, undefined, 2);
    }

    ws.onopen = function(event) {
      console.log('WebSocket opened...\n' + stringify(event));

      ws.send('ping');
    };
    ws.onmessage = function(event) {
      console.log('WebSocket message:\n' + stringify(event));
    };
    ws.onerror = function(event) {
      console.error('WebSocket error!\n' + stringify(event));
    };
    ws.onclose = function(event) {
      console.error('Closing WebSocket...\n' + stringify(event));
    };

    console.log('WebSocket created...\n' + stringify(ws));

    setTimeout(function() {
      ws.close();
    }, 1000);
  });
});