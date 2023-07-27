var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/aboutus',function(req,res,next)
{
    res.render('Aboutus-page');
});

router.post('/aboutus',function(req,res,next)
{
    
});
module.exports = router;