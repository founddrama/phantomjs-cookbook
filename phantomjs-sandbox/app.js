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
app.use(express.static(path.join(__dirname, 'static')));

app.get('/', routes.index);

// Chapter 1, Recipe 5
app.get('/cookie-demo', routes.cookieDemo);

app.listen(app.get('port'));
console.log('[phantomjs-sandbox] App is listening on %s.', app.get('port'));