/**
 * Chapter 5, Recipe 2
 */
var assert   = require('assert'),
    driver   = require('webdriverjs'),
    client,
    THE_TEXT = 'PhantomJS + GhostDriver';

describe('/input-demo', function() {
  beforeEach(function(done) {
    client = driver.remote({
        desiredCapabilities: {
          browserName: 'phantomjs'
        }
      }).init();
    client.url('http://localhost:3000/input-demo', done);
  });

  afterEach(function(done) {
    client.end(done);
  });

  it('gets input from #demo and puts it onto #stage', function(done) {
    client
      .setValue('#demo', THE_TEXT + '\uE007')
      .getText('#stage', function(err, text) {
        assert(text === THE_TEXT, '#stage innerText equals ' + THE_TEXT);
      })
      .call(done);
  });
});