/*jshint devel:true, phantom:true */

console.log('Running the PhantomJS exit demo...');

if (Math.floor(Math.random() * 10) % 2 === 0) {
  console.log('Exiting cleanly from PhantomJS!');
  phantom.exit();
} else {
  console.log('Exiting with an error status.');
  phantom.exit(1);
}