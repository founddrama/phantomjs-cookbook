/*jshint devel:true, phantom:true */
/*global fibonacci:true */

var foo = 'foo';

console.log('Initial libraryPath: ' + phantom.libraryPath);

phantom.libraryPath = phantom.libraryPath.replace(/chapter02$/, 'lib');

console.log('Updated libraryPath: ' + phantom.libraryPath);

var isInjected = phantom.injectJs('hemingway.js');

if (isInjected) {
  console.log('Script was successfully injected.');
  console.log('Give me some Fibonacci numbers! ' +
    fibonacci(Math.round(Math.random() * 10) + 1));

  phantom.exit();
} else {
 console.log('Failed to inject script.');
 phantom.exit(1);
}