/*jshint phantom:true, devel:true */
var page  = require('webpage').create();

page.onResourceReceived = function(res) {
  if (res.stage === 'end') {
    for (var p in res) {
      if (p === 'headers') {
        console.log(p + ' =');
        res[p].forEach(function(header, i) {
          console.log('    [' + i + '] ' + header.name + ' = ' + header.value);
        });
      } else {
        console.log(p + ' = ' + res[p]);
      }
    }
    console.log('');
  }
};

page.open('http://localhost:3000/cache-demo', function(status) {
  if (status === 'success') {
    console.log('All done.');
    phantom.exit();
  } else {
    console.error('Could not open page! (Is it running?)');
    phantom.exit(1);
  }
});