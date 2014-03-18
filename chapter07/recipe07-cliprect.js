var webpage   = require('webpage').create(),
    args      = require('system').args,
    viewports = args.slice(1).map(function(v) {
      return v.split(/x/i);
    }),
    filename;

function screenshot(vps) {
  var vp = vps.pop();

  webpage.viewportSize = {
    width: vp[0],
    height: vp[1] || 600
  };

  webpage.clipRect = {
    left:   0,
    width:  vp[0],
    top:    0,
    height: vp[1] || 600
  };

  setTimeout(function() {
    filename = vp.join('x') + '.png';

    webpage.render(filename);
    console.log('webpage rendered as ' + filename);

    vps.length > 0 ? screenshot(vps) : phantom.exit();
  }, 50);
}


webpage.open('http://localhost:3000/responsive-demo', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  screenshot(viewports);
});
