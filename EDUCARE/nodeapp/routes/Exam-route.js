var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/Exam',function(req,res,next)
{
    res.render('Exam-page');
});

router.post('/Exam',function(req,res,next)
{
  res.render('Exam-page')
});
module.exports = router;