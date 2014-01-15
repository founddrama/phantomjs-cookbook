/*jshint node:true */
var express = require('express'),
    routes  = require('./routes'),
    path    = require('path'),
    
    app     = express();

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

// Chapter 3, Recipe 13
app.get('/ajax-demo', routes.ajaxDemo);

app.listen(app.get('port'));
console.log('[phantomjs-sandbox] App is listening on %s.', app.get('port'));