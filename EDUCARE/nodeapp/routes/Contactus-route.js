var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/contactus',function(req,res,next)
{
    res.render('contactus-page');
});

router.post('/contactus',function(req,res,next)
{
    
});
module.exports = router;