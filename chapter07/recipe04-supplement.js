var webpage  = require('webpage').create(),
    args     = require('system').args,
    width    = args[1],
    height   = args[2],
    filename = width + 'px-X-' + height + 'px.png';

if (!width || !height) {
  console.error('viewport size was not specified');
  phantom.exit(1);
}

webpage.viewportSize = { width: width, height: height };

webpage.clipRect = {
  top: 0,
  left: 0,
  width: width,
  height: height
};

webpage.open('http://localhost:3000/', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  webpage.render(filename);
  phantom.exit();
});