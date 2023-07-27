var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/dash_student',function(req,res,next)
{
    res.render('dash-student-page');
});

router.post('/dash_student',function(req,res,next)
{
  var name=req.body.logname;
  console.log(name);
  var msg="welcome to Student Dashboard"
  res.render('myprofile-page',{alertMsg : msg,UserData : data});  

});
module.exports = router;