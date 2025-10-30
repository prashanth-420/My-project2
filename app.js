var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./AppServer/models/db'); 
var indexRouter = require('./AppServer/routes/index');
var usersRouter = require('./AppServer/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname,'AppServer', 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
// ...existing code...

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler (this should be the LAST middleware)
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    title: 'Error',
    message: err.message,
    error: err
  });
});

module.exports = app;
