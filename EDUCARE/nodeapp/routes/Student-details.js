var express = require('express');
var router = express.Router();
var db=require('../database');


// to display Student Details 
router.get('/details', function(req, res, next) 
{

  var sql = 'select*from StudentReg';

    db.query(sql,function(err,data,fields)
    {
       if (err) throw err;
       else console.log(data);
       

       res.render('StudentDetails-form',{title : 'Student Details',StudentData : data});

    });

});

router.get('/delete/:data',function(req,res,next)
{
  var SrNo=req.params.data;
  console.log("id by param= "+SrNo);

  var sql = 'DELETE FROM StudentReg where SrNo ='+SrNo +';';
  db.query(sql,SrNo,function(err,data)
    {
       if (err) throw err;
       else console.log( "Data Deleted Successfully "+data);
       res.redirect('/details');

    });

});



module.exports = router;