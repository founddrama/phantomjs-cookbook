/*jshint devel:true, phantom:true */
var d = new Date();

console.log('A console statement from PhantomJS on ' + d.toDateString() + '!');

phantom.exit();