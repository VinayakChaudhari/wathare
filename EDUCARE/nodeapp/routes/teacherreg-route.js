var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/teacherreg',function(req,res,next)
{
    res.render('teacherreg-page');
});

router.post('/teacherreg',function(req,res,next)
{
    D ={
        id :null,
        name: req.body.name,
        address: req.body.address,
        branch: req.body.branch,
        PhoneNo: req.body.PhoneNo,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        DateOfBirth: req.body.DateOfBirth
    }
    
    console.log(D.name);
    var sql = 'INSERT INTO TeacherReg  values ('+D.id+',"'+D.name+'","'+D.address+'","'+D.branch+'",'+D.PhoneNo+',"'+D.email+'","'+D.password+'","'+D.gender+'","'+D.DateOfBirth+'");'
    db.query(sql,function(err,result,data)
    {
       if (err) throw err +"Unsuccessful";
       else console.log("Data Added = "+result);

    });
    db.query('select*from TeacherReg',function(error,result,fields){
      if(error) throw error +"Unsuccessful";
      else  console.log(result);
    });
    var msg="Registration of Teacher "+D.name+" is Successfull";
    res.render('teacherreg-page',{title :'Teacher Registration Page',msg});

});
module.exports = router;