var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/Fees',function(req,res,next)
{
    res.render('Fees-page');
});

router.post('/Fees',function(req,res,next)
{
  res.render('Fees-page')
});
module.exports = router;