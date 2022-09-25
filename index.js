const express=require('express');

const app=require("./app/app")
const cors=require('cors');
app.use(express.urlencoded({ extended: true }));
//create connection mysql
require('./db/connection')

app.listen(app.get('port'),(error)=>{
    if(error){
        console.log(`[there was an error :${error}`);
    }
    else
{
    console.log(`Server running on port: http://localhost:${app.get('port')}`);
}
})

