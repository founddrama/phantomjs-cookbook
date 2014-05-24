/*jshint devel:true, phantom:true */
/**
 * PhantomJS Cookbook
 * Chapter 2 | PhantomJS Core Modules
 * Recipe 6  | Inspecting command-line arguments
 */
var system = require('system'),
    args = system.args;

console.log('script name is: ' + args[0]);

if (args.length > 1) {
  var restArgs = args.slice(1);
  restArgs.forEach(function(arg, i) {
    console.log('[' + (i + 1) + '] ' + arg);
  });
} else {
  console.log('No arguments were passed.');
}

phantom.exit();