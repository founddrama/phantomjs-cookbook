module('string-utils.js : txtr.capitalize(s)');
test('capitalizes the first letter', function() {
  equal(txtr.capitalize('foo'), 'Foo', 'foo capitalizes to Foo');
  equal(txtr.capitalize('Foo'), 'Foo', 'Foo is already capitalized as Foo');
  equal(txtr.capitalize('foo bar'), 'Foo bar', 'foo bar is capitalized to Foo bar');
  equal(txtr.capitalize('Foo Bar'), 'Foo Bar', 'Foo Bar is already capitalized as Foo Bar');
  equal(txtr.capitalize(''), '', 'empty strings are a no-op');
});

module('string-utils.js : txtr.dashedToCamel(s)');
test('converts dashed-strings to camelCaseStrings', function() {
  equal(txtr.dashedToCamel('css-style-string'), 'cssStyleString', 'css-style-string camels to cssStyleString');
});
test('converts dashed-strings to CamelCaseStrings with an initial capital when specified', function() {
  equal(txtr.dashedToCamel('css-style-string', true), 'CssStyleString', 'passing true as the 2nd arg will capitalize the first character as well');
});

module('string-utils.js : txtr.format(s, /* ... */)');
function baz() {
  return 'baz';
}
test('formats a string with strings', function() {
  equal(txtr.format('Foo {0}', 'Bar'), 'Foo Bar', 'replaces {0} token with string Bar');
});
test('formats a string with numbers', function() {
  equal(txtr.format('Foo {0}', 42), 'Foo 42', 'replaces {0} token with number 42');
});
test('formats a string with a function', function() {
  equal(txtr.format('Foo {0}', baz), 'Foo baz', 'replaces {0} token with the result of baz()');
});
test('formats a string with a boolean', function() {
  equal(txtr.format('Foo {0}', true), 'Foo true', 'replaces {0} token with toString() of true');
});
test('formats a string with multiple items', function() {
  equal(txtr.format('Foo {0} {1} {2} {3}',
      'Bar', 42, baz, true), 'Foo Bar 42 baz true',
      'replaces multiple tokens with supplied values in order');
});
test('returns the token itself when there are not enough arguments to substitute for them all', function() {
  equal(txtr.format('Foo {0} {1}', 'bar'), 'Foo bar {1}', 'replaces {0} with string bar but leaves {1} alone');
});
test('returns the token itself when it cannot otherwise recognize or handle the substitution', function() {
  equal(txtr.format('Foo {0}', []), 'Foo {0}', 'does not replace {0} with []');
  equal(txtr.format('Foo {0}', {}), 'Foo {0}', 'does not replace {0} with {}');
  equal(txtr.format('Foo {0}', /.*/), 'Foo {0}', 'does not replace {0} with the RegExp');
});