describe('string-utils.js', function() {
  describe('txtr.capitalize(s)', function() {
    it('capitalizes the first letter', function() {
      expect(txtr.capitalize('foo')).to.equal('Foo');
      expect(txtr.capitalize('Foo')).to.equal('Foo');
      expect(txtr.capitalize('foo bar')).to.equal('Foo bar');
      expect(txtr.capitalize('Foo Bar')).to.equal('Foo Bar');
      expect(txtr.capitalize('')).to.equal('');
    });
  });

  describe('txtr.dashedToCamel(s, ic)', function() {
    it('converts dashed-strings to camelCaseStrings', function() {
      expect(txtr.dashedToCamel('css-style-string')).to.equal('cssStyleString');
    });
    it('converts dashed-strings to CamelCaseStrings with an initial capital when specified', function() {
      expect(txtr.dashedToCamel('css-style-string', true)).to.equal('CssStyleString');
    });
  });

  describe('txtr.format(s, /*...*/)', function() {
    function baz() {
      return 'baz';
    }

    it('formats a string with strings', function() {
      expect(txtr.format('Foo {0}', 'Bar')).to.equal('Foo Bar');
    });
    it('formats a string with numbers', function() {
      expect(txtr.format('Foo {0}', 42)).to.equal('Foo 42');
    });
    it('formats a string with a function', function() {
      expect(txtr.format('Foo {0}', baz)).to.equal('Foo baz');
    });
    it('formats a string with a boolean', function() {
      expect(txtr.format('Foo {0}', true)).to.equal('Foo true');
    });
    it('formats a string with multiple items', function() {
      expect(txtr.format('Foo {0} {1} {2} {3}',
        'Bar', 42, baz, true)).to.equal('Foo Bar 42 baz true');
    });
    it('returns the token itself when there are not enough arguments to substitute for them all', function() {
      expect(txtr.format('Foo {0} {1}', 'bar')).to.equal('Foo bar {1}');
    });
    it('returns the token itself when it cannot otherwise recognize or handle the substitution', function() {
      expect(txtr.format('Foo {0}', [])).to.equal('Foo {0}');
      expect(txtr.format('Foo {0}', {})).to.equal('Foo {0}');
      expect(txtr.format('Foo {0}', /.*/)).to.equal('Foo {0}');
    });
  });
});