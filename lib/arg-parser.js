/*global exports:true*/
function parseValue(v) {
  if (typeof v === 'undefined') {
    return true;
  } else {
    try {
      return JSON.parse(v);
    } catch (e) {
      return v;
    }
  }
}

function parseArguments(args) {
  return args.reduce(function(prev, current) {
        current = current.split('=');
        current[0] = current[0].replace(/^--/, '');

        prev[current[0]] = parseValue(current[1]);

        return prev;
      }, {});
}

/**
 * Parses arguments from the PhantomJS CLI. Use it like this:
 * ```
 * var args = require('system').args.slice(1);
 * var argParser = require('./arg-parser');
 * argParser.parseArgs(args);
 * ```
 * @param args {Array}
 * @return parsedArgs {Object}
 */
exports.parseArgs = parseArguments;