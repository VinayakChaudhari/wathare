var express = require('express');
var router = express.Router();
var db=require('../database');


// to display registration form 
router.get('/register', function(req, res, next) {
  res.render('registration-page');
});


router.post('/register', function(req, res, next) {
  

    D ={
        id :null,
        name: req.body.name,
        address: req.body.address,
        mark:req.body.mark,
        branch: req.body.branch,
        PhoneNo: req.body.PhoneNo,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        DateOfBirth: req.body.DateOfBirth
    }
    
    console.log(D.name);
    var sql = 'INSERT INTO StudentReg  values ('+D.id+',"'+D.name+'","'+D.address+'",'+D.mark+',"'+D.branch+'",'+D.PhoneNo+',"'+D.email+'","'+D.password+'","'+D.gender+'","'+D.DateOfBirth+'");'
  //  var sql='insert into students values("rahul");'
    db.query(sql,function(err,result,data)
    {
       if (err) throw err;
       else  console.log("Added Data = "+result);

    });
    db.query('select*from StudentReg',function(error,result,fields){
      if(error) throw error +"Unsuccessful";
      else  console.log(result);
    });

 var msg="Registration of Student "+D.name+" is Successfull";
res.render('registration-page',{title :'Data Saved',msg});

});



module.exports = router;