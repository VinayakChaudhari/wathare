var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/Assignment',function(req,res,next)
{
    res.render('Assignment-page');
});

router.post('/Assignment',function(req,res,next)
{
  res.render('Assignment-page')
});
module.exports = router;