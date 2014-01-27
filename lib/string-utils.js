var txtr = (function(txtr) {
  function capitalize(s) {
    return s.slice(0, 1).toUpperCase() + s.slice(1);
  }

  txtr.capitalize = capitalize;

  txtr.dashedToCamel = function(s, ic) {
    s = s.split('-');
    var camelStr = s.shift();

    while (s.length) {
      camelStr += capitalize(s.shift());
    }

    if (ic === true) {
      camelStr = capitalize(camelStr);
    }

    return camelStr;
  };

  var FORMAT_RX = /\{(\d+)\}/g;
  txtr.format = function(s /*...*/) {
    var args = Array.prototype.slice.call(arguments, 1);
    return s.replace(FORMAT_RX, function(token, i){
      switch(typeof args[i]){
        case 'number':
        case 'string':
          return args[i];
        case 'function':
          return args[i]();
        case 'boolean':
          return args[i] + '';
        default:
          return token;
      }
    });
  };

  return txtr;
}({}));
