var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const data = require('./database/models')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: "myapp",
  resave: false,
  saveUninitialized: true 
}));

app.use(function(req, res, next) {
  if (req.session.user != undefined) {
    res.locals.user = req.session.user;
  }
  return next();
});

app.use(function(req, res, next) {
  if (req.cookies.userId != undefined && req.session.user == undefined) {
    let id = req.cookies.userId; 

    data.Usuario.findByPk(id)
    .then((result) => {
      req.session.user = result;
      res.locals.user = result;
      return next();
    }).catch((err) => {
      return console.log(err);
    });
  } else {
    return next();
  }
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/product', productsRouter);
app.use('/profile', usersRouter);
//app.use('/searchResults', productsRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
