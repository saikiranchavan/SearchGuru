var createError = require('http-errors');
var express = require('express');
var path = require('path');
var api=require("./api");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors=require('cors');

var app = express();

app.use(cors());
app.use('/api',api);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('port',(process.env.PORT||8091))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/SearchGuru',{useNewUrlParser:true});

const db=mongoose.connection
db.on('error',console.error.bind(console,'connection error:'))
db.once('open',function(){
  console.log('connected to mongodb');

  app.listen(app.get('port'),function(){
    console.log("api server is listening on port"+app.get('port')+"!")
  })
})

module.exports = app;
