/*jshint devel:true, phantom:true */
/**
 * PhantomJS Cookbook
 * Chapter 2 | PhantomJS Core Modules
 * Recipe 5  | Controlling the exit status of a PhantomJS script
 */
console.log('Running the PhantomJS exit demo...');

if (Math.floor(Math.random() * 10) % 2 === 0) {
  console.log('Exiting cleanly from PhantomJS!');
  phantom.exit();
} else {
  console.log('Exiting with an error status.');
  phantom.exit(1);
}