var express = require('express');
var router = express.Router();
var db=require('../database');

router.get('/Timetable', function(req, res, next) 
{
  console.log(" In GET of Timetable");
  
  var sql = 'select*from Timetable';

    db.query(sql,function(err,data,fields)
    {
       if (err) throw err;
       else console.log(data);
       

       res.render('timetable-page',{title : ' Time Table',TimetableData : data});

    });

});


router.get('/Timetable/:data', function(req, res, next) 
{
  console.log(" In GET of 2nd Timetable");
  //var Days=req.body.Days
  console.log(req.params.data);
  console.log(req.body);
  //var Day=req.params.data;

  TimetableData.findOneAndUpdate({Day:req.params.data},req.body,{new:true},function(err,data)
  {
    if(err) throw err;
    else
    {
      res.render('timetable-page',{TimetableData : data});
    }

  });
});

router.post('/Timetable/:data', function(req, res, next) 
{
  console.log(" In post of  Timetable");
  console.log(req.params.data);
  console.log(req.body);

  TimetableData.findByIdAndUpdate({Day:req.params.data},req.body,{new:true},function(err,data)
  {
    if(err) throw err;
    else
    {
      res.redirect('timetable-page');
    }

  });
});

/*
router.post('/Timetable/:data',function(req,res,next)
{
  console.log(" In Post of Timetable");
  var Day=req.query.Day;
  var Days = req.body.Day;
  console.log( " by Query "+Day);
  console.log( " by body "+Days);

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

    console.log(" srno by edit post by D ="+Day);
    console.log(" srno by edit post by body ="+Day);
    var sql = 'UPDATE Timetable SET ? where Days = '+Day+';'
    db.query(sql,D,function(error,data,fields){
    if(error)throw error;
    else 
      {
        console.log(data)
        db.query("select * from Timetable where Days = ?;",Day,function(error,data)
        {
          if(error) throw error;
          res.render('timetable-page',{TimetableData : data});
        });
      } 
    }); 
});
*/
module.exports = router;