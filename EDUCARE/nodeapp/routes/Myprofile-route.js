var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/myprofile/:data',function(req,res,next)
{
    console.log(" in get myprofile");
    var Name=req.params.data;
    console.log(Name);
    
    var sql='select*from StudentReg where Name = "'+Name+'";';
    db.query(sql,function(error,data,fields){
        if(error)throw error;

        else if(data.length<=0)
        {
            var sql='select*from TeacherReg where Name = "'+Name+'";';
            db.query(sql,function(error,data,fields)
            {if(error)throw error;
              else
              {
                console.log(data)
                res.render('myprofile-page',{UserData : data});
              }
            });
        }
        else 
        {
            console.log(data)
            res.render('myprofile-page',{UserData : data});
        } 
      });    
});

router.post('/myprofile',function(req,res,next)
{
    res.render('myprofile-page');

});


module.exports = router;