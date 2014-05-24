/*jshint devel:true, phantom:true */
/**
 * PhantomJS Cookbook
 * Chapter 2 | PhantomJS Core Modules
 * Recipe 8  | Saving a file from a PhantomJS script
 */
var fs        = require('fs'),
    targetDir = 'foo-log';

if (!fs.exists(targetDir)) {
  console.log('Creating directory ' + targetDir);
  fs.makeDirectory(targetDir);
}

if (!fs.isWritable(targetDir)) {
  console.error(targetDir + ' is not writable!');
  phantom.exit(1);
}

console.log('Writing file...');
var currentTime = new Date().getTime();
fs.write(targetDir + fs.separator + currentTime + '.txt',
  'Current time is ' + currentTime, 'w');

phantom.exit();