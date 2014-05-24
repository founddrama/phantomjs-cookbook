/*jshint devel:true, phantom:true*/
/**
 * PhantomJS Cookbook
 * Chapter 2 | PhantomJS Core Modules
 * Recipe 7  | Inspecting system environment variables
 */
var env  = require('system').env,
    prop = 'BOOK_TITLE';

var keys = Object.keys(env).filter(function(k) {
  return k === prop;
});

if (keys.length === 1) {
  console.log(keys[0] + ' = ' + env[keys[0]]);
} else {
  console.log('Could not find a property in env called ' + prop);
}

phantom.exit();