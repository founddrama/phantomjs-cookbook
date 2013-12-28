/*jshint devel:true, phantom:true */
var argParser = require('../lib/arg-parser'),
    args      = require('system').args.slice(1);

args = argParser.parseArgs(args);

Object.keys(args).forEach(function(k) {
  console.log(k + ' = ' + args[k] + ' (' + (typeof args[k]) + ')');
});

phantom.exit();