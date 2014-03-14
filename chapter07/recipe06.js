var webpage  = require('webpage').create(),
    filename = 'index.pdf',
    datetime = new Date().toString(),
    title;

webpage.viewportSize = { width: 1024, height: 768 };

webpage.open('http://localhost:3000/css-demo', function(status) {
  if (status === 'fail') {
    console.error('webpage did not open successfully');
    phantom.exit(1);
  }

  title = webpage.evaluate(function() {
    return document.querySelector('title').innerText;
  });

  webpage.paperSize = {
    format:      'Letter',
    orientation: 'portrait',
    border: '0.5in',
    header: {
      height: '0.5in',
      contents: phantom.callback(function() {
        return '<h1 style="border-bottom:1px #333 solid;color:#333;">' +
            title + '</h1>';
      })
    },
    footer: {
      height: '0.5in',
      contents: phantom.callback(function(pageNum, numPages) {
        return '<div style="border-top:1px #333 solid;color:#333;">' +
            '<div style="float:left;">Rendered: ' + datetime +
            '</div><div style="float:right;">Pages: ' +
            pageNum + '/' + numPages + '</div></div>';
      })
    }
  };

  webpage.render(filename);

  console.log('webpage rendered as ' + filename);

  phantom.exit();
});
