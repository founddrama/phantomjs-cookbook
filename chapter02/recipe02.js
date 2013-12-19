/*jshint devel:true, phantom:true */
var page = require('webpage').create(),
    url  = 'http://localhost:3000/cookie-demo';

if (!phantom.cookiesEnabled) {
  console.log('Note: cookies not enabled.');
}

page.open(url, function(status) {
  if (status === 'success') {
    console.log('We start with these cookies:');
    phantom.cookies.forEach(function(c) {
      console.info(JSON.stringify(c, undefined, 2));
    });

    phantom.addCookie({
      name: 'jerry',
      value: 'black-and-white',
      domain: 'localhost'
    });

    console.log('Added the "jerry" cookie; how many now? ' + phantom.cookies.length);
    
    phantom.deleteCookie('jerry');
    console.log('Deleted the "jerry" cookie; how many now? ' + phantom.cookies.length);

    phantom.clearCookies();

    console.log('How many cookies after a clear? ' + phantom.cookies.length);

    phantom.exit();    
  } else {
    console.error('Something is wrong!');
    phantom.exit(1);
  }
});
