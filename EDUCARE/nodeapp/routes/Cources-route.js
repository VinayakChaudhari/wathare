var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/Courses',function(req,res,next)
{
    res.render('Courses-page');
});

router.post('/Courses',function(req,res,next)
{
  res.render('Courses-page')
});
module.exports = router;