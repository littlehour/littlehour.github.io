var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs=require('fs');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testLocalRouter=require('./routes/testLocalRouter');

var app = express();

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'l2n0s604',
  database : 'users'
});

connection.connect();

connection.query('SELECT * from new_table', function (error, results, fields) {
  if (error) throw error;
  console.log('The new_tablecol is: ', results[0].new_tablecol);
});

connection.end();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',function(filePath,options,callback){
  fs.readFile(filePath,function(err,data){
    if(err) return callback(new Error(err));
    var rendered=data.toString().replace(/{(\w+)}/g,function(match,first){
      // console.log(app.locals.name);
      return app.locals[first]||options[first];
    });


    // var rendered=data.toString();

    // console.log(filePath);
    // console.log(data.toString());
    // console.log(rendered);
    return callback(null,rendered);
  })
});
app.set('view engine','jade');
// app.set('view engine','html');

app.set('trust proxy',true);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/static',express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(__dirname, 'views')));
console.log(__dirname);

app.all('*',function(req,res,next){
  console.log('app all request...');
  next();
})

app.use(function(req,res,next){
  console.log('app middleware no path...');
  next();
})
// app.get('/',function(req,res,next){
//   next('route');
// });

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/testLocal',testLocalRouter);

// 挂载
var admin=express();
admin.get('/',function(req,res,next){
  res.send('admin mount');
});
admin.on('mount',function(parentApp){
  console.log(this.mountpath);
  // console.log(parentApp);
})
app.use('/admin',admin);

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
  // res.send('error');
});

app.locals={
  name:'xml',
  age:23,
  sex:'girl',
  show:function(){
    // console.log(app.locals.name+' '+app.locals.age);
    // return app.locals.name;
    return 'sss';
  }
}

// app.locals.name='xml';

module.exports = app;
