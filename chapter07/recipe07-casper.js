var casper    = require('casper').create(),
    viewports = casper.cli.args.map(function(v) {
      return v.split(/x/i).map(Number);
    }),
    filename;

function screenshot(vps) {
  var vp = vps.pop();

  casper.viewport(vp[0], vp[1] || 600, function() {
    filename = vp.join('x') + '.png';

    this.capture(filename);
    this.echo('webpage rendered as ' + filename);

    if(vps.length) screenshot(vps);
  });
}

casper.start('http://localhost:3000/responsive-demo', function() {
  screenshot(viewports);
}).run();