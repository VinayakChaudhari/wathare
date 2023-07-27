var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/Attendance',function(req,res,next)
{
    res.render('attendance-page');
});

router.post('/Attendance',function(req,res,next)
{
  res.render('attendance-page')
});
module.exports = router;