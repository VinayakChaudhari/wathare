var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/Notice',function(req,res,next)
{
    res.render('Notice-page');
});

router.post('/Notice',function(req,res,next)
{
    res.render('Notice-page');
});
module.exports = router;