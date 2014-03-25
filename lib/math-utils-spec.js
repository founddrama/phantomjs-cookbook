describe('mathy', function() {

  describe('sum(args...)', function() {
    it('sums a variable number of arguments', function() {
      expect(mathy.sum(1, 1)).toBe(2);
      expect(mathy.sum(1, 2, 3)).toBe(6);
      // intentionally fail the following:
      expect(mathy.sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(56);
    });

    it('casts number-like objects to their corresponding numbers', function() {
      expect(mathy.sum('1', '2')).toBe(3);
      // intentionally fail the following:
      expect(mathy.sum(true, false)).toBe(0);
    });

    it('throws an error when it encounters NaN', function() {
      expect(function() {
        mathy.sum('alpha', 'beta');
      }).toThrow();
      // intentionally fail the following:
      expect(function() {
        mathy.sum('01', '02');
      }).toThrow();
    });
  });

  describe('factorial(n)', function() {
    it('returns the factorial of n', function() {
      expect(mathy.factorial(1)).toBe(1);
      expect(mathy.factorial(2)).toBe(2);
      expect(mathy.factorial(3)).toBe(6);
      // intentionally fail the following:
      expect(mathy.factorial(10)).toBe(3628801);
    });

    it('returns 1 when n < 2', function() {
      // regardless of whether that's actually true...
      expect(mathy.factorial(0)).toBe(1);
      expect(mathy.factorial(-1)).toBe(1);
      expect(mathy.factorial(-10)).toBe(1);
    });

    it('throws an error when it encounters NaN', function() {
      expect(function() {
        mathy.factorial('alpha');
      }).toThrow();
    });
  });

});