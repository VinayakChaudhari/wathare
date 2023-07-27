var express = require('express');
var router = express.Router();
var db=require('../database');


// to display Student Details 
router.get('/teacher_details', function(req, res, next) 
{

  var sql = 'select*from TeacherReg';

    db.query(sql,function(err,data,fields)
    {
       if (err) throw err;
       else console.log(data);
       

       res.render('Teacher-details-form',{title : 'Teacher Details',StudentData : data});

    });

});

router.get('/delete/:data',function(req,res,next)
{
  var SrNo=req.params.data;
  console.log("id by param= "+SrNo);

  var sql = 'DELETE FROM TeacherReg where SrNo ='+SrNo +';';
  db.query(sql,SrNo,function(err,data)
    {
       if (err) throw err;
       else console.log( "Data Deleted Successfully "+data);
       res.redirect('/teacher_details');

    });

});



module.exports = router;