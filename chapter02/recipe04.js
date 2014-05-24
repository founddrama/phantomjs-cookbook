/*jshint devel:true, phantom:true */
/**
 * PhantomJS Cookbook
 * Chapter 2 | PhantomJS Core Modules
 * Recipe 4  | Setting up a global PhantomJS error handler
 */
phantom.onError = function(message, trace) {
  console.error('[PHANTOMJS ERROR] ' + message);
  trace.forEach(function(t) {
    console.error('  >> [' + t.line + '] ' +
      (t.function ? '[' + t.function + '] ' : '') +
      t.file || t.sourceURL);
  });
  phantom.exit(1);
};

function doSomeErrorProneStuff() {
  throw new Error('Gremlins fed after midnight.');
}

doSomeErrorProneStuff();

console.log('Exiting cleanly.');
phantom.exit(0);
