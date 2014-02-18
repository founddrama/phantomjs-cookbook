var casper = require('casper').create({
  viewportSize: {width:1280, height:1024}
});

casper.start('http://localhost:3000/', function() {
  this.clickLabel('/css-demo', 'a');
});

casper.then(function() {
  this.echo('The H1 reads:');
  this.echo(this.getHTML('.jumbotron h1'));
});

casper.run();