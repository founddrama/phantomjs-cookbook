/**
 * Chapter 5, Recipe 2 (alternative)
 */
var assert    = require('assert'),
    test      = require('selenium-webdriver/testing'),
    webdriver = require('selenium-webdriver'),
    driver    = new webdriver.Builder()
                  .withCapabilities(webdriver.Capabilities.phantomjs())
                  .build();

test.describe('/input-demo', function() {
  test.it('gets input from #demo and puts it onto #stage', function() {
    var THE_TEXT = 'PhantomJS + GhostDriver';

    driver.get('http://localhost:3000/input-demo');
    driver.findElement(webdriver.By.id('demo')).sendKeys(THE_TEXT);
    driver.findElement(webdriver.By.id('demo')).sendKeys(webdriver.Key.ENTER);

    driver.findElement(webdriver.By.id('stage')).getText().then(function(text) {
      assert(text === THE_TEXT, '#stage innerText equals ' + THE_TEXT);
    });

    driver.quit();
  });
});