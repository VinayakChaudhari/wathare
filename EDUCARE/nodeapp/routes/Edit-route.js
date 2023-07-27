var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/Edit/:data',function(req,res,next)
{
    console.log(" In get of Edit");
    var SrNo=req.params.data;
    console.log(SrNo);
   // UserData.findOneAndUpdate()
    
    var sql='select*from StudentReg where SrNo = "'+SrNo+'";';
    db.query(sql,function(error,data,fields){
        if(error)throw error;
        else if(data.length<=0)
        {
            var sql='select*from TeacherReg where SrNo = "'+SrNo+'";';
            db.query(sql,function(error,data,fields)
            {if(error)throw error;
              else
              {
                console.log(data)
                res.render('Edit-page',{UserData : data});
              }
            });
        }
        else 
        {
            console.log(data)
            res.render('Edit-page',{UserData : data});
        } 
      }); 
});

router.post('/Edit/:data',function(req,res,next)
{
  console.log(" In Post of Edit");
  var SrNo = req.body.SrNo;
  D ={
       // SrNo : req.body.SrNo,
        Name : req.body.Name,
        Address: req.body.Address,
        Marks:req.body.Marks,
        Branch: req.body.Branch,
        PhoneNo: req.body.PhoneNo,
        Email: req.body.Email,
        password: req.body.Password,
        Gender: req.body.Gender,
        DateOfBirth: req.body.DateofBirth
    }

    console.log(" srno by edit post by body ="+SrNo);

    if(D.Marks!=0 || undefined)
    {
      // var sql = 'CALL UpdateStudentReg (?) where SrNo = ?;'
      var sql = 'UPDATE StudentReg SET ? where SrNo = '+SrNo+';'//,Address=?,Marks=?,Branch=?,PhoneNo=?,Email=?,Password=?,Gender=?,DateofBirth=? WHERE SrNo ='+SrNo+';' 
      db.query(sql,D,function(error,data,fields){
      if(error)throw error;
      else 
        {
          console.log(data)
          db.query("select * from StudentReg where SrNo = ?;",SrNo,function(error,data)
          {
            if(error) throw error;
            res.render('Edit-page',{UserData : data});
          });
        } 
      }); 
    }
    else
    {
      D ={
         Name : req.body.Name,
         Address: req.body.Address,
         Branch: req.body.Branch,
         PhoneNo: req.body.PhoneNo,
         Email: req.body.Email,
         password: req.body.Password,
         Gender: req.body.Gender,
         DateOfBirth: req.body.DateofBirth
     }
      var sql = 'UPDATE TeacherReg SET ? where SrNo = '+SrNo+';'//,Address=?,Marks=?,Branch=?,PhoneNo=?,Email=?,Password=?,Gender=?,DateofBirth=? WHERE SrNo ='+SrNo+';' 
      db.query(sql,D,function(error,data,fields){
      if(error)throw error;
      else 
        {
          console.log(data)
          db.query("select * from TeacherReg where SrNo = ?;",SrNo,function(error,data)
          {
            if(error) throw error;
            res.render('Edit-page',{UserData : data});
          });
        } 
      }); 
    }
   
});


module.exports = router;