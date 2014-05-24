/*jshint curly:false, devel:true, phantom:true */
/**
 * PhantomJS Cookbook
 * Chapter 3 | Working with webpage Objects
 * Recipe 4  | Inspecting page content from a PhantomJS script
 */
var webpage = require('webpage').create();

webpage.open('http://blog.founddrama.net/', function(status) {
  if (status === 'fail') {
    console.error('Failed to open requested page.');
    phantom.exit(1);
  }

  var titles = webpage.evaluate(function(selector) {
    var titles  = [],
        forEach = Array.prototype.forEach,
        nodes   = document.querySelectorAll(selector);

    forEach.call(nodes, function(el) {
      titles.push(el.innerText);
    });

    return titles;
  }, '.post h2');

  titles.forEach(function(t) {
    console.log(t);
  });

  phantom.exit();
});
