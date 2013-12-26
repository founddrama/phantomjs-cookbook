/*jshint devel:true, phantom:true */
phantom.onError = function(message, trace) {
  console.error('[Something went wrong!] - ' + message);
  phantom.exit(1);
};

var fs    = require('fs'),
    _name = 'reamde.txt',
    path  = require('system').args[0].split(fs.separator);

path = path.slice(0, path.length - 1).join(fs.separator);

fs.changeWorkingDirectory(path);

var file = fs.open(_name, 'r');

console.log('[Reading ' + _name + '...]');
while (!file.atEnd()) {
  console.log(file.readLine());
}

console.log('[Closing ' + _name + '.]');
file.close();

phantom.exit();