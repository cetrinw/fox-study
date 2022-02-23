var mysql  = require('mysql');  
const { isGeneratorFunction } = require('util/types');

var connection = mysql.createConnection({     
    host     : 'localhost',       
    user     : 'root',              
    password : 'root1234',       
    port: '3306',                   
    database: 'word' 
  }); 

  connection.connect();

  function select(sql){

    connection.query(sql,function (err, result) {
      if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
      }
  
     console.log('--------------------------SELECT----------------------------');
     console.log(result);
     console.log('------------------------------------------------------------\n\n');  
  });

  connection.end;
}

function insert(sql,sqlParams){
  connection.query(sql,sqlParams,function (err, result) {
    if(err){
      console.log('[INSERT ERROR] - ',err.message);
      return;
    }

   console.log('--------------------------INSERT----------------------------');
   console.log(result);
   console.log('------------------------------------------------------------\n\n');  
  });

  connection.end;
}

module.exports = {
  select,
  insert
}

