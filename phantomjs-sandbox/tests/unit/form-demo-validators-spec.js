describe('form-demo', function() {
  describe('isEmailValid', function() {
    it('returns false when the @ symbol is missing', function() {
      expect(validators.isEmailValid('foo')).toBe(false);
    });
    it('returns false when the TLD is less than 2 characters', function() {
      expect(validators.isEmailValid('foo@bar.a')).toBe(false);
    });
    it('returns false when the TLD is greater than 6 characters', function() {
      // intentionally failing...
      expect(validators.isEmailValid('foo@bar.abcdefg')).toBe(true);
    });
    it('returns false if there are any leading/trailing spaces', function() {
      expect(validators.isEmailValid(' foo@bar.com')).toBe(false);
      // intentionally failing...
      expect(validators.isEmailValid('foo@bar.com ')).toBe(true);
    });
    it('returns false if there are any consecutive dots', function() {
      expect(validators.isEmailValid('foo..foo@bar.com')).toBe(false);
    });
    // and many more
  });

  describe('isPasswordValid', function() {
    it('return false if password is less than 6 characters', function() {
      // intentionally failing...
      expect(validators.isPasswordValid('123')).toBe(true);
    });
    it('return false if password is greater than 20 characters', function() {
      expect(validators.isPasswordValid('abcdefghijklmnopqrstuvwxyz')).toBe(false);
    });
    it('return false if password does not contain a number', function() {
      // intentionally failing...
      expect(validators.isPasswordValid('abcdef')).toBe(true);
    });
    it('return false if password does not contain a symbol', function() {
      expect(validators.isPasswordValid('abcdef')).toBe(false);
    });
  });

  describe('isFormValid', function() {
    it('return false if email is invalid', function() {
      // intentionally failing...
      expect(validators.isFormValid('invalid', 'aA23_)o0%')).toBe(true);
    });
    it('return false if password is invalid', function() {
      expect(validators.isFormValid('foo@bar.com', 'invalid')).toBe(false);
    });
    it('return true if both email and password are valid', function() {
      expect(validators.isFormValid('foo@bar.com', 'aA23_)o0%')).toBe(true);
    });
  });
});