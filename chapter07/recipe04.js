var webpage  = require('webpage').create(),
    selector = require('system').args[1],
    filename;

if (!selector) {
  console.error('no selector was specified');
  phantom.exit(1);
}

filename = selector.replace(/\s/g, '-').replace(/\W/g, '') + '.png';

webpage.viewportSize = { width: 1024, height: 768 };

webpage.open('http://localhost:3000/', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  webpage.clipRect = webpage.evaluate(function(selector) {
    var el = document.querySelector(selector);
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    };
  }, selector);

  webpage.render(filename);

  console.log('webpage rendered as ' + filename);

  phantom.exit();
});