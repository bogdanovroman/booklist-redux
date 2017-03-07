var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./webpack.config');
var webpack = require('webpack');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://admin:admin@ds129179.mlab.com:29179/rbogdanov');
mongoose.connection.on('connected', function () {
    console.log('connected to db');
});

var render = require('./tools/render');
var ajax = require('./tools/ajax');
var db = require('./tools/db');

var app = express();
process.env.NODE_ENV = 'production';
if (process.env.NODE_ENV != 'production') {
    var compiler = webpack(config);
    app.use(require('webpack-dev-middleware')(compiler, {
      publicPath: config.output.publicPath
    }));
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', render.cleanLayout);
app.get('/all_lists', ajax.getAllListsWithUserData);
app.get('/user/:id', ajax.getCurrentUserById);
app.get('/list/:id', ajax.getCurrentListById);
app.get('/user/fb/:id', ajax.getCurrentUserByFacebookId);
app.post('/new_list', ajax.postNewList);
app.post('/new_user', ajax.postNewUser);
app.post('/new_comment', ajax.postNewComment);
app.post('/update/list/:id/:option', ajax.updateCurrentList);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
