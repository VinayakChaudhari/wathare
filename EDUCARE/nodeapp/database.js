var mysql = require('mysql');
var express = require('express');
var router = express.Router();

var conn = mysql.createConnection({
  host: 'localhost', // assign your host name
  user: 'root',      //  assign your database username
  password: 'root',      // assign your database password
  database: 'project' // assign database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully And Using Database : "project" !');
});
 
/*
var sql = 'select*from StudentReg where Email ='+'"neelmavale26@gmail.com"'+';';
conn.query(sql,function(err,result,fields)
{
   if (err) throw err;
   else console.log(result);
});

conn.query('select*from StudentReg',function(error,result,fields){
  if(error) throw error;
  else  console.log(result);
});*/

/*
router.get('/details', function(req, res, next) 
{

  var sql = 'select*from p';

    db.query(sql,function(err,data,fields)
    {
       if (err) throw err;
       else console.log(data);
       

       res.render('image-page',{title : 'Student Details',UserData : data});

    });

});
*/



module.exports = conn;