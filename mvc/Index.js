
const mongoose=require('mongoose')
const express=require('express')
const pro=express()
const cors=require('cors')


const route=require('./Router/Router')

const rout=require('./Router/Idrouter')
const jwtRoute=require('./Router/UserRouter')


pro.use(express.json())
pro.use(cors())
pro.use('/user',route)//http://localhost:4000/user
pro.use('/id',rout)//http://localhost:4000/id
pro.use('/jwt',jwtRoute)//http://localhost:4000/jwt



//cmTir9DH7e2P7f7M
//MVC

mongoose.connect('mongodb+srv://aswinyuva10:cmTir9DH7e2P7f7M@cluster0.i8cpfco.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('DB CONNECTED')
    pro.listen(4000)
    
})


