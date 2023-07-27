var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/dash_admin',function(req,res,next)
{
    res.render('dash-admin-page');
});

router.post('/dash_admin',function(req,res,next)
{
  var name=req.params.data;
  console.log(name);
  var msg="welcome to teacher Dashboard"
  res.render('myprofile-page',{alertMsg : msg});  

});
module.exports = router;