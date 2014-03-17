/*jshint node:true */
var express = require('express'),
    routes  = require('./routes'),
    path    = require('path'),

    app     = express(),
    http    = require('http').createServer(app),

    ws      = require('websocket-driver');


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'static'), {maxAge: 86400000}));

app.get('/', routes.index);

// Routes:
//
// Chapter 1, Recipe 5 (others?)
app.get('/cookie-demo', routes.cookieDemo);

// Chapter 1, Recipe 6 (others?)
app.get('/cache-demo', routes.cacheDemo);

// Chapter 3, Recipe 3
app.post('/post-demo', routes.postDemo);

// Chapter 3, Recipe 9
app.get('/input-demo', routes.inputDemo);

// Chapter 3, Recipe 10
app.get('/hover-demo', routes.hoverDemo);

// Chapter 3, Recipe 12
app.get('/css-demo', routes.cssDemo);

// Chapter 3, Recipe 13
app.get('/ajax-demo', routes.ajaxDemo);

// Chapter 3, Recipe 14
http.on('upgrade', function(request, socket, body) {
  if (!ws.isWebSocket(request)) return;

  var driver = ws.http(request);

  driver.io.write(body);
  socket.pipe(driver.io).pipe(socket);

  driver.messages.on('data', function(message) {
    console.log('[WebSocket] %s', message);

    setInterval(function() {
      var json = JSON.stringify({
        type:'message',
        data: new Date().getTime()
      });
      driver.text(json);
    }, 100);
  });

  driver.start();
});

// Chapter 5, Recipe 5
app.get('/precision-click', routes.precisionClick);

// Chapter 6, Recipe 3
app.get('/appcache-demo', routes.appcacheDemo);

// Chapter 6, Recipe 5
app.get('/cdn-demo', routes.cdnDemo);

// Chapter 7, Recipe 3
app.get('/svg-demo', routes.svgDemo);

// Chapter 7, Recipe 7
app.get('/responsive-demo', routes.responsiveDemo);

http.listen(app.get('port'));
console.log('[phantomjs-sandbox] App is listening on %s.', app.get('port'));
