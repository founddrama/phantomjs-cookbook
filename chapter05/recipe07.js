/**
 * PhantomJS Cookbook
 * Chapter 5 | Functional and End-to-end Testing with PhantomJS
 * Recipe 7  | Interacting with web pages using CasperJS
 */
var casper = require('casper').create();

casper.start('http://localhost:3000/', function() {
  this.clickLabel('/input-demo', 'a');
});

casper.then(function() {
  this.sendKeys('#demo', 'PhantomJS + CasperJS', {keepFocus: true});
  this.sendKeys('#demo', casper.page.event.key.Enter, {keepFocus: true});

  this.echo('#stage text is:');
  this.echo(this.getHTML('#stage'));
});

casper.run();