var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var session = require('express-session')
var registrationRouter = require('./routes/Registration-route');
var StudentDetailsRouter = require('./routes/Student-details');
var StudentLoginRouter   = require('./routes/login-route');
var StudentAboutusRouter = require('./routes/Aboutus-route');
var StudentContactusRouter = require('./routes/Contactus-route');
var TeacherregRouter = require('./routes/teacherreg-route');
var DashStudentRouter = require('./routes/Dash-student-route');
var MyprofileRouter = require('./routes/Myprofile-route');
var TimetableRouter = require('./routes/Timetable-route');
var AttendanceRouter = require('./routes/Attendance-route');
var AssignmentRouter = require('./routes/Assignment-route');
var CourcesRouter = require('./routes/Cources-route');
var FeesRouter = require('./routes/Fees-route');
var ExamRouter = require('./routes/Exam-route');
var NoticeRouter = require('./routes/Notice-route');
var Dash_DemoRouter = require('./routes/Dash_Demo-route');
var DashTeacherRouter = require('./routes/Dash-teacher-route');
var DashAdminRouter = require('./routes/Dash-Admin-route');
var EditRouter = require('./routes/Edit-route');
var TeacherDetailsRouter = require('./routes/Teacher-details');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', registrationRouter);
app.use('/',StudentDetailsRouter);
app.use('/',StudentLoginRouter);
app.use('/',StudentAboutusRouter);
app.use('/',StudentContactusRouter);
app.use('/',TeacherregRouter);
app.use('/',DashStudentRouter);
app.use('/',MyprofileRouter);
app.use('/',TimetableRouter);
app.use('/',AttendanceRouter);
app.use('/',AssignmentRouter);
app.use('/',CourcesRouter);
app.use('/',FeesRouter);
app.use('/',ExamRouter);
app.use('/',NoticeRouter);
app.use('/',Dash_DemoRouter);
app.use('/',DashTeacherRouter);
app.use('/',DashAdminRouter);
app.use('/',EditRouter);
app.use('/',TeacherDetailsRouter);


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

app.use(session({ 
  secret: '123456cat',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
/*
var mysql = require('mysql'); 
var db = mysql.createConnection({
    host: 'localhost', 
    user: 'root', 
    password: 'root',
    database: 'HMS' 
}); 
db.connect(function(err) { 
  if (err) throw err;
  console.log('Database is connected successfully !'); 
}); 
*/
app.listen(8080,function(err)
  {
      if(err)
      console.log("error");
      else
    console.log('connected on port 8080');
})


module.exports = app;
