var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Para requerir este paquete hacemos npm install method-override --save
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter =require('./routes/movies');
/* -- 1. EMPEZAMOS A CREAR UNA API */
var apiMoviesRouter = require('./routes/api/movies')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/movies', moviesRouter);
/* -- 2. DIFINIMOS EL PREFIJO */
app.use('/api/movies', apiMoviesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
