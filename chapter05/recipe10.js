var phantomcss = require('./../lib/phantomcss/phantomcss.js');

phantomcss.init({
  libraryRoot: './lib/phantomcss'
});

casper
  .start('http://localhost:3000/css-demo')
  .viewport(1280, 1024)
  .then(function() {
    phantomcss.screenshot('.jumbotron', 'jumbotron');
    phantomcss.compareAll();
  })
  .run(function(){
    casper.test.done();
    phantom.exit(phantomcss.getExitStatus());
  });
