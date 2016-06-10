/*jshint devel:true, phantom:true */
/**
 * PhantomJS Cookbook
 * Chapter 1 | Getting Started with PhantomJS
 * Recipe 4  | Running a PhantomJS script with arguments
 */
var system = require('system');
if (system.args.length === 1) {
  console.log('No arguments were passed in.');
} else {
  system.args.forEach(function(arg, index) {
  	// skip first arg which is script name
    if(i != 0) {
    console.log('[' + index + '] ' + arg);
	}
  });
}

phantom.exit();