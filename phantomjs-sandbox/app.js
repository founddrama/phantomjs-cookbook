/*jshint node:true */
var express        = require('express'),
    favicon        = require('static-favicon'),
    logger         = require('morgan'),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    cookieParser   = require('cookie-parser'),
    routes         = require('./routes'),
    path           = require('path'),

    app            = express(),
    http           = require('http').createServer(app),

    ws             = require('websocket-driver'),

    views          = require('./views-list').views;


app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser());
app.use(methodOverride());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'static'), {maxAge: 86400000}));

app.get('/', routes.index);

// Routes:
views.forEach(function(it) {
  app.get('/' + it, routes[it.replace(/-([a-z])/g, function(m) { return m[1].toUpperCase(); })]);
});

// Chapter 3, Recipe 3
app.post('/post-demo', routes.postDemo);

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

// Chapter 8, Recipe 5
app.post('/form-demo', routes.formDemo);

http.listen(app.get('port'));
console.log('[phantomjs-sandbox] App is listening on %s.', app.get('port'));
