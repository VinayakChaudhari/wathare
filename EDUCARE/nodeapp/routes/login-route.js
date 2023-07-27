var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/login',function(req,res,next)
{
    
    res.render('login-form');
});

router.post('/login',function(req,res,next)
{
    var D=
    {
        email:req.body.email,
        password : req.body.password,
        role : req.body.role
    }
    console.log(D);

    if(D.role=="student")
    {
    console.log("in Student table");
    var sql = 'select*from StudentReg where Email = "'+ D.email+'" and Password = "'+D.password+'";';
    db.query(sql,function(err,data,fields)
    {
       if (err) throw err;
       else if(data.length!=0)
       { 
            console.log(" Student table : Password/user valid ");
            console.log(data);
            var user=D.email.split('@');
            var msg="User "+user[0]+" You Have Logged In Successfully";
            res.render('dash-student-page',{alertMsg : msg,StudentData : data});  
        }  
        else
        {
            var msg=" # Invalid Password/Username #";
            res.render('login-form',{alertMsg : msg});
        }
    });
    }

    if(D.role=="teacher")
    {
    console.log("In teacher table");
    var sql = 'select*from TeacherReg where Email = "'+ D.email+'" and Password = "'+D.password+'";';
    db.query(sql,function(err,data,fields)
    {
       if (err)  throw err;
       else if(data.length!=0)
       { 
        var user=D.email.split('@');
        var msg="User "+user[0]+" You Have Logged In Successfully";
        res.render('dash-teacher-page',{alertMsg : msg,teacherData : data});  
       }
       else
       {
        var msg=" # Invalid Password/Username #";
        res.render('login-form',{alertMsg : msg});
       }
      
    });
    }

    if(D.role=="admin")
    {
        var Rpass="Hingepatil";
        var Ruser="rahulrajhinge8@gmail.com";
        var Kuser="neelmavale26@gmail.com";
        var Kathya="neel@007";
        console.log("In Admin Role");
        if(D.email==Ruser && D.password==Rpass  || D.email==Kuser && D.password==Kathya)
        {
        var msg="Devloper Mr. "+D.Name+" You Have Logged In Successfully";
        res.render('dash-admin-page',{alertMsg : msg});  
        }
        else
        {
            var msg=" # Invalid Password/Username #";
            res.render('login-form',{alertMsg : msg});
        }
    }
});
module.exports = router;