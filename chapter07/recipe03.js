/**
 * PhantomJS Cookbook
 * Chapter 7 | Generating Images and Documents with PhantomJS
 * Recipe 3  | Rendering and rasterizing SVGs from PhantomJS
 */
var webpage  = require('webpage').create(),
    filename = 'eyes.png';

webpage.open('http://localhost:3000/svg/eyes.svg', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  webpage.render(filename);

  console.log('webpage rendered as ' + filename);

  phantom.exit();
});