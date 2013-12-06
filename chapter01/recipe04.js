if (phantom.args.length === 0) {
  console.log('No arguments were passed in.');
} else {
  phantom.args.forEach(function(arg, index) {
    console.log('[' + index + '] ' + arg);
  });
}

phantom.exit();