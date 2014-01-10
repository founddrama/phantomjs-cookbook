/*jshint devel:true, phantom:true */
var webpage = require('webpage').create(),
    script  = '../lib/hemingway.js',
    jquery  = 'http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js';

webpage.open('http://localhost:3000/', function(status) {
  if (status === 'fail') {
    console.error('Failed to open web page.');
    phantom.exit(1);
  }

  if (webpage.injectJs(script)) {
    webpage.includeJs(jquery, function() {
      var fibs = webpage.evaluate(function() {
        var $ct  = $('<div></div>').appendTo('body'),
            seed = Math.ceil(Math.random() * 10),
            fibs = [];

        fibonacci(seed).forEach(function(n) {
          $ct.append('<div class="fib">' + n + '</div>');
        });


        $('.fib').each(function(i, el) {
          fibs.push(el.innerText);
        });

        return fibs;
      });

      console.log('Fibonacci numbers inserted included:');
      fibs.forEach(function(n) {
        console.log('  \u20D7 ' + n);
      });

      phantom.exit();
    });
  } else {
    console.error('Something went wrong trying to inject ' + script);
    phantom.exit(1);
  }
});