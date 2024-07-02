const con=require('../Controller/Idcontrol')

const express=require('express')

const app=express.Router()

app.post('/',con.POSTData)


module.exports=app;