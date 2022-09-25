const mysql=require('mysql');
const connection=require('../../db/connection');
function getCars(req,res) {
    connection.query('SELECT * FROM empleados',(err,results,rows,fields)=>{
        results.forEach(result=>{
           res.json(result);
        })
    })
    res.json({message:'los autos',name:answer.name})

}
function editCar (req,res){

}
function deleteCar (req,res){
    
}
function addCar (req,res){
    
}
function getOneCar (req,res){
    
}

module.exports={
    getCars,
    editCar,
    addCar,
    getOneCar,
    deleteCar
}