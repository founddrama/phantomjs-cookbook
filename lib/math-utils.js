var mathy = (function(mathy) {

  mathy.sum = function sum(/*args...*/) {
    var args = [].slice.call(arguments, 0);

    return args.reduce(function(p, c) {
      c = Number(c);

      if (isNaN(c)) {
        throw new TypeError(c + ' cannot be cast as a number.');
      }

      return p + c;
    }, 0);
  };

  mathy.factorial = function factorial(n) {
    if(isNaN(n)) throw new TypeError(n + ' is not a number.');
    if(n < 2) return 1;
    return n * factorial(n - 1);
  };

  return mathy;
}({}));