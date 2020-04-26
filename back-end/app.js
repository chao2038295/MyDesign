var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('./modules/db')

// -------------------------导入模块-----------------------------------------------
// const create=require('./service/create_schedule')
const createScheduleRouter = require('./routes/createSchedule');
const getScheduleRouter = require('./routes/getSchedule');
const getDepListRouter = require('./routes/getDepList')
const getCurseRouter = require('./routes/getCourse')
const createExam = require('./routes/createExam')
const createRoom = require('./routes/createRoom')
const getRoomList = require('./routes/getRoomList')
const getStuList = require('./routes/getStu')
const getReports = require('./routes/getRep')
const getCeshi = require('./routes/getCeshi')
const login = require('./routes/login')
const getExam = require('./routes/getExam')




const ceshi = require('./routes/ceshi')
//-----------------------测试数据库-----------------------------------------------
// const mongoose=require('mongoose')
// mongoose.connect('mongodb://localhost/MyDemo',{ useNewUrlParser: true , useUnifiedTopology: true  })
// const db=mongoose.connection;

// db.on('error',function(error){
//   console.log('数据库链接失败:'+ error)
// })
// db.on('open',()=>{
//   console.log("数据库已链接成功：MyDemo")
  
// })
// console.log(JSON.stringify(create))
// console.log('list---',courseList.find((err,docs)=>{
//   console.log("2132",docs)
//   return docs
// }).schema.obj.course_id)


// console.log("app+++",create)








// --------------------------------------------------------------------------------
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//--------------------------导入路由-----------------------------------------------------
app.use('/', createScheduleRouter);
app.use('/', getScheduleRouter);
app.use('/', getDepListRouter)
app.use('/',getCurseRouter)
app.use('/',createExam)
app.use('/',createRoom)
app.use('/',getRoomList)
app.use('/',getStuList)
app.use('/',getReports)
app.use('/',login)
app.use('/',getExam)



app.use('/',getCeshi)
app.use('/',ceshi)
//----------------------------------------------------------------------
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
