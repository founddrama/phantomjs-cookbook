casper.options.safeLogs = false;

casper.test.begin('Chapter 8 : Recipe #5', function(test) {

  var EMAIL_ALERT       = '.email-fg .alert',
      PASSWORD_ALERT    = '.password-fg .alert',
      LENGTH_CONSTRAINT = 'be at least 6 characters, and no more than 20',
      NUMBER_CONSTRAINT = 'contain at least one number',
      SYMBOL_CONSTRAINT = 'contain at least one symbol',
      keysOpts          = {reset:true, keepFocus:true};

  casper
    .start('http://localhost:3000/', function() {
      test.assertExists('[href="/form-demo"]',
          'takes you to /form-demo when clicking the link on home page ');

      this.clickLabel('/form-demo', 'a');
    })
    .then(function() {
      this.sendKeys('#email', 'invalid', keysOpts);
      test.assertVisible(EMAIL_ALERT,
          'shows the error message when you enter an invalid email string');

      this.sendKeys('input#email', 'foo@bar.com');
      test.assertNotVisible(EMAIL_ALERT,
          'hides the error message when you enter a valid email string');
    })
    .then(function() {
      this.sendKeys('#password', 'foo', keysOpts);
      test.assertVisible(PASSWORD_ALERT,
          'shows the error message when you enter an invalid password string');
      test.assertSelectorHasText(PASSWORD_ALERT, LENGTH_CONSTRAINT,
          'error message contains the length constraints when too short');
      test.assertSelectorHasText(PASSWORD_ALERT, NUMBER_CONSTRAINT,
          'error message contains the number constraint');
      test.assertSelectorHasText(PASSWORD_ALERT, SYMBOL_CONSTRAINT,
          'error message contains the symbol constraint');

      this.sendKeys('#password', 'foo1foo2foo3foo4foo5!', keysOpts);
      test.assertVisible(PASSWORD_ALERT,
          'shows the error message when you enter an invalid password string');
      test.assertSelectorHasText(PASSWORD_ALERT, LENGTH_CONSTRAINT,
          'error message contains the length constraints when too long');
      test.assertSelectorDoesntHaveText(PASSWORD_ALERT, NUMBER_CONSTRAINT,
          'error message does not contain the number constraint');
      test.assertSelectorDoesntHaveText(PASSWORD_ALERT, SYMBOL_CONSTRAINT,
          'error message does not contain the symbol constraint');

      this.sendKeys('#password', 'foo1foo2foo3foo4foo5', keysOpts);
      test.assertVisible(PASSWORD_ALERT,
          'shows the error message when you enter an invalid password string');
      test.assertSelectorDoesntHaveText(PASSWORD_ALERT, LENGTH_CONSTRAINT,
          'error message does not contain the length constraints');
      // intentionally failing
      test.assertSelectorHasText(PASSWORD_ALERT, NUMBER_CONSTRAINT,
          'error message does not contain the number constraint');
      test.assertSelectorHasText(PASSWORD_ALERT, SYMBOL_CONSTRAINT,
          'error message contains the symbol constraint');

      this.sendKeys('#password', 'foo+foo?foo.foo-foo!', keysOpts);
      test.assertVisible(PASSWORD_ALERT,
          'shows the error message when you enter an invalid password string');
      test.assertSelectorDoesntHaveText(PASSWORD_ALERT, LENGTH_CONSTRAINT,
          'error message does not contain the length constraints');
      test.assertSelectorHasText(PASSWORD_ALERT, NUMBER_CONSTRAINT,
          'error message contains the number constraint');
      test.assertSelectorDoesntHaveText(PASSWORD_ALERT, SYMBOL_CONSTRAINT,
          'error message does not contain the symbol constraint');

      this.sendKeys('#password', 'foo1foo2foo3foo4foo!', keysOpts);
      test.assertNotVisible(PASSWORD_ALERT,
          'hides the error message when you enter a valid password string');
    })
    .then(function() {
      function isButtonEnabled() {
        return document.querySelector('button').getAttribute('disabled') === null;
      }

      this.sendKeys('#email', '', keysOpts);
      this.sendKeys('#password', '', keysOpts);
      test.assertEquals(this.getElementAttribute('button', 'disabled'), 'disabled',
          'be disabled when email and/or password is invalid');

      this.sendKeys('#email', 'foo@bar.com', keysOpts);
      this.sendKeys('#password', 'foo1foo2foo3foo4foo!', keysOpts);
      // intentionally failing
      test.assertEquals(this.getElementAttribute('button', 'disabled'), null,
          'be enabled when email and password are valid');
    })
    .run(function() {
      test.done();
    });
});