var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/Dash_Demo',function(req,res,next)
{
    res.render('Dash_Demo-page');
});

router.post('/Dash_Demo',function(req,res,next)
{
  res.render('Dash_Demo-page')
});
module.exports = router;