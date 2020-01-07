var mysql = require("mysql");
var connection;


if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL)
  } 
    else {
      connection = mysql.createConnection({
        host: "z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	",
        port: 3306,
        user: "dpovu6geqs2koyb8",
        password: "dpovu6geqs2koyb8",
        database: "dpovu6geqs2koyb8"
      });
    };

    connection.connect(function(err){
        if (err) {
            console.error("error connecting: "+ err.stack);
            return;
        }
        console.log("connected as id" + connection.threadId);
    });
    
    module.exports = connection;