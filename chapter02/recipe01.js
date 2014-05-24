/*jshint devel:true, phantom:true */
/**
 * PhantomJS Cookbook
 * Chapter 2 | PhantomJS Core Modules
 * Recipe 1  | Inspecting the version at runtime
 */
console.log('PhantomJS');
console.log('  - major version: ' + phantom.version.major);
console.log('  - minor version: ' + phantom.version.minor);
console.log('  - patch version: ' + phantom.version.patch);
phantom.exit();