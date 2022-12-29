const mysql = require('mysql');

//configuracion de la base de datos 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'personas',
    port: 3306
 });
 connection.connect(function(error){
    if(error){
       throw error;
    }else{
       console.log('Conexion correcta.');
    }
 });
 connection.end();