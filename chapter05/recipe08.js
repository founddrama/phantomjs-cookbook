casper.test.begin('Chapter 5 : Recipe #8', function(test) {
  var THE_TEXT = 'PhantomJS + CasperJS Testing';

  casper
    .start('http://localhost:3000/', function() {
      test.assertExists('[href="/input-demo"]');

      this.clickLabel('/input-demo', 'a');
    })
    .then(function() {
      var getDemoValue = (function() {
        return this.evaluate(function() {
          return __utils__.getFieldValue('demo');
        });
      }).bind(this);

      test.assertEquals(getDemoValue(), '',
          '#demo begins with no value set');
      test.assertSelectorHasText('#stage', '',
          '#stage begins with no text');

      this.sendKeys('#demo', THE_TEXT, {keepFocus: true});
      test.assertEquals(getDemoValue(), THE_TEXT,
          'value of #demo equals "' + THE_TEXT + '"');

      this.sendKeys('#demo', casper.page.event.key.Enter, {keepFocus: true});
      test.assertSelectorHasText('#stage', THE_TEXT,
          'innerHTML of #stage equals "' + THE_TEXT + '"');
    })
    .run(function() {
      test.done();
    });
});