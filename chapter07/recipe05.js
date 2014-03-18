var webpage  = require('webpage').create(),
    filename = 'css-demo.pdf';

webpage.viewportSize = { width: 1024, height: 768 };

webpage.paperSize = {
  format:      'Letter',
  orientation: 'portrait',
  border:      '0.5in'
};

webpage.open('http://localhost:3000/css-demo', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  webpage.render(filename);

  console.log('webpage rendered as ' + filename);

  phantom.exit();
});
