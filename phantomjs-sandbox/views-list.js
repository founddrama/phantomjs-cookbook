/*jshint node:true */
exports.views = require('fs').readdirSync('views').map(function(it) {
  return it.replace(/\.ejs$/, '');
});