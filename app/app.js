const express=require('express')
const port=process.env.PORT || 3002

//inicializations
const app=express()

//settings
app.set('port',port)

//middlewares
require('../app/controllers/tutorial.controller')
// app.use(express.urlencoded({extended:false}))
// app.use(express.json)

//Routes
app.use(require('./routes/cars.routes')) 

module.exports=app;