
const mysql=require('mysql');
const dbConfig=require('./dbConfig')
var connection=mysql.createConnection({
  host:dbConfig.HOST,
  user:dbConfig.USER,
  password:dbConfig.PASSWORD,
  database:dbConfig.DB
})
connection.connect(function(err) {
    if (err) {
        console.error('Error de conexión'+ err.stack);
        return;
    }
    console.log('conectado con el identificador: '+ connection.threadId);
    console.log("Successfully connected to the database");
}
);
connection.query('SELECT * FROM empleados',(err,results,rows,fields)=>{
    results.forEach(result=>{
        console.log(result);
    })
})
connection.end();
module.exports=connection