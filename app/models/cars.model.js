'use strict'
const connection=require('../../db/connection');

var dataModels={
getCars:(callback)=>{
    if (connection) {
        let sql= `select * from cars`
        connection.query(sql,(error,rows)=>{
            if(error)throw error
            callback(rows)
        })
    }
}
}

module.exports=dataModels;